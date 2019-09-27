import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormSelectValidation from '../../form/validateSelectForm'
import ContentBox from '../../contentBox'
import FormMultipleChoice from '../../form/multipleChoiceForm'
import FormSingleChoice from '../../form/singleChoiceForm'

export default (props) => {

    const { 
        title, valueQuestionTitle, valueAnswerOption, valueZone, valueMarker, valueScore, 
        valueAnswerChoiceA, valueAnswerChoiceB, valueAnswerChoiceC, valueAnswerChoiceD,
        valueCheckboxChoiceA, valueCheckboxChoiceB, valueCheckboxChoiceC, valueCheckboxChoiceD,
        valueAnswerSingleChoiceA, valueAnswerSingleChoiceB, valueCheckboxSingleChoiceA, valueCheckboxSingleChoiceB,
        listAnswerOption, listZone, onHandleChange, onHandleSelectOption, onHandleSubmit, onHandleCheckbox
    } = props

    const listMarker = listZone.filter(data => data.id === valueZone)[0].provinsi
    
    return (
        <Row>
            <Col lg="12">
                <ContentBox 
                    title={title}
                    className="bg-white rounded shadow-sm p-3 mb-4 overflow-auto">
                    <AvForm onValidSubmit={onHandleSubmit} method="post" autoComplete="off" >
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Question Title - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idQuestionTitle" 
                            formType="text" 
                            formName="valueQuestionTitle"
                            formPlaceholder="Input Question Title" 
                            formValue={valueQuestionTitle}
                            onChange={onHandleChange} 
                            formValidate={{
                                required: { value: true, errorMessage: "Question title can't be empty"}
                            }} 
                        />
                        <FormSelectValidation 
                            withLabel={true}
                            labelName="Answer Option - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-2 px-2 bg-white mb-0"
                            formId="idAnswerOption" 
                            formName="valueAnswerOption" 
                            formPlaceholder="Input Answer Option"
                            formValue={valueAnswerOption}
                            formOptionData={listAnswerOption}
                            onChange={onHandleSelectOption}
                            formErrorMessage="Please select answer option" 
                        />
                        {
                            valueAnswerOption == 2 ?
                                (<FormMultipleChoice 
                                    withLabel={true}
                                    labelName="Multiple Choice - Validated"
                                    labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                    formClassName="py-2 px-2 bg-white mb-0"
                                    valueAnswerChoiceA={valueAnswerChoiceA}
                                    valueAnswerChoiceB={valueAnswerChoiceB}
                                    valueAnswerChoiceC={valueAnswerChoiceC}
                                    valueAnswerChoiceD={valueAnswerChoiceD}
                                    valueCheckboxChoiceA={valueCheckboxChoiceA}
                                    valueCheckboxChoiceB={valueCheckboxChoiceB}
                                    valueCheckboxChoiceC={valueCheckboxChoiceC}
                                    valueCheckboxChoiceD={valueCheckboxChoiceD}
                                    onHandleChange={onHandleChange}
                                    onHandleCheckbox={onHandleCheckbox}
                                />) : (null)
                        }
                        {
                            valueAnswerOption == 1 ?
                                (<FormSingleChoice 
                                    withLabel={true}
                                    labelName="Single Choice - Validated"
                                    labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                                    formClassName="py-2 px-2 bg-white mb-0"
                                    valueAnswerSingleChoiceA={valueAnswerSingleChoiceA}
                                    valueAnswerSingleChoiceB={valueAnswerSingleChoiceB}
                                    valueCheckboxSingleChoiceA={valueCheckboxSingleChoiceA}
                                    valueCheckboxSingleChoiceB={valueCheckboxSingleChoiceB}
                                    onHandleChange={onHandleChange}
                                    onHandleCheckbox={onHandleCheckbox}
                                />) : (null)
                        } {valueAnswerOption == 3 ? 
                            (
                                <div></div>
                            )
                        : (null)}
                        <FormSelectValidation 
                            withLabel={true}
                            labelName="Zone - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-2 px-2 bg-white mb-0"
                            formId="idZone" 
                            formName="valueZone" 
                            formPlaceholder="Input Zone"
                            formValue={valueZone}
                            formRelation="marker"
                            formOptionData={listZone}
                            onChange={onHandleSelectOption}
                            formErrorMessage="Please select zone" 
                        />
                        <FormSelectValidation 
                            withLabel={true}
                            labelName="Marker - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-2 px-2 bg-white mb-0"
                            formId="idMarker" 
                            formName="valueMarker" 
                            formPlaceholder="Input Marker"
                            formValue={valueMarker}
                            formOptionData={listMarker}
                            onChange={onHandleSelectOption}
                            formErrorMessage="Please select marker" 
                        />
                        <FormInputValidation 
                            withLabel={true}
                            labelName="Score - Validated"
                            labelClassName="inputLabel position-absolute font-12 text-primary bg-white"
                            formClassName="py-4 px-2 bg-white mb-0"
                            formId="idScore" 
                            formType="number" 
                            formName="valueScore" 
                            formPlaceholder="Input Score" 
                            onChange={onHandleChange} 
                            formValue={valueScore}
                            formValidate={{
                                required: { value: true, errorMessage: 'Alamat email tidak boleh kosong' }
                            }} 
                        />
                        <Button size="lg" color="primary" type="submit" className="float-right mt-3 mb-2 px-5 text-uppercase font-12">Kirim</Button>
                    </AvForm>
                </ContentBox>
            </Col>
        </Row>
    )
}