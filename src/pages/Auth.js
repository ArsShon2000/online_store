import React from "react";
import { Button, Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from './../utils/consts';
import { NavLink, useLocation } from "react-router-dom";

const Auth = () => {
    const location = useLocation()                                          // ПОЛУЧАЮ ПУТЬ
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}                     // ВЫСОТА КОНТЕЙНЕРА - ВЫСОТА НАВБАРА
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-3"
                        placeholder="Введите емайл "
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите пароль"
                    />
                    <Col className="d-flex justify-content-between mt-3 pr-3 pl-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                        >
                            {isLogin ?
                                'Войти'
                                :
                                'Регистрация'
                            }
                        </Button>
                    </Col>

                </Form>
            </Card>
        </div>
    );
};

export default Auth;