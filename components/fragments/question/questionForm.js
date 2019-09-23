import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormSelectValidation from '../../form/validateSelectForm'
import FormCheckboxInInputValidation from '../../form/validateCheckboxInInputForm'

export default (props) => {

    const { 
        title, listZone, listQuestionType, onHandleChange, onHandleSelectOption, onHandleSubmit, onHandleCheckbox,
        dataZone, dataQuestionType, dataQuestion, dataChoiceAnswerA, dataCheckboxChoiceAnswerA,
        dataChoiceAnswerB, dataCheckboxChoiceAnswerB, dataChoiceAnswerC, dataCheckboxChoiceAnswerC,
        dataChoiceAnswerD, dataCheckboxChoiceAnswerD, dataAnswerEssay, dataVideoLink
    } = props
    
    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <h5 className="font-16 text-primary mb-3">{title}</h5> : ""}
            <AvForm onValidSubmit={onHandleSubmit} method="post" autoComplete="off" >		
                <Row>		
                    <Col xs="12" sm="6" md="6">
                        <FormSelectValidation 
                            withLabel={true}
                            labelName="Zona - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-2 px-2 bg-white mb-0"
                            formId="idFieldZone" 
                            formName="fieldZone" 
                            formValue={dataZone}
                            formPlaceholder="Pilih Zona"
                            formOptionData={listZone}
                            onChange={onHandleSelectOption}
                            formErrorMessage="Silahkan pilih zona" 
                        />
                    </Col>
                    <Col xs="12" sm="6" md="6">
                        <FormSelectValidation 
                            withLabel={true}
                            labelName="Tipe Pertanyaan - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-2 px-2 bg-white mb-0"
                            formId="idFieldQuestionType" 
                            formName="fieldQuestionType" 
                            formValue={dataQuestionType}
                            formPlaceholder="Pilih Tipe Pertanyaan"
                            formOptionData={listQuestionType}
                            onChange={onHandleSelectOption}
                            formErrorMessage="Silahkan pilih tipe pertanyaan" 
                        />
                    </Col>
                    { dataQuestionType == 2 ? 
                        <Col xs="12" sm="12" md="12">
                            <FormInputValidation 
                                withLabel={true}
                                labelName="Link Video - Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-4 px-2 bg-white mb-0"
                                formId="idFieldVideoLink" 
                                formType="text" 
                                formName="fieldVideoLink" 
                                formValue={dataVideoLink}
                                formPlaceholder="https://"
                                onChange={onHandleChange} 
                                formValidate={{
                                    required: { value: true, errorMessage: 'Link Video tidak boleh kosong' }
                                }}/>
                        </Col> : "" 
                    }
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Pertanyaan - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldQuestion" 
                            formType="textarea" 
                            formName="fieldQuestion" 
                            formValue={dataQuestion}
                            formPlaceholder="Masukan pertanyaan" 
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: 'Pertanyaan tidak boleh kosong' },
                                minLength: {value: 25, errorMessage: "Pertanyaan harus antara 25 dan 255 karakter"},
                                maxLength: {value: 255, errorMessage: "Pertanyaan harus antara 25 dan 255 karakter"}
                            }} 
                        />
                    </Col>

                    { dataQuestionType == 2 ? 
                    <Col xs="12" sm="12" md="12">
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Jawaban - Validasi"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idFieldAnswerEssay" 
                            formType="textarea" 
                            formName="fieldAnswerEssay" 
                            formValue={dataAnswerEssay}
                            formPlaceholder="Masukan jawaban" 
                            onChange={onHandleChange}
                            formValidate={{
                                required: { value: true, errorMessage: 'Jawaban tidak boleh kosong' },
                                minLength: {value: 25, errorMessage: "Jawaban harus antara 25 dan 255 karakter"},
                                maxLength: {value: 255, errorMessage: "Jawaban harus antara 25 dan 255 karakter"}
                            }} 
                        />
                    </Col> :
                        <Col xs="12" sm="12" md="12">
                            <Label className="font-16 text-primary">Choice Answer</Label>
                            <Label className="font-16 text-primary float-right px-lg-2">Key</Label>
                            <FormCheckboxInInputValidation
                                labelInputGroup="A. "
                                formIdInput="idFieldChoiceAnswerA"
                                formNameInput="fieldChoiceAnswerA"
                                formTypeInput="text"   
                                formPlaceholder= "Masukkan Jawaban A"
                                formIdCheckbox="idFieldCheckboxChoiceAnswerA"
                                formNameCheckbox="fieldCheckboxChoiceAnswerA"
                                formValue={dataChoiceAnswerA}
                                formValueCheckbox={dataCheckboxChoiceAnswerA}
                                labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                                formValidate={{
                                    required: { value: true, errorMessage: 'Jawaban tidak boleh kosong' }
                                }} 
                                onChangeInput={onHandleChange}
                                onChangeCheckbox={onHandleCheckbox}
                            />
                            <FormCheckboxInInputValidation
                                labelInputGroup="B. "
                                formIdInput="idFieldChoiceAnswerB"
                                formNameInput="fieldChoiceAnswerB"
                                formTypeInput="text"   
                                formPlaceholder= "Masukkan Jawaban B"
                                formIdCheckbox="idFieldCheckboxChoiceAnswerB"
                                formNameCheckbox="fieldCheckboxChoiceAnswerB"
                                formValue={dataChoiceAnswerB}
                                formValueCheckbox={dataCheckboxChoiceAnswerB}
                                labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                                formValidate={{
                                    required: { value: true, errorMessage: 'Jawaban tidak boleh kosong' }
                                }} 
                                onChangeInput={onHandleChange}
                                onChangeCheckbox={onHandleCheckbox}
                            />
                            <FormCheckboxInInputValidation
                                labelInputGroup="C. "
                                formIdInput="idFieldChoiceAnswerC"
                                formNameInput="fieldChoiceAnswerC"
                                formTypeInput="text"   
                                formPlaceholder= "Masukkan Jawaban C"
                                formIdCheckbox="idFieldCheckboxChoiceAnswerC"
                                formNameCheckbox="fieldCheckboxChoiceAnswerC"
                                formValue={dataChoiceAnswerC}
                                formValueCheckbox={dataCheckboxChoiceAnswerC}
                                labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                                formValidate={{
                                    required: { value: true, errorMessage: 'Jawaban tidak boleh kosong' }
                                }} 
                                onChangeInput={onHandleChange}
                                onChangeCheckbox={onHandleCheckbox}
                            />
                            <FormCheckboxInInputValidation
                                labelInputGroup="D. "
                                formIdInput="idFieldChoiceAnswerD"
                                formNameInput="fieldChoiceAnswerD"
                                formTypeInput="text"   
                                formPlaceholder= "Masukkan Jawaban D"
                                formIdCheckbox="idFieldCheckboxChoiceAnswerD"
                                formNameCheckbox="fieldCheckboxChoiceAnswerD"
                                formValue={dataChoiceAnswerD}
                                formValueCheckbox={dataCheckboxChoiceAnswerD}
                                labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                                formValidate={{
                                    required: { value: true, errorMessage: 'Jawaban tidak boleh kosong' }
                                }} 
                                onChangeInput={onHandleChange}
                                onChangeCheckbox={onHandleCheckbox}
                            />
                        </Col>
                    }
                    <Col xs="12" sm="12" md="12">
                        <Button size="lg" color="primary" type="submit" className="float-right mt-3 mb-2 px-5 text-uppercase font-12">Kirim</Button>
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}