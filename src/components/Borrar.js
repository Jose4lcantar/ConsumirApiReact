<<<<<<< HEAD
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
=======
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function BorrarUsuario(){
    const params = useParams();
    const navigate =useNavigate();
    useEffect(()=>{
        async function borrar(){
            const res= await axios.get(`http://localhost:3000/api/borrarUsuario/${params.id}`);
            console.log(res);
            navigate("/");
            window.location.href = "http://localhost:3001";
        }
        borrar();
    },[navigate, params.id]);
    return(
        <h1>usuario borrado</h1>
>>>>>>> 3a8126f0a72466715450b700876f716524822577
    );
}