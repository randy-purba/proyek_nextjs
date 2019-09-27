import { FormGroup, Label, Row, Col } from 'reactstrap'
import FormCheckboxInInputValidation from './validateCheckboxInInputForm'

export default (props) => {

    const { 
        containerClassName, containerStyle, withLabel, labelClassName, labelName,
        valueAnswerSingleChoiceA, valueAnswerSingleChoiceB, valueCheckboxSingleChoiceA, valueCheckboxSingleChoiceB,
        onHandleChange, onHandleCheckbox
    } = props

    return (
        <FormGroup 
            className={`mb-3 position-relative ${containerClassName ? containerClassName : ''}`}
            {...containerStyle}
        >
            {
                withLabel ?
                <Label for="multiple_choicess" className={labelClassName}>{labelName}</Label> : ""
            }
            <Row className="mt-3">
                <Col xs="12" sm="12" md="12">
                    <Label className="font-16 text-primary px-3">Choice Answer</Label>
                    <Label className="font-16 text-primary float-right mr-lg-2 mr-xl-5">Key</Label>
                    <FormCheckboxInInputValidation
                        labelInputGroup="A. "
                        formIdInput="idAnswerChoiceA"
                        formNameInput="valueAnswerSingleChoiceA"
                        formTypeInput="text"   
                        formPlaceholder= "Input Choice A"
                        formIdCheckbox="idCheckboxChoiceA"
                        formNameCheckbox="valueCheckboxSingleChoiceA"
                        formValue={valueAnswerSingleChoiceA}
                        formValueCheckbox={valueCheckboxSingleChoiceA}
                        labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                        formValidate={{
                            required: { value: true, errorMessage: "Answer Choice A can't empty" }
                        }} 
                        onChangeInput={onHandleChange}
                        onChangeCheckbox={onHandleCheckbox}
                    />
                    <FormCheckboxInInputValidation
                        labelInputGroup="B. "
                        formIdInput="idAnswerChoiceB"
                        formNameInput="valueAnswerSingleChoiceB"
                        formTypeInput="text"   
                        formPlaceholder= "Input Choice B"
                        formIdCheckbox="idCheckboxChoiceB"
                        formNameCheckbox="valueCheckboxSingleChoiceB"
                        formValue={valueAnswerSingleChoiceB}
                        formValueCheckbox={valueCheckboxSingleChoiceB}
                        labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                        formValidate={{
                            required: { value: true, errorMessage: "Answer Choice B can't empty" }
                        }} 
                        onChangeInput={onHandleChange}
                        onChangeCheckbox={onHandleCheckbox}
                    />
                </Col>
            </Row>
        </FormGroup>
    )
}