import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <center>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br><br>
            </br>

            <br>
            </br>
      <div className="login-box">
  <div className="login-logo">
    <Link to ={"#"}><b>Inicia</b>sesion</Link>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Ingrese sus datos</p>
      <form action="../../index3.html" method="post"> 
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Correo" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Contraseña" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Recordar Contraseña
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Enviar</button>
          </div>
          {/* /.col */}
        </div>
    </form>
      <div className="social-auth-links text-center mb-3">
      < Link to ={"#"} className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </Link>
        <p>- O -</p>
        <Link to={"#"}className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </Link>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <Link to ={"#"}>
            Recordar contraseña
        </Link>
      </p>
      <p className="mb-0">
        <Link to={"#"} className="text-center">Registar</Link>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
</center>


    )
}
export default Login;