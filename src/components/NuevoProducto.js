import axios from "axios";
import { useState } from "react";

export function NuevoProducto (){
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [fotoProd, setFotoProd] = useState(null);
    const [mensaje, setMensaje] = useState("");
    async function guardarDatos(e){
        e.preventDefault();
        const formData = new FormData();
        console.log(nombre);
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("precio", precio);
        formData.append("fotoProd", fotoProd);
        const res= await axios.post("http://localhost:3000/api/nuevoproducto", formData, {
            headers:{
                "Content-Type": "multipar/form-data"
            }
        });
        console.log(res);
        setNombre("");
        setDescripcion("");
        setFotoProd(null);
        setMensaje(res.data);
        setTimeout(()=>{
            setMensaje("");
        }, 3000);
  }
    return(
    <div className="container mt-5">
        <div className="text-danger"><h3>{mensaje}</h3></div>
        <form onSubmit={guardarDatos}>
        <div className="card">
            <div className="card-header">
                <h1>Nuevo Producto</h1>
            </div>
            <div className="card-body">
                <input className="form-control mb-3" type="text" placeholder="Nombre" value={nombre} name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)} autoFocus/>
                <input className="form-control mb-3" type="text" placeholder="Descripcion" value={descripcion} name="descripcion" id="descripcion" onChange={(e)=>setDescripcion(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Precio" value={precio} name="precio" id="precio" onChange={(e)=>setPrecio(e.target.value)} />
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
