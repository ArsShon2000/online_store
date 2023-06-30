import axios from "axios"

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})


const authInterceptor = config => {                                             // АВТОМАТИЧЕСКИЙ ТОКЕН КАЖДОМУ ЗАПРОСУ 
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`    // ПОЛУЧАЕМ ТОКЕН ОТСЮДА ПО КЛЮЧЮ ТОКЕН
    return config                                                               // ПРИ АВТОРИЗАЦИИ МЫ БУДЕМ ЕГО В ЭТО ХРАНИЛИЩЕ ДОБАВЛЯТЬ
}   

$authHost.interceptors.request.use(authInterceptor)                             // ОН БДЕТ СРАБАТЫВАТЬ ПЕРЕД КАЖДЫМ ЗАПРОСОМ И БУДЕТ ВСТАВЛЯТЬ В headers.authorization

export {
    $host,
    $authHost
}