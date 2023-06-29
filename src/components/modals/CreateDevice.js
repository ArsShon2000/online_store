import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, FormControl, Modal, Row } from 'react-bootstrap';
import { Context } from '../../';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export const CreateDevice = ({ show, onHide }) => {

    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Dropdown className='mt-2 mb-2'>
                        <DropdownToggle>Выберите тип</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem key={type.id}>{type.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <DropdownToggle>Выберите брэнд</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите название устройства'
                        type='text'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите стоитмость устройства'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                    />
                    <hr />
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {
                        info.map(i =>
                            <Row className='mt-2' key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Введите название свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Введите описание свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        variant={'outline-danger'}
                                        onClick={() => removeInfo(i.number)}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};