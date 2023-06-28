import React, { useContext } from 'react';
import { Context } from '..';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer (() => {
    const { user } = useContext(Context)
    console.log(user.isAuth)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}>ARISU</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button className="ms-2" variant={"outline-light"} onClick={() => user.setIsAuth(false)}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button className="ms-2" variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        <Button className="ms-2" variant={"outline-light"}>Авторизация</Button>
                        <Button className="ms-2" variant={"outline-light"}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;;