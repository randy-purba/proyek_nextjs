import { AvField } from 'availity-reactstrap-validation'
import { FormGroup, Label } from 'reactstrap'
import ImagePreviewCard from '../cards/ImagePreviewCard'
import VideoPreviewCard from '../cards/VideoPreviewCard'

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
            {
                props.formValue ? 
                    (props.fileType == "image" ? 
                        <ImagePreviewCard widthImage={props.widthImagePreview} heightImage={props.heightImagePreview} srcImage={props.formValue}/>
                        : <VideoPreviewCard srcVideo={props.formValue}/> )
                 : ""
            }
            
            <AvField 
                className={props.formClassName} 
                id={props.formId} 
                type="file" 
                name={props.formName} 
                placeholder={props.formPlaceholder} 
                onChange={props.onChange} 
                errorMessage={props.formErrorMessage} 
                validate={props.formValidate} 
                related={props.formRelation}
                // value={props.formValue}
                bsSize={props.formSize}
            />
        </FormGroup>
    )
}