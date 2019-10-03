import { FormGroup, Label, Row, Col } from 'reactstrap'
import FormCheckboxInInputValidation from './validateCheckboxInInputForm'

export default (props) => {

    const { 
        containerClassName, containerStyle, withLabel, labelClassName, labelName,
        valueAnswerChoiceA, valueAnswerChoiceB, valueAnswerChoiceC, valueAnswerChoiceD,
        valueCheckboxChoiceA, valueCheckboxChoiceB, valueCheckboxChoiceC, valueCheckboxChoiceD,
        onHandleChange, onHandleCheckbox
    } = props

    console.log(valueAnswerChoiceD)

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
                        formNameInput="valueAnswerChoiceA"
                        formTypeInput="text"   
                        formPlaceholder= "Input Choice A"
                        formIdCheckbox="idCheckboxChoiceA"
                        formNameCheckbox="valueCheckboxChoiceA"
                        formValue={valueAnswerChoiceA}
                        formValueCheckbox={valueCheckboxChoiceA}
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
                        formNameInput="valueAnswerChoiceB"
                        formTypeInput="text"   
                        formPlaceholder= "Input Choice B"
                        formIdCheckbox="idCheckboxChoiceB"
                        formNameCheckbox="valueCheckboxChoiceB"
                        formValue={valueAnswerChoiceB}
                        formValueCheckbox={valueCheckboxChoiceB}
                        labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                        formValidate={{
                            required: { value: true, errorMessage: "Answer Choice B can't empty" }
                        }} 
                        onChangeInput={onHandleChange}
                        onChangeCheckbox={onHandleCheckbox}
                    />
                    <FormCheckboxInInputValidation
                        labelInputGroup="C. "
                        formIdInput="idAnswerChoiceC"
                        formNameInput="valueAnswerChoiceC"
                        formTypeInput="text"   
                        formPlaceholder= "Input Choice C"
                        formIdCheckbox="idCheckboxChoiceC"
                        formNameCheckbox="valueCheckboxChoiceC"
                        formValue={valueAnswerChoiceC}
                        formValueCheckbox={valueCheckboxChoiceC}
                        labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                        formValidate={{
                            required: { value: true, errorMessage: "Answer Choice C can't empty" }
                        }} 
                        onChangeInput={onHandleChange}
                        onChangeCheckbox={onHandleCheckbox}
                    />
                    <FormCheckboxInInputValidation
                        labelInputGroup="D. "
                        formIdInput="idAnswerChoiceD"
                        formNameInput="valueAnswerChoiceD"
                        formTypeInput="text"   
                        formPlaceholder= "Input Choice D"
                        formIdCheckbox="idCheckboxChoiceD"
                        formNameCheckbox="valueCheckboxChoiceD"
                        formValue={valueAnswerChoiceD}
                        formValueCheckbox={valueCheckboxChoiceD}
                        labelClassName="py-2 px-lg-4 font-16 text-primary bg-white"
                        formValidate={{
                            required: { value: true, errorMessage: "Answer Choice D can't empty" }
                        }} 
                        onChangeInput={onHandleChange}
                        onChangeCheckbox={onHandleCheckbox}
                    />
                </Col>
            </Row>
        </FormGroup>
    )
}