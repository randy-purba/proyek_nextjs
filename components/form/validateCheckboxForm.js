import { AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation'
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
            <AvCheckboxGroup 
                inline className={props.formClassName}  
                name={props.formName} 
                label={props.formLabel} 
                validate={props.formValidate} 
                value={props.formValue}
                onChange={props.onChange} 
            >
                { props.data ? 
                        props.data.map((data, index) => (
                            <AvCheckbox key={index} label={data.label} value={data.value} />
                        ))
                    : (null)}
            </AvCheckboxGroup>
        </FormGroup>
    )
}