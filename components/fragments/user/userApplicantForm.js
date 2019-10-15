
import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormCheckboxValidation from '../../form/validateCheckboxForm'

export default (props) => {

    const { 
        title, modelUserApplicant, onHandleChange, onHandleSubmit, statusForm
    } = props

    console.dir(modelUserApplicant)

    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <h5 className="font-16 text-primary mb-3">{title}</h5> : ""}
            <AvForm onValidSubmit={onHandleSubmit} onChange={onHandleChange} method="post" autoComplete="off" model={modelUserApplicant}>		
                <Row>		    
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Name - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldName" 
                            formType="text" 
                            formName="dataName" 
                            formValue={ modelUserApplicant ? modelUserApplicant.dataName : "" }
                            formPlaceholder="Input Name"
                            formValidate={{
                                required: { value: true, errorMessage: "Name can't be empty" }
                            }}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Phone Number - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldPhoneNumber" 
                            formType="number" 
                            formName="dataPhoneNumber" 
                            formPlaceholder="Input Phone Number" 
                            formValue={ modelUserApplicant ? modelUserApplicant.dataPhoneNumber : "" }
                            formValidate={{
                                required: { value: true, errorMessage: "Phone number can't be empty" }
                            }} 
                        />
                    </Col>
                    {/* <Col xs="12" sm="12" md="12" >
                        <FormCheckboxValidation 
                            withLabel={true}
                            labelName="User Mode - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formName="dataCheckboxUserMode"
                            // formValue={ modelUserApplicant ? modelUserApplicant.dataCheckboxUserMode : [] }
                            data={[
                                { 'label': "Interview", 'value': "interview" },
                                { 'label': "Game", 'value': "game" }
                            ]}
                            formValidate={{
                                required: { value: true, errorMessage: "Choice User Mode" }
                            }} 
                        />
                    </Col> */}
                    <Col xs="12" sm="12" md="12">
                        <Button size="lg" color={statusForm == "add" ? "primary" : "info"}  type="submit" className="float-right mt-3 mb-2 px-5 text-uppercase font-12">{statusForm == "add" ? "Save" : "Update"}</Button>
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}