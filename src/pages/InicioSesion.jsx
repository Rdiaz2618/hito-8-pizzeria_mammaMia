import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/useUser';

const InicioSesion = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  const manejarEnvio = async (event) => {
    event.preventDefault();

    if (!correo.trim() || !contrasena.trim()) {
      setMensaje({ tipo: 'danger', texto: 'Todos los campos son obligatorios.' });
      return;
    }

    if (contrasena.length < 6) {
      setMensaje({ tipo: 'danger', texto: 'La contraseña debe tener al menos 6 caracteres.' });
      return;
    }

    try {
      await login({ email: correo, password: contrasena });
      navigate('/');
    } catch (error) {
      setMensaje({ tipo: 'danger', texto: error.message });
    }
  };

  return (
    <section className="tarjeta-formulario">
      <h2>Inicio de sesión</h2>
      <form onSubmit={manejarEnvio} noValidate>
        <div className="mb-3">
          <label htmlFor="inicio-correo" className="form-label">
            Correo electrónico
          </label>
          <input
            id="inicio-correo"
            type="email"
            className="form-control"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inicio-contrasena" className="form-label">
            Contraseña
          </label>
          <input
            id="inicio-contrasena"
            type="password"
            className="form-control"
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Iniciar sesión
        </button>

        {mensaje.texto && (
          <div className={`alert alert-${mensaje.tipo} mt-3 mb-0`} role="alert">
            {mensaje.texto}
          </div>
        )}
      </form>
    </section>
  );
};

export default InicioSesion;
