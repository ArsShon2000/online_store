// ####################################################################################
// ####################################################################################
// ######                                                                        ######
// ###### АВТОРИЗАЦИЯ РЕГИСТРАЦИЯ ПРОВЕРКА ТОКЕНА НА ВАЛИДНОСТЬ (Ф-Я ЧЕК В БЭКЕ) ######
// ######                                                                        ######
// ####################################################################################
// ####################################################################################
import jwt_Decode from "jwt-decode";
import { $authHost, $host } from ".";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})        // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    localStorage.setItem('token', data.token)
    return jwt_Decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})                              // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    localStorage.setItem('token', data.token)
    return jwt_Decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')                                          // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    localStorage.setItem('token', data.token)
    return jwt_Decode(data.token)
}