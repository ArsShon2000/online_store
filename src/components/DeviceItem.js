import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/freeicon.png';
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const history = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image width={100} height={150} src={device.img} />
                <div className='d-flex mt-1 justify-content-between align-items-center '>
                    <div>Samsung</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={20} height={20} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;