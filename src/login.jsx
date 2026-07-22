import { exp } from "firebase/firestore/pipelines";

function Login() {

return(
<section className='login_prueba'>
      <div>
        <h1>INICIO DE SESION</h1>       
      </div>
      <div>
        <h2>Usuario</h2>
        <input type="text" />
      </div>
      <div>
        <h2>Password</h2>
        <input type="text" />
      </div>
    </section>

);
}

export default Login