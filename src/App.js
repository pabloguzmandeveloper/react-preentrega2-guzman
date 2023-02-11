// import { EstadosPorEfectos } from './components/ItemCount';
// import products from './components/products.json';
// import { ShowSection } from './components/show-products/ShowSection';

import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer.jsx';


const h2Style= {
  color: 'orange',
  background: 'green',
  textAlign: 'center',
  fontSize: '18px'
};
// los estilos en linea de los componentes se pasan únicamente en formato de objetos y con nombre de atributos en camelcase.
function App() {
  return (
    <>      
      <NavBar/>
      <ItemListContainer style={h2Style} greeting={"Hola!!! buenos días!! Bienvenido a nuestro E-Comosano!!"}/>
    </>
  );
}
export default App;