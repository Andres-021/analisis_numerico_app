import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './app/shared/index';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/:metodo" element={<Index/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
