import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormInputFileValidation from '../../form/validateInputFileForm'
import FormSelectValidation from '../../form/validateSelectForm'
import FormCheckboxInInputValidation from '../../form/validateCheckboxInInputForm'

export default (props) => {

    const { 
        title, onHandleChange, onHandleSelectOption, onHandleSubmit, dataTitleVideo,
        dataFileVideo, dataFileCoverVideo, onHandleFileInputChange
    } = props
    
    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <h5 className="font-16 text-primary mb-3">{title}</h5> : ""}
            <AvForm onValidSubmit={onHandleSubmit} method="post" autoComplete="off" >		
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Title Video - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldTitleVideo" 
                            formType="text" 
                            formName="valueTitleVideo" 
                            formValue={dataTitleVideo}
                            formPlaceholder="Input Title Video" 
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: "Title video can't be empty" }
                            }} 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInputFileValidation 
                            withLabel={true}
                            labelName="File Video - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldFileVideo" 
                            formName="valueFileVideo" 
                            fileType="video"
                            formValue={dataFileVideo}
                            formPlaceholder="Input Title Video" 
                            onChange={onHandleFileInputChange} 
                            formValidate={{
                                required: { value: true, errorMessage: "File video can't be empty" }
                            }} 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <FormInputFileValidation 
                            withLabel={true}
                            labelName="Cover Video - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldFileCoverVideo" 
                            formName="valueFileCoverVideo" 
                            formValue={dataFileCoverVideo}
                            formPlaceholder="Input Cover Video" 
                            onChange={onHandleFileInputChange} 
                            imagePreviewId="valueFileCoverVideoPreview"
                            fileType="image"
                            widthImagePreview="75%"
                            heightImagePreview="50%"
                            formValidate={{
                                required: { value: true, errorMessage: "File Cover video can't be empty" }
                            }} 
                        />
                    </Col>
                    <Col xs="12" sm="12" md="12">
                        <Button size="lg" color="primary" type="submit" className="float-right mt-3 mb-2 px-5 text-uppercase font-12">Save</Button>
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}