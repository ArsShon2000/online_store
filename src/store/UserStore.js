import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)                // ПРИ КАКОМ ТО ИЗМЕНЕНИЙ КОМПОНЕНТЫ БУДУТ ИЗМЕНЯТЬСЯ
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}