import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import SamsungImg from '../assets/mtossus918051_max_2.jpg';
import bigStar from '../assets/freeicon.png';
import { useParams } from "react-router-dom";
import { fetchOneDevice } from './../http/deviceAPI';

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-4">
            <Row >
                <Col md={4} className="d-flex flex-column align-items-center">
                    <Image width={200} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={4}>
                    <Col className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Col>
                </Col>
                <Col md={4} className="d-flex flex-column align-items-center">
                    <Card 
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 200, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h4>От: {device.price} руб.</h4>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map(info => 
                    <Row key={info.id} style={{background: info.id % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;