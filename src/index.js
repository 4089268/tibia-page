import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container} from './components/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <>
    <Container title='titulo 1' text='Contenedor 1' />
    <Container text='Contenedor 2'>
      <>
       <input type="button" value="si" />
       <input type="button" value="no"/>
      </>
    </Container>
  </>
)