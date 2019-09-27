
import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormInput from '../../form/inputForm'

export default (props) => {

    const { 
        title, dataName, dataEmail, dataPhoneNumber, onHandleChange, onHandleSubmit, statusForm
    } = props
    
    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <h5 className="font-16 text-primary mb-3">{title}</h5> : ""}
            <AvForm onValidSubmit={onHandleSubmit} method="post" autoComplete="off" >		
                <Row>		    
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Nama - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldName" 
                            formType="text" 
                            formName="dataName" 
                            formValue={dataName}
                            formPlaceholder="Masukkan nama"
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: 'Nama tidak boleh kosong' }
                            }}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Alamat Email - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldEmail" 
                            formType="email" 
                            formName="dataEmail" 
                            formPlaceholder="Masukan alamat email" 
                            formErrorMessage="Alamat email salah" 
                            onChange={onHandleChange} 
                            formValue={dataEmail}
                            formValidate={{
                                required: { value: true, errorMessage: 'Alamat email tidak boleh kosong' },
                                email: true
                            }} 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInput 
                            withLabel={true}
                            labelName="Nomor Telpon - Tanpa Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldPhoneNumber" 
                            formType="number" 
                            formName="dataPhoneNumber" 
                            formPlaceholder="Masukan Nomor Telpon" 
                            formValue={dataPhoneNumber}
                            onChange={onHandleChange}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <Button size="lg" color={statusForm == "add" ? "primary" : "info"}  type="submit" className="float-right mt-3 mb-2 px-5 text-uppercase font-12">{statusForm == "add" ? "Simpan" : "Update"}</Button>
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}