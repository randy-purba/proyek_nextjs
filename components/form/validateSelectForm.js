import { AvField } from 'availity-reactstrap-validation'
import { FormGroup, Label } from 'reactstrap'

export default (props) => {

    return (
        <FormGroup 
            className={`mb-3 position-relative pt-0 ${props.containerClassName ? props.containerClassName : ''}`}
            {...props.containerStyle}
        >
            
            {
                props.withLabel ?
                <Label for={props.formId} className={props.labelClassName}>{props.labelName}</Label> : ""
            }
            {
                props.disableThisField ? 
                ( <AvField 
                    type="select"
                    name={props.formName} 
                    value={props.formValue}
                    className={props.formClassName} 
                    bsSize={props.formSize}
                    onChange={props.onChange}
                    errorMessage={props.formErrorMessage} 
                    disabled
                >
                    {
                        props.formPlaceholder ?
                        <option key={0} value={0} hidden>{props.formPlaceholder}</option> : ""
                    }
                    {props.formOptionData.map((data) => <option key={data.id} value={data.id}>{data.name}</option>)}
                </AvField> ) : 
                <AvField 
                    type="select"
                    name={props.formName} 
                    value={props.formValue}
                    className={props.formClassName} 
                    bsSize={props.formSize}
                    onChange={props.onChange}
                    errorMessage={props.formErrorMessage} 
                    required
                >
                    {
                        props.formPlaceholder ?
                        <option key={0} value={0} hidden>{props.formPlaceholder}</option> : ""
                    }
                    {props.formOptionData.map((data) => <option key={data.id} value={data.id}>{data.name}</option>)}
                </AvField>
            }
        </FormGroup>
    )
}