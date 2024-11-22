import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from '../src/screens/Form/Form';
import Detail from '../src/screens/Detail/Detail';
import Dashboard from '../src/screens/Dashboard/Dashboard';
import Intro from '../src/screens/Intro/Intro';

const examplePoem = {
  author: "Alexander Pope",
  lines: [
    "    ISAACUS NEWTONUS:",
    "    QUEM IMMORTALEM",
    "TESTANTUR TEMPUS, NATURA, COELUM:",
    "      MORTALEM",
    "    HOC MARMOR FATETUR.",
    "",
    "Nature and Nature's laws lay hid in night",
    "God said, Let Newton be! and all was light.",
  ],
  linecount: "7",
};

const poems = [

];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/detail" element={<Detail poem={examplePoem} onBack={() => {}} />} />
        <Route path="/dashboard" element={<Dashboard poems={poems} onViewPoem={() => {}} />} />
        <Route path="/intro" element={<Intro onNext={() => {}} />} />
      </Routes>
    </Router>
  );
}

export default App;