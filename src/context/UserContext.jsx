import { useCallback, useState } from 'react';
import { UserContext } from './UserContextValue';

const API_URL = 'http://localhost:5000/api';

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [email, setEmail] = useState(() => localStorage.getItem('email'));

  const autenticar = async (ruta, credenciales) => {
    const respuesta = await fetch(`${API_URL}/auth/${ruta}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credenciales),
    });
    const datos = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(datos.message || 'No se pudo completar la autenticación.');
    }

    setToken(datos.token);
    setEmail(datos.email);
    localStorage.setItem('token', datos.token);
    localStorage.setItem('email', datos.email);
    return datos;
  };

  const login = (credenciales) => autenticar('login', credenciales);
  const register = (credenciales) => autenticar('register', credenciales);

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  const obtenerPerfil = useCallback(async () => {
    const respuesta = await fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const datos = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(datos.message || 'No se pudo obtener el perfil.');
    }

    setEmail(datos.email);
    localStorage.setItem('email', datos.email);
    return datos;
  }, [token]);

  return <UserContext.Provider value={{ token, email, login, register, logout, obtenerPerfil }}>{children}</UserContext.Provider>;
};
