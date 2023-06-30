// ####################################################################################
// ####################################################################################
// ######                                                                        ######
// ###### ДОБАВЛЕНИЕ ДЕВАЙСОВ ######
// ######                                                                        ######
// ####################################################################################
// ####################################################################################
import jwt_Decode from "jwt-decode";
import { $authHost, $host } from ".";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)        // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')                              // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    return data
}


export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)        // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')                              // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    return data
}


export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)        // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')                              // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    return data
}


export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)                              // ОТВЕТ КОТОРЫЙ ПРИШЕЛ С СЕРВЕРА
    return data
}