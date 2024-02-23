<<<<<<< HEAD
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_API } from "../config/rutas";

export function BorrarProducto() {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function borrar() {
            try {
                const res = await axios.delete(`${URL_API}/borrarProducto/${params.id}`);
                console.log(res);
                navigate("/");
            } catch (error) {
                console.error('Error al borrar el producto:', error);
            }
        }
        borrar();
    }, [navigate, params.id]);

    return (
        <h1>Borrar usuario</h1>
    );
}
=======
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function BorrarProducto(){
    const params = useParams();
    const navigate =useNavigate();
    useEffect(()=>{
        async function borrar(){
            const res= await axios.get(`http://localhost:3000/api/borrarProducto/${params.id}`);
            console.log(res);
            navigate("/");
            window.location.href = "http://localhost:3001/productos";
        }
        borrar();
    },[navigate, params.id]);
    return(
        <h1>producto borrado</h1>
    );
}
>>>>>>> 3a8126f0a72466715450b700876f716524822577
