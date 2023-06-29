import { makeAutoObservable } from "mobx";
import SamsungImg from '../assets/mtossus918051_max_2.jpg';

export default class DeviceStore {
    constructor () {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Asus'},
            {id: 4, name: 'Acer'}
        ]
        this._devices = [
            {id: 1, name: "Samsung s23 Ultra", price: 130000, rating: 5, img: SamsungImg},
            {id: 2, name: "Samsung s23 Ultra", price: 130000, rating: 5, img: SamsungImg},
            {id: 3, name: "Samsung s23 Ultra", price: 130000, rating: 5, img: SamsungImg},
            {id: 4, name: "Samsung s23 Ultra", price: 130000, rating: 5, img: SamsungImg}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType (type) {
        this._selectedType = type
    }

    setSelectedBrand (brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType () {
        return this._selectedType
    }

    get selectedBrand () {
        return this._selectedBrand
    }
}