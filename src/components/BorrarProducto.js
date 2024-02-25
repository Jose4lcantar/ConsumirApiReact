
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
