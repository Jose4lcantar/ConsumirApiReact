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
