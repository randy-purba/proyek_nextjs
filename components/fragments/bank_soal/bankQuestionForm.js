
import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormSelectValidation from '../../form/validateSelectForm'

export default (props) => {

    const { 
        title, listRole, dataName, dataPassword, dataEmail, dataNoTelp, dataRole, 
        onHandleChange, onHandleSubmit, onHandleSelectOption, statusForm
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
                            labelName="Kata Sandi - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldPassword" 
                            formType="password" 
                            formName="dataPassword" 
                            formValue={dataPassword}
                            formPlaceholder="Masukkan kata sandi"
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: 'Kata Sandi tidak boleh kosong' }
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
                            formValue={dataEmail}
                            formPlaceholder="Masukkan alamat email"
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: 'Alamat email tidak boleh kosong' },
                                pattern: {errorMessage: 'Invalid email'},
                                email: true
                            }}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Nomor Telpon - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="yourFormTelp" 
                            formType="text" 
                            formName="dataNoTelp" 
                            formPlaceholder="Masukan Nomor Telpon" 
                            formValue={dataNoTelp}
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: 'Nomor telepon tidak boleh kosong' },
                                pattern: {value: '^[0-9]+$', errorMessage: 'Invalid nomor telepon'},
                                email: true
                            }}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormSelectValidation 
                            withLabel={true}
                            labelName="Role - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-2 px-2 bg-white mb-0"
                            formId="idFieldRole" 
                            formName="dataRole" 
                            formValue={dataRole}
                            formPlaceholder="Pilih Role"
                            formOptionData={listRole}
                            onChange={onHandleSelectOption}
                            formErrorMessage="Silahkan pilih role" 
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