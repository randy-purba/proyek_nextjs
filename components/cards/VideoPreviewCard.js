import { Card, CardImg, Row, Col } from 'reactstrap'

export default (props) => {
    const { srcVideo, widthVideo, heightVideo, idVideo } = props
    console.dir(srcVideo)
    return (
        <Card body>
            <video id={idVideo} width={widthVideo} height={heightVideo} controls>
                <source  src={srcVideo} type="video/mp4"/>
            </video>
        </Card>
    );
};
