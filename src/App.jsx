import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VistaConsulta from './views/VistaConsulta';
import VistaReporte from './views/VistaReporte';
import VistaExperiencias from './views/VistaExperiencias';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<VistaConsulta />} />
      <Route path="/reporte" element={<VistaReporte />} />
      <Route path="/experiencias" element={<VistaExperiencias />} />
    </Routes>
  </Router>
);

export default App;
