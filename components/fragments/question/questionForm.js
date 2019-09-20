import { useState } from 'react'
import { AvForm } from 'availity-reactstrap-validation'
import { Table, Row, Col, Button } from 'reactstrap'
import DatePicker from 'react-datepicker'
import FormSelect from '../../form/selectForm'
import FormInput from '../../form/inputForm'
import FormInputValidation from '../../form/validateInputForm'
import FormSelectValidation from '../../form/validateSelectForm'
import FormCheckboxInInputValidation from '../../form/validateCheckboxInInputForm'
import Workbook from 'react-excel-workbook'
import { addDays, timestampToDateTime } from '../../functions'

export default (props) => {

    const { 
        title, listZone, listQuestionType
    } = props

    
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date(startDate))
    const [inputs, setInputs] = useState({keywords: ""})

    const minLengthQuestion = 25
    const maxLengthQuestion = 255
    const errorMessageLengthQuestion = "Pertanyaan harus antara " + minLengthQuestion + " dan " + maxLengthQuestion + " karakter"

    const handleExportSelect = (e) => {
        e.persist()
        setSaveType(() => ({typeFile: e.target.value}))
    }

    const handleSearchKeyword = (e) => {
        e.persist()
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
    }
    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <h5 className="font-16 text-primary mb-3">{title}</h5> : ""}
                <AvForm onValidSubmit={props.handleSubmit} method="post" autoComplete="off" >		
                    <Row>		
                        <Col xs="12" sm="6" md="6">
                             <FormSelectValidation 
                                withLabel={true}
                                labelName="Zona - Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-2 px-2 bg-white mb-0"
                                formId="idFormZone" 
                                formName="formZone" 
                                formPlaceholder="Pilih Zona"
                                formOptionData={listZone}
                                formErrorMessage="Silahkan pilih zona" 
                            />
                        </Col>
                        <Col xs="12" sm="6" md="6">
                            <FormSelectValidation 
                                withLabel={true}
                                labelName="Tipe Pertanyaan - Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-2 px-2 bg-white mb-0"
                                formId="idFormQuestionType" 
                                formName="formQuestionType" 
                                formPlaceholder="Pilih Tipe Pertanyaan"
                                formOptionData={listQuestionType}
                                formErrorMessage="Silahkan pilih tipe pertanyaan" 
                            />
                        </Col>
                        <Col xs="12" sm="12" md="12">
                            <FormInputValidation 
                                withLabel={true}
                                labelName="Pertanyaan - Validasi"
                                labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                formClassName="py-4 px-2 bg-white mb-0"
                                formId="idFormQuestion" 
                                formType="textarea" 
                                formName="formQuestion" 
                                formPlaceholder="Masukan pertanyaan" 
                                formValue={props.title}
                                onChange={props.handleChange} 
                                formValue={props.formQuestion}
                                formValidate={{
                                    required: { value: true, errorMessage: 'Pertanyaan tidak boleh kosong' },
                                    minLength: {value: 25, errorMessage: "Pertanyaan harus antara 25 dan 255 karakter"},
                                    maxLength: {value: 255, errorMessage: "Pertanyaan harus antara 25 dan 255 karakter"}
                                }} 
                            />
                        </Col>
                        <Col xs="12" sm="12" md="12">
                            <h5 className="font-16 text-primary">Choice Answer</h5>
                            <FormCheckboxInInputValidation
                                labelInputGroup="A. "
                                formIdInput="idFormChoiceAnswerA"
                                formNameInput="formChoiceAnswerA"
                                formTypeInput="text"   
                                formPlaceholder= "Masukkan Pilihan Jawaban A"
                                formIdCheckbox="idFormCheckboxChoiceAnswerA"
                                formNameCheckbox="formCheckboxChoiceAnswerA"
                                labelClassName="inputLabel py-1 font-16 text-primary bg-white"
                            />
                            <FormCheckboxInInputValidation
                                labelInputGroup="B. "
                                formIdInput="idFormChoiceAnswerB"
                                formNameInput="formChoiceAnswerB"
                                formTypeInput="text"   
                                formPlaceholder= "Masukkan Pilihan Jawaban B"
                                formIdCheckbox="idFormCheckboxChoiceAnswerB"
                                formNameCheckbox="formCheckboxChoiceAnswerB"
                                labelClassName="inputLabel pr-3 py-1 font-16 text-primary bg-white"
                            />
                            <FormCheckboxInInputValidation
                                labelInputGroup="C. "
                                formIdInput="idFormChoiceAnswerC"
                                formNameInput="formChoiceAnswerC"
                                formTypeInput="text"   
                                formPlaceholder= "Masukkan Pilihan Jawaban C"
                                formIdCheckbox="idFormCheckboxChoiceAnswerC"
                                formNameCheckbox="formCheckboxChoiceAnswerC"
                                labelClassName="inputLabel pr-3 py-1 font-16 text-primary bg-white"
                            />
                            <FormCheckboxInInputValidation
                                labelInputGroup="D. "
                                formIdInput="idFormChoiceAnswerD"
                                formNameInput="formChoiceAnswerD"
                                formTypeInput="text"   
                                formPlaceholder= "Masukkan Pilihan Jawaban D"
                                formIdCheckbox="idFormCheckboxChoiceAnswerD"
                                formNameCheckbox="formCheckboxChoiceAnswerD"
                                labelClassName="inputLabel pr-3 py-1 font-16 text-primary bg-white"
                            />
                        </Col>
                        <Col xs="12" sm="12" md="12">
                            <Button size="lg" color="primary" type="submit" className="float-right mt-3 mb-2 px-5 text-uppercase font-12">Kirim</Button>
                        </Col>
                    </Row>
                </AvForm>
        </div>
    )
}