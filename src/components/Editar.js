import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditarUsuario(){
    const params=useParams();
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState ("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [foto, setFoto] = useState(null);
    const [rutaFoto, setRutaFoto] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [passwordViejo, setPasswordViejo] =useState("");
    const [saltViejo, setSaltViejo] = useState("");

    useEffect(()=>{
        async function buscarUsuarioPorId(){
            var res=await axios.get("http://localhost:3000/api/buscarUsuarioPorId/" + params.id);
            console.log(res);
            setId(res.data.id);
            setNombre(res.data.nombre);
            setUsuario(res.data.usuario);
            setPasswordViejo(res.data.password);
            setSaltViejo(res.data.salt);
            setRutaFoto("http://localhost:3000/images/"+res.data.foto);
        }
        buscarUsuarioPorId();
    }, []);

    async function editarDatos(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("id", id);
        formData.append("nombre", nombre);
        formData.append("usuario", usuario);
        formData.append("password", password);
        formData.append("passwordViejo", passwordViejo);
        formData.append("saltViejo", saltViejo);
        formData.append("foto", foto);
        const res= await axios.post("http://localhost:3000/api/editarUsuario", formData, {
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

        var datos={
            id,
            nombre,
            usuario,
        }
        console.log(datos);
    }
    return(
        <div className="container mt-5">
        <div className="text-danger"><h3>{mensaje}</h3></div>
        <form onSubmit={editarDatos}>
        <div className="card">
            <div className="card-header">
                <h1>Editar usuario</h1>
            </div>
            <div className="card-body">
                <input className="form-control mb-3" type="text" placeholder="Id" value={id} name="id" id="id" readOnly/>
                <input type="hidden" name="passwordViejo" id="passwordViejo" value={passwordViejo} readOnly/>
                <input type="hidden" name="saltViejo" id="saltViejo" value={saltViejo} readOnly/>
                <input className="form-control mb-3" type="text" placeholder="Nombre" value={nombre} name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)} autoFocus/>
                <input className="form-control mb-3" type="text" placeholder="Usuario" value={usuario} name="usuario" id="usuario" onChange={(e)=>setUsuario(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Password" value={password} name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                <div>
                    <img src= {rutaFoto} width="100" alt="Foto de usuario"/>
                </div>
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