import { FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText,CustomInput, Row, Col } from 'reactstrap'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';


export default (props) => {
    return (
        <FormGroup 
            className={`mb-1 position-relative ${props.containerClassName ? props.containerClassName : ''}`}
            {...props.containerStyle}
        >
            {
                props.withLabel ?
                <Label for={props.formId} className={props.labelClassName}>{props.labelName}</Label> : ""
            }
            <AvGroup>
                <Row>
                    <Col xs="2" sm="1" md="1">
                        <Label className={props.labelClassName}>{props.labelInputGroup}</Label>
                    </Col>
                    <Col xs="8" sm="10" md="10">
                    <AvField 
                        className={props.formClassNameInput} 
                        id={props.formIdInput} 
                        type="text" 
                        name={props.formNameInput} 
                        placeholder={props.formPlaceholder} 
                        onChange={props.onChangeInput} 
                        errorMessage={props.formErrorMessageInput} 
                        validate={props.formValidate} 
                        related={props.formRelationInput}
                        value={props.formValue}
                        bsSize={props.formSizeInput}
                    />
                    </Col>
                    <Col xs="2" sm="1" md="1">
                        <AvGroup check className="px-1"> 
                            <AvInput 
                                tag={CustomInput}
                                type="checkbox"
                                value={props.formValueCheckbox}
                                id={props.formIdCheckbox}
                                name={props.formNameCheckbox} 
                                value={props.formValueCheckbox}
                                bsSize={props.formSizeCheckbox}
                                className="py-2"
                                onChange={props.onChangeCheckbox} 
                            />
                        </AvGroup>
                    </Col >
                </Row>
                <AvFeedback>This is an error!</AvFeedback>
            </AvGroup>
        </FormGroup>
    )
}