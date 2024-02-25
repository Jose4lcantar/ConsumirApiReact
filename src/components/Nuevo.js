import axios from "axios";
import { useState } from "react";

export function Nuevo (){
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [foto, setFoto] = useState(null);
    const [mensaje, setMensaje] = useState("");
    async function guardarDatos(e){
        e.preventDefault();
        const formData = new FormData();
        console.log(nombre);
        formData.append("nombre", nombre);
        formData.append("usuario", usuario);
        formData.append("password", password);
        formData.append("foto", foto);
        const res= await axios.post("http://localhost:3000/api/nuevousuario", formData, {
            headers:{
                "Content-Type": "multipar/form-data"
            }
        });
        console.log(res);
        setNombre("");
        setUsuario("");
        setPassword("");
        setFoto(null);
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
                <h1>Nuevo Usuario</h1>
            </div>
            <div className="card-body">
                <input className="form-control mb-3" type="text" placeholder="Nombre" value={nombre} name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)} autoFocus/>
                <input className="form-control mb-3" type="text" placeholder="Usuario" value={usuario} name="usuario" id="usuario" onChange={(e)=>setUsuario(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Password" value={password} name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                <input className="form-control mb-3" type="file" placeholder="Foto" name="foto" id="foto" onChange={(e)=>setFoto(e.target.files[0])}/>
            </div>
            <div className="card-footer">
                <button className="form-control btn btn-primary" type="submit">Guardar usuario</button>
            </div>
        </div>
        </form>
    </div>
    );
}
