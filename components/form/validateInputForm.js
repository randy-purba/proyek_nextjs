import { AvField } from 'availity-reactstrap-validation'
import { FormGroup, Label } from 'reactstrap'

export default (props) => {
    return (
        <FormGroup 
            className={`mb-3 position-relative ${props.containerClassName ? props.containerClassName : ''}`}
            {...props.containerStyle}
        >
            {
                props.withLabel ?
                <Label for={props.formId} className={props.labelClassName}>{props.labelName}</Label> : ""
            }
            <AvField 
                className={props.formClassName} 
                id={props.formId} 
                type={props.formType} 
                name={props.formName} 
                placeholder={props.formPlaceholder} 
                onChange={props.onChange} 
                errorMessage={props.formErrorMessage} 
                validate={props.formValidate} 
                related={props.formRelation}
                value={props.formValue}
                bsSize={props.formSize}
            />
        </FormGroup>
    )
}