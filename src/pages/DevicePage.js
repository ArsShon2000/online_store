import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import SamsungImg from '../assets/mtossus918051_max_2.jpg';
import bigStar from '../assets/freeicon.png';

const DevicePage = () => {

    const device = { id: 1, name: "Samsung s23 Ultra", price: 130000, rating: 5, img: SamsungImg }
    const description = [
        {id: 1, title: 'Оперативная память', description: '8 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процессор', description: 'SnapDragon 880'},
        {id: 4, title: 'Количество ядер', description: '4'},
        {id: 5, title: 'Аккуилятор', description: '5600 mAch'},
    ]

    return (
        <Container className="mt-4">
            <Row >
                <Col md={4} className="d-flex flex-column align-items-center">
                    <Image width={200} height={300} src={device.img} />
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
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map(info => 
                    <Row key={info.id} style={{background: info.id % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;