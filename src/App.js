import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Apresentation from './components/Apresentation';
import Modalities from './components/Modalities';
import Form from './components/Form';
import Panel from './components/Panel';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import NavBarExample from './layouts/navbar';
import Title from './components/Noticias/title';
import Highlight from './components/Noticias/highlight';


const Main = () => {
  return (
    <div>
      <Apresentation />
      <Modalities />
      <Form />
      <Panel />
      <Sponsors />
      <Footer />
    </div>
  );
};

const Noticias = () => {
  return (
    <div>
      <Title />
      <Highlight />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBarExample />}>
          <Route index element={<Main />} />
          <Route path='Noticias' element={<Noticias/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
