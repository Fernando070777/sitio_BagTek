import { exp } from "firebase/firestore/pipelines";


function Login({onLogin}) {
 
return(
<section className='login_prueba'>
      <div ClassName ='prueba'>
        <div ClassName= 'prueba1' >
        <h1>INICIO DE SESIÒN</h1>       
      
      <div>
        <h2>Usuario</h2>
        <input className='input1' type="text" />
      </div>
      
        <h2>Password</h2>
        <input className='input1' type="password" />
         
        
      </div>
       <button className="boton" onClick={onLogin}>
         Iniciar Sesión 
       </button>
      </div>
    </section>

);
}

export default Login
