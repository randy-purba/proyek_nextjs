import { Label, Row, Col } from 'reactstrap'
import ImagePreview from './ImagePreviewCard'

export default (props) => {

    const { title, styleRow, srcImage, idImage, widthImage, heightImage} = props
    
    return (
        <Row>
            <Col xs="5" sm="5" md="5">
                <Label className={styleRow ? styleRow : "font-16"} >{title}</Label>
            </Col>
            <Col xs="2" sm="2" md="1">
                <Label className="font-16">:</Label>
            </Col>
            <Col xs="5" sm="5" md="6">
                <ImagePreview srcImage={srcImage} idImage={idImage} widthImage={widthImage} heightImage={heightImage}/>
            </Col>
        </Row>
    )
}
