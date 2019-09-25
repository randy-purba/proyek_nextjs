import { Label, Row, Col, Button } from 'reactstrap'

export default (props) => {
    const { title, value , onClickButton, title_button} = props
    return (
        <Row>
            <Col xs="5" sm="5" md="5">
                <Label className="font-16">{title}</Label>
            </Col>
            <Col xs="2" sm="2" md="1">
                <Label className="font-16">:</Label>
            </Col>
            <Col xs="5" sm="5" md="6">
                <Button color="link" size="sm" onClick={(e) => onClickButton(value)}>{title_button}</Button>
            </Col>
        </Row>
    )
}
