import { FormGroup, Label, Input } from 'reactstrap'

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
            <Input 
                type="select"
                className={props.formClassName} 
                name={props.formName}   
                id={props.formId} 
                value={props.formValue}
                onChange={props.onChange}
                related={props.formRelation}
                bsSize={props.formSize}
            >
                {
                    props.formPlaceholder ?
                    <option key="" value="" readOnly hidden>{props.formPlaceholder}</option> : ""
                }
                {
                    props.formOptionData.map((data, key) => <option key={key} value={data.id}>{data.name}</option>)
                }
            </Input>
        </FormGroup>
    )
}