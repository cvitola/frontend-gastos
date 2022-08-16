import { Routes, Route } from "react-router-dom"

//import MainPage from '../Main/Main'
import Home from "../../pages/Home/Home"
import Login from "../../components/Login/Login"
import AltaGasto from "../Gasto/AltaGasto/AltaGasto"
import Register from "../Register/Register"
import Report from "../Report/Report";

const Router = () => {
    return (

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/carga" element={<AltaGasto />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reporte" element={<Report />} />
                <Route path='*' element={<Home />} />
            </Routes>

    )
}

export default Router