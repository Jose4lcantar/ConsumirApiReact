import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Productos } from "./Productos";
import { Nuevo } from "./Nuevo";

export function Rutas(){
    return(
        <>
        <Menu/>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/Productos" element={<Productos/>}></Route>
                <Route path="/Nuevo" element={<Nuevo/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}