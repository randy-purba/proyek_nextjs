import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

export default (props) => {
    const { question, answer, number } = props
    return (
        <div>
            <Row>
                <Col sm="12" className="py-2">
                    <Card body>
                        <CardTitle>{number + 1}. Question : {question}</CardTitle>
                        <CardText>Answer : {answer}</CardText>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
