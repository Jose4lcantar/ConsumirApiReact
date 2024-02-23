import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditarProducto(){
    const params=useParams();
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState ("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [fotoProd, setFotoProd] = useState(null);
    const [rutaFotoProd, setRutaFotoProd] = useState("");
    const [mensaje, setMensaje] = useState("");

    useEffect(()=>{
        async function buscarProductoPorId(){
            var res=await axios.get("http://localhost:3000/api/buscarProductoPorId/" + params.id);
            console.log(res);
            setId(res.data.id);
            setNombre(res.data.nombre);
            setDescripcion(res.data.descripcion);
            setPrecio(res.data.precio);
            setRutaFotoProd("http://localhost:3000/imagesProd/"+res.data.fotoProd);
        }
        buscarProductoPorId();
        
    }, []);

    async function editarDatosProductos(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("id", id);
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("precio", precio);
        formData.append("fotoProd", fotoProd);
        const res= await axios.post("http://localhost:3000/api/editarProducto", formData, {
            headers:{
                "Content-Type": "multipar/form-data"
            }
        });
        console.log(res);
        setNombre("");
        setDescripcion("");
        setPrecio("");
        setFotoProd(null);
        setMensaje(res.data);
        setTimeout(()=>{
            setMensaje("");
        }, 3000);

        var datos={
            id,
            nombre,
            descripcion,
            precio, 
        }
        console.log(datos);

    }

    return(
        <div className="container mt-5">
        <div className="text-danger"><h3>{mensaje}</h3></div>
        <form onSubmit={editarDatosProductos}>
        <div className="card">
            <div className="card-header">
                <h1>Editar producto</h1>
            </div>
            <div className="card-body">
                <input className="form-control mb-3" type="text" placeholder="Id" value={id} name="id" id="id" readOnly/>
                <input className="form-control mb-3" type="text" placeholder="Nombre" value={nombre} name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)} autoFocus/>
                <input className="form-control mb-3" type="text" placeholder="Descripcion" value={descripcion} name="descripcion" id="descripcion" onChange={(e)=>setDescripcion(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Precio" value={precio} name="precio" id="precio" onChange={(e)=>setPrecio(e.target.value)} />
                <div>
                    <img src= {rutaFotoProd} width="100" alt="Foto de producto"/>
                </div>
                <input className="form-control mb-3" type="file" placeholder="FotoProd" name="fotoProd" id="fotoProd" onChange={(e)=>setFotoProd(e.target.files[0])}/>
            </div>
            <div className="card-footer">
                <button className="form-control btn btn-primary" type="submit">Guardar producto</button>
            </div>
        </div>
        </form>
    </div>
    );
}