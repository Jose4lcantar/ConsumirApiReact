import { useState } from "react";

export function Nuevo (){
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [foto, setFoto] = useState(null);
    function guardarDatos(e){
        e.preventDefault();
        console.log("Hola");
        console.log(nombre);
    }
    return(
    <div className="container mt-5">
        <form onSubmit={guardarDatos}>
        <div className="card">
            <div className="card-header">
                <h1>Nuevo Usuario</h1>
            </div>
            <div className="card-body">
                <input className="form-control mb-3" type="text" placeholder="Nombre" name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)} autoFocus/>
                <input className="form-control mb-3" type="text" placeholder="Usuario" name="usuario" id="usuario" onChange={(e)=>setUsuario(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
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
