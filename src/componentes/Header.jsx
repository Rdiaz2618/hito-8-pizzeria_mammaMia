import heroImg from '../assets/hero.jpg';

const Header = () => {
  return (
    <header
      className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white overflow-hidden"
      style={{ height: '320px' }}
    > 
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.58)', zIndex: 1 }}
      />

      <div className="position-relative" style={{ zIndex: 2 }}>
        <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
        <p className="mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>

  );
};

export default Header;
