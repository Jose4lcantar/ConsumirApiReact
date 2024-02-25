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
    );
}