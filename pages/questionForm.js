import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AvForm } from 'availity-reactstrap-validation'
import ContentBox from '../components/contentBox'
import FormInput from '../components/form/inputForm'
import FormSelect from '../components/form/selectForm'
import FormInputValidation from '../components/form/validateInputForm'
import FormSelectValidation from '../components/form/validateSelectForm'
import { Container, Row, Col, Button } from 'reactstrap'
import { regexHtmlTag } from '../components/functions'
import { getListCities } from '../components/actions'

class QuestionForm extends React.Component {
	static async getInitialProps({ store }) {
		let stores = await store.getState()
		try {
			if(!stores.listCity) await store.dispatch(getListCities())
		} catch (e) {
			props.error = 'Unable to fetch AsyncData on server'
		}
		return props
	}

	constructor(props) {
        console.log("Test")
		super(props)
		this.state = {
			formNama: "Budi Santoso",
			formEmail: "budi@san.toso",
			formTelp: "0210909090",
			formKota: 2,
			formProvinsi: 0,
			formNomor: 10,
			listCity: props.listCity
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			listCity: nextProps.listCity,
		})
	}

	handleChange = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		this.setState({ [name]: regexHtmlTag(value) })
		if(related) this.setState({ [related]: regexHtmlTag(value) })
	}

	handleSelectOption = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		this.setState({ [name]: Number(value) })
		if(related) this.setState({ [related]: 0 })
	}
 
	render() {
		const { listCity } = this.state
		const listProvince = listCity.filter(data => data.id === this.state.formKota)[0].provinsi
		return (
            <Row>
                <Col lg="12">
                    <ContentBox 
                        title="Registration Form"
                        className="bg-grey rounded shadow-sm p-3 mb-4 overflow-auto"
                    >
                        <AvForm onValidSubmit={this.handleSubmit} method="post" autoComplete="off" >
                            <FormInput 
                                withLabel={true}
                                labelName="Nama Lengkap - Tanpa Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-4 px-2 bg-white mb-0"
                                formId="yourFormNama" 
                                formType="text" 
                                formName="formNama"
                                formPlaceholder="Masukan Nama" 
                                formValue={this.state.formNama}
                                onChange={this.handleChange} 
                            />
                            <FormInputValidation 
                                withLabel={true}
                                labelName="Alamat Email - Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-4 px-2 bg-white mb-0"
                                formId="yourFormEmail" 
                                formType="email" 
                                formName="formEmail" 
                                formPlaceholder="Masukan alamat email" 
                                formErrorMessage="Alamat email salah" 
                                onChange={this.handleChange} 
                                formValue={this.state.formEmail}
                                formValidate={{
                                    required: { value: true, errorMessage: 'Alamat email tidak boleh kosong' },
                                    email: true
                                }} 
                            />
                            <FormInput 
                                withLabel={true}
                                labelName="Nomor Telpon - Tanpa Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-4 px-2 bg-white mb-0"
                                formId="yourFormTelp" 
                                formType="text" 
                                formName="formTelp" 
                                formPlaceholder="Masukan Nomor Telpon" 
                                formValue={this.state.formTelp}
                                onChange={this.handleChange} 
                            />
                            <FormSelect
                                withLabel={true}
                                labelName="Kota - Tanpa Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-2 px-2 bg-white mb-0"
                                formId="yourFormKota" 
                                formName="formKota" 
                                formPlaceholder="Pilih Kota"
                                formRelation="formProvinsi"
                                formOptionData={listCity}
                                formValue={this.state.formKota}
                                onChange={this.handleSelectOption} 
                            />
                            <FormSelectValidation 
                                withLabel={true}
                                labelName="Provinsi - Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-2 px-2 bg-white mb-0"
                                formId="yourFormKota" 
                                formName="formProvinsi" 
                                formPlaceholder="Pilih Provinsi"
                                formValue={this.state.formProvinsi}
                                formOptionData={listProvince}
                                onChange={this.handleSelectOption}
                                formErrorMessage="Silahkan pilih provinsi" 
                            />
                            <FormInput 
                                withLabel={true}
                                labelName="Nomor Rumah - Tanpa Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-4 px-2 bg-white mb-0"
                                formId="yourFormNomor" 
                                formType="number" 
                                formName="formNomor"
                                formPlaceholder="Masukan Nomor Rumah" 
                                formValue={this.state.formNomor}
                                onChange={this.handleChange} 
                            />
                            <Button size="lg" color="primary" type="submit" className="float-right mt-3 mb-2 px-5 text-uppercase font-12">Kirim</Button>
                        </AvForm>
                    </ContentBox>
                </Col>
            </Row>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListCities: bindActionCreators(getListCities, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(QuestionForm)