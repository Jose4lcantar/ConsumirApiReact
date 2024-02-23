import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Productos(){
    const [dataProductos, setDataProductos] = useState ([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/mostrarProducto")
        .then((respuesta)=>{
            console.log(respuesta.data);
            setDataProductos(respuesta.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar del api"+err);
        });
    },[]);

    const ListaProductos=dataProductos.map((producto)=>{
        var editar="/EditarProducto/"+producto.id;
        var borrar="/BorrarProducto/"+producto.id;
        var fotoProd="http://localhost:3000/imagesProd/"+producto.fotoProd;
        return(
            <tr className="aling-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td><img src={fotoProd} width="100px" alt=""/></td>
                <td>
                    <Link to={editar}>Editar</Link> / 
                    <Link to={borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });
        
    return(
        <table className="table table-hover">
            <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>descripcion</th>
                        <th>precio</th>
                        <th>Foto</th>
                        <th>Editar / Borrar</th>
                    </tr>
                </thead>
            <tbody>
                {ListaProductos}
            </tbody>
        </table>
    );
}