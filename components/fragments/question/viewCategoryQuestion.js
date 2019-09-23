import { AvForm } from 'availity-reactstrap-validation'
import { Label, Row, Col, Button } from 'reactstrap'
import FormInputValidation from '../../form/validateInputForm'
import FormSelectValidation from '../../form/validateSelectForm'
import FormCheckboxInInputValidation from '../../form/validateCheckboxInInputForm'

export default (props) => {

    const { 
        title, category, questionType, createdDate, education 
    } = props
    
    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <Label className="font-16 text-primary mb-3">{title}</Label> : ""}
            <Row>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16 text-primary">Category</Label>
                </Col>
                <Col xs="2" sm="2" md="2">
                    <Label className="font-16 text-primary">:</Label>
                </Col>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16">{category}</Label>
                </Col>
            </Row>
            <Row>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16 text-primary">Question Type</Label>
                </Col>
                <Col xs="2" sm="2" md="2">
                    <Label className="font-16 text-primary">:</Label>
                </Col>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16">{questionType}</Label>
                </Col>
            </Row>
            <Row>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16 text-primary">Created Date</Label>
                </Col>
                <Col xs="2" sm="2" md="2">
                    <Label className="font-16 text-primary">:</Label>
                </Col>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16">{createdDate}</Label>
                </Col>
            </Row>
            <Row>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16 text-primary">Education</Label>
                </Col>
                <Col xs="2" sm="2" md="2">
                    <Label className="font-16 text-primary">:</Label>
                </Col>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16">{education}</Label>
                </Col>
            </Row>
        </div>
    )
}