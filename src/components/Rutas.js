import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Productos } from "./Productos";
import { Nuevo } from "./Nuevo";
import { EditarUsuario } from "./Editar";
import { NuevoProducto } from "./NuevoProducto";
import { EditarProducto } from "./EditarProducto";
import { BorrarUsuario } from "./Borrar";
import { BorrarProducto } from "./BorrarProducto";

export function Rutas(){
    return(
        <>
        <Menu/>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/productos" element={<Productos/>}></Route>
                <Route path="/Nuevo" element={<Nuevo/>}></Route>
                <Route path="/EditarUsuario/:id" element={<EditarUsuario/>}></Route>
                <Route path="/NuevoProducto" element={<NuevoProducto/>}></Route>
                <Route path="/EditarProducto/:id" element={<EditarProducto/>}></Route>
                <Route path="/BorrarUsuario/:id" element={<BorrarUsuario/>}></Route>
                <Route path="/BorrarProducto/:id" element={<BorrarProducto/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}