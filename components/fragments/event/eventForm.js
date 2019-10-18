import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormInputFileValidation from '../../form/validateInputFileForm'
import FormDatePicker from '../../form/validateDatePickerForm'
import FormSelectValidation from '../../form/validateSelectForm'
import FormCheckboxInInputValidation from '../../form/validateCheckboxInInputForm'

export default (props) => {

    const { 
        formStatus, title, onHandleChange, onHandleSubmit, dataMaxUser, dataDescription,
        dataEventDate, dataExpiredDate, onHandleDatePickerChange
    } = props
    
    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <h5 className="font-16 text-primary mb-3">{title}</h5> : ""}
            <AvForm onValidSubmit={(e) => onHandleSubmit("Save")} method="post" autoComplete="off" >		
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Description - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldDescription" 
                            formType="text" 
                            formName="valueDescription" 
                            formValue={dataDescription}
                            formPlaceholder="Input Description" 
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: "Description can't be empty" }
                            }} 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Max User & Zona - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldMaxUser" 
                            formType="number" 
                            formName="valueMaxUser" 
                            formValue={dataMaxUser}
                            formPlaceholder="Input Max User & Zona" 
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: "Max user & zona can't be empty" }
                            }} 
                        />
                    </Col>
                    <Col xs="6" sm="6" md="6">
                        <FormDatePicker 
                            withLabel={true}
                            labelName="Event Date - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idEventDate" 
                            formName="valueEventDate" 
                            formSelected={dataEventDate}
                            formValue={dataEventDate}
                            formTimeFormat="HH:mm"
                            formTimeIntervals={15}
                            formDateFormat="MMMM d, yyyy h:mm aa"
                            formRequired={true}
                            onChange={date => onHandleDatePickerChange(date, 'valueEventDate')} 
                        />
                    </Col>
                    <Col xs="6" sm="6" md="6">
                        <FormDatePicker 
                            withLabel={true}
                            labelName="Expired Date - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idExpiredDate" 
                            formName="valueExpiredDate" 
                            formMinDate={dataEventDate}
                            formSelected={dataExpiredDate}
                            formValue={dataExpiredDate}
                            formTimeFormat="HH:mm"
                            formTimeIntervals={15}
                            formRequired={true}
                            formDateFormat="MMMM d, yyyy h:mm aa"
                            onChange={date => onHandleDatePickerChange(date, 'valueExpiredDate')} 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <Button size="lg" color="primary" type="submit" className="float-right mt-3 mb-2 px-5 mx-1 text-uppercase font-12">Save</Button>
                        <Button size="lg" color="secondary" onClick={(e) => onHandleSubmit("Cancel")} className="float-right mt-3 mb-2 px-5 text-uppercase font-12">Cancel</Button>
                        { formStatus == 'add' ? 
                            <Button size="lg" color="warning" onClick={(e) => onHandleSubmit((dataDescription && dataMaxUser) ? "Publish" : (null))} className="float-right mt-3 mb-2 px-5 mx-1 text-uppercase font-12">Publish</Button>
                            : (null)
                        }
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}