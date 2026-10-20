import { useState } from 'react';
import { useCart } from '../context/useCart';
import { useUser } from '../context/useUser';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {
  const { carrito, total, cambiarCantidad } = useCart();
  const { token } = useUser();
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const pagar = async () => {
    setEnviando(true);
    setMensaje('');

    try {
      const respuesta = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart: carrito }),
      });

      if (!respuesta.ok) {
        throw new Error('No se pudo completar la compra.');
      }

      setMensaje('Compra realizada con éxito.');
    } catch (error) {
      setMensaje(error.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="carrito-pagina">
      <section className="carrito-contenedor">
        <h2>Carrito de compras</h2>

        <div className="carrito-lista">
          {carrito.map((pizza) => (
            <article className="carrito-item" key={pizza.id}>
              <div className="carrito-info">
                <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
                <h3>{pizza.name}</h3>
              </div>

              <div className="carrito-acciones">
                <strong>{formatPrice(pizza.price)}</strong>
                <button className="btn btn-outline-danger btn-sm" onClick={() => cambiarCantidad(pizza.id, -1)}>
                  -
                </button>
                <span>{pizza.count}</span>
                <button className="btn btn-outline-primary btn-sm" onClick={() => cambiarCantidad(pizza.id, 1)}>
                  +
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="carrito-total">
          <h3>Total: {formatPrice(total)}</h3>
          <button className="btn btn-dark" disabled={!token || enviando} onClick={pagar}>
            {enviando ? 'Procesando...' : 'Pagar'}
          </button>
        </div>
        {mensaje && <div className="alert alert-info mt-3 mb-0">{mensaje}</div>}
      </section>
    </main>
  );
};

export default Cart;
