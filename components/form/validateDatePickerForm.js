import DatePicker from 'react-datepicker'
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
            <DatePicker
                className={props.formClassName} 
                id={props.formId} 
                name={props.formName} 
                selected={props.formSelected}
                onChange={props.onChange}
                timeCaption="time"
                timeFormat={props.formTimeFormat}
                timeIntervals={props.formTimeIntervals}
                dateFormat={props.formDateFormat}
                required={props.formRequired} 
                errorMessage={props.formErrorMessage} 
                minDate={props.formMinDate}
                showTimeSelect
            />
        </FormGroup>
    )
}