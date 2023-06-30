import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './../utils/consts';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from './../index';

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()                                          // ПОЛУЧАЮ ПУТЬ
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                console.log(data);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

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
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        type="password"
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
                            onClick={click}
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
});

export default Auth;