import Teclado from '../assets/Teclado.png'
import Bateria from '../assets/Bateria.png'
import Guitarra from '../assets/guitarra.png'
import ItemList from './ItemList';

const LandingPage = (props) => {

  return (
    <div>
      <header style={headerStyle}>
        <h1>{props.mensaje}</h1>
        <p>Descubre una amplia selección de instrumentos para tu música.</p>
      </header>

      <section style={cardsSectionStyle}>
        <h2>Explora Nuestra Colección</h2>
        <div style={cardsContainerStyle}>
        <div style={cardStyle}>
        <img src={Guitarra} alt="Guitarra Acústica" width="170" />
          <h3>Guitarra Acústica</h3>
          <p>Perfecta para tus sesiones acústicas.</p>
        </div>
        <div style={cardStyle}>
        <img src={Teclado} alt="Teclado Eléctrico" width="380" />
          <h3>Teclado Eléctrico</h3>
          <p>Crea melodías impresionantes.</p>
        </div>
        <div style={cardStyle}>
        <img src={Bateria} alt="Batería Profesional" width="350" />
          <h3>Batería Profesional</h3>
          <p>Siente el ritmo con nuestra batería de alta calidad.</p>
        </div>
        </div>
        </section>

      <section style={cardsSectionStyle}>
      <h2>Explora Nuestra Productos</h2>
      <ItemList productos={props.productos} />
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2024 LionBeat Music. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  margin: '10px',
  padding: '15px',
  textAlign: 'center',
};

const headerStyle = {
  backgroundColor: '#9c123d',
  color: '#fff',
  padding: '1em',
  textAlign: 'center',
};

const cardsSectionStyle = {
  padding: '2em',
  textAlign: 'center',
};

const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const footerStyle = {
  backgroundColor: '#9c123d',
  color: '#fff',
  textAlign: 'center',
  padding: '1em',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default LandingPage;
