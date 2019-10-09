import { Card, CardImg, Row, Col } from 'reactstrap'

export default (props) => {
    const { srcImage, widthImage, heightImage, idImage } = props
    return (
        <Card body>
            <CardImg top id={idImage} width={widthImage} height={heightImage} src={srcImage}/>
        </Card>
    );
};
