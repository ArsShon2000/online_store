import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { observer } from 'mobx-react-lite';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';

export const CreateDevice = observer(({ show, onHide }) => {

    const { device } = useContext(Context)
    const [name, setName] = useState([])
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect ( () => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data.brands))
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', device.selectedType.id)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }
debugger
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
                        <DropdownToggle>{device.selectedType.name || " Выберите тип"}</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <DropdownToggle>{device.selectedBrand.name || "Выберите брэнд"}</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                        className='mt-3'
                        placeholder='Введите название устройства'
                        type='text'
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.currentTarget.value))}
                        className='mt-3'
                        placeholder='Введите стоитмость устройства'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={e => selectFile(e)}
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
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder='Введите название свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});