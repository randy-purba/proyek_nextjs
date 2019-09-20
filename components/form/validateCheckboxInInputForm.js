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
            {/* <AvField 
                type={props.formTypeInput} 
                name="name" 
                label="Name" 
            /> */}
            <AvGroup>
                <Row>
                    <Col xs="1" sm="1" md="1">
                        <Label className={props.labelClassName}>{props.labelInputGroup}</Label>
                    </Col>
                    <Col xs="10" sm="10" md="10">
                        <AvInput name="rank" id="example" required />
                    </Col>
                    <Col xs="1" sm="1" md="1">
                        <AvInput tag={CustomInput} type="checkbox" name="customCheckbox"/>
                    </Col >
                </Row>
                <AvFeedback>This is an error!</AvFeedback>
            </AvGroup>
            {/* <InputGroup>
                <Label className={props.labelClassName}>{props.labelInputGroup}</Label>
                <Input 
                    required
                    id={props.formIdInput} 
                    name={props.formNameInput} 
                    type={props.formTypeInput} 
                    placeholder={props.formPlaceholder}
                    onChange={props.onChange}
                    value={props.formValue} 
                    bsSize={props.formSize} />
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input 
                            addon 
                            id={props.formIdCheckbox} 
                            name={props.formNameCheckbox} 
                            type="checkbox" 
                            aria-label="Checkbox for following text input" 
                        />
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup> */}
        </FormGroup>
    )
}