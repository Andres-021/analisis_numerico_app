import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './app/biseccion_&_puntoF/index';
import Introduction from './app/shared/Introduction';
import NavBarBtstp from './app/shared/components/NavBarBtstp';
import img from './img/58914-matematicas.jpg';
import img1 from './img/27569-matematicas.jpg';
import img2 from './img/56855-matematicas.jpg';
import img3 from './img/27581-matematicas.jpg';
import img4 from './img/matematicas-tumblr-gif-10.gif';

const App = () => {

  //document.body.style.background = `url(${img1})`;
  document.body.style.background = "#6AD6FF";

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          {/* <Route path="/" element={<Introduction/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </Router>
      <NavBarBtstp/>
    </>
  );
}

export default App;
