import { useEffect, useState } from 'react';
import { useUser } from '../context/useUser';

const Perfil = () => {
  const { email, obtenerPerfil, logout } = useUser();
  const [correoPerfil, setCorreoPerfil] = useState(email);

  useEffect(() => {
    obtenerPerfil().then((perfil) => setCorreoPerfil(perfil.email)).catch(() => undefined);
  }, [obtenerPerfil]);

  return (
    <main className="pagina-perfil">
      <section className="tarjeta-formulario">
        <h2>Perfil</h2>
        <p className="mb-4">Correo electrónico: {correoPerfil}</p>
        <button className="btn btn-dark w-100" onClick={logout}>Cerrar sesión</button>
      </section>
    </main>
  );
};

export default Perfil;
