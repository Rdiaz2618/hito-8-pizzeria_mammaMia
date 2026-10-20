import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/useUser';

const Registro = () => {
  const navigate = useNavigate();
  const { register } = useUser();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  const manejarEnvio = async (event) => {
    event.preventDefault();

    if (!correo.trim() || !contrasena.trim() || !confirmarContrasena.trim()) {
      setMensaje({ tipo: 'danger', texto: 'Todos los campos son obligatorios.' });
      return;
    }

    if (contrasena.length < 6) {
      setMensaje({ tipo: 'danger', texto: 'La contraseña debe tener al menos 6 caracteres.' });
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setMensaje({ tipo: 'danger', texto: 'Las contraseñas no coinciden.' });
      return;
    }

    try {
      await register({ email: correo, password: contrasena });
      navigate('/');
    } catch (error) {
      setMensaje({ tipo: 'danger', texto: error.message });
    }
  };

  return (
    <section className="tarjeta-formulario">
      <h2>Registro</h2>
      <form onSubmit={manejarEnvio} noValidate>
        <div className="mb-3">
          <label htmlFor="registro-correo" className="form-label">
            Correo electrónico
          </label>
          <input
            id="registro-correo"
            type="email"
            className="form-control"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registro-contrasena" className="form-label">
            Contraseña
          </label>
          <input
            id="registro-contrasena"
            type="password"
            className="form-control"
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registro-confirmar-contrasena" className="form-label">
            Confirmar contraseña
          </label>
          <input
            id="registro-confirmar-contrasena"
            type="password"
            className="form-control"
            value={confirmarContrasena}
            onChange={(event) => setConfirmarContrasena(event.target.value)}
            placeholder="Repite tu contraseña"
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Registrarse
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

export default Registro;
