import axios from "axios"
import jwt_decode from "jwt-decode"
import dayjs from "dayjs"
import {useContext} from "react"
import AuthContext from "../context/AuthContext"

const baseURL = "http://127.0.0.1:8000/api"

const useAxios = ()=> {
const {authTokens, setUser, setAuthTokens}=useContext(AuthContext)

const axiosInstance=axios.create({
    baseURL,
    headers:{Authorization: 'Bearer'}
})
}