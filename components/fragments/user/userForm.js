
import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormSelectValidation from '../../form/validateSelectForm'
import FormCheckboxValidation from '../../form/validateCheckboxForm'

export default (props) => {

    const { 
        title, dataName, dataEmail, dataPassword, dataUserRole, onHandleChange, 
        onHandleSubmit, statusForm, onHandleSelectOption
    } = props
    
    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <h5 className="font-16 text-primary mb-3">{title}</h5> : ""}
            <AvForm onValidSubmit={onHandleSubmit} method="post" autoComplete="off" >		
                <Row>		    
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Name - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldName" 
                            formType="text" 
                            formName="dataName" 
                            formValue={dataName}
                            formPlaceholder="Input Name"
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: "Name can't be empty" }
                            }}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Email - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldEmail" 
                            formType="email" 
                            formName="dataEmail" 
                            formPlaceholder="Input Email" 
                            formValue={dataEmail}
                            onChange={onHandleChange}
                            formValidate={{
                                required: { value: true, errorMessage: "Email can't be empty" },
                                email: true
                            }} 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Password - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldPassword" 
                            formType="password" 
                            formName="dataPassword" 
                            formPlaceholder="Input Password" 
                            formValue={dataPassword}
                            formValidate={{
                                required: { value: true, errorMessage: "Password can't be empty" }
                            }} 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12" >
                        <FormSelectValidation 
                            withLabel={true}
                            labelName="User Role - Validate"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-2 px-2 bg-white mb-0"
                            formId="idFieldUserRole" 
                            formName="dataUserRole" 
                            formValue={dataUserRole}
                            formPlaceholder="Select User Role"
                            formOptionData={[
                                { 'id': "1", 'name': "Super Admin" },
                                { 'id': "2", 'name': "Admin" }
                            ]}
                            onChange={onHandleSelectOption}
                            formErrorMessage="Please select user role" 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <Button size="lg" color={statusForm == "add" ? "primary" : "info"}  type="submit" className="float-right mt-3 mb-2 px-5 text-uppercase font-12">{statusForm == "add" ? "Save" : "Update"}</Button>
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}