import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_API } from "../config/rutas";

export function BorrarUsuario(){
    const params = useParams();
    const Navigate =useNavigate();
    useEffect(()=>{
        async function borrar(){
            const res= await axios.get("http://localhost:3000/api/borrarUsuario"+params.id);
            console.log(res);
            Navigate("/");
        }
        borrar();
    },[Navigate, params.id]);
    return(
        <h1>Borrar usuario</h1>
    );
}