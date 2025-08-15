import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VistaConsulta from './views/VistaConsulta';
import ExperienceView from './views/ExperienceView';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<VistaConsulta />} />
      <Route path="/experience" element={<ExperienceView />} />
    </Routes>
  </Router>
);

export default App;
