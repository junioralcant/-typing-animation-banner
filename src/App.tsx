import { Banner } from './components/Banner';

import './App.css';

function App() {
  const names = [
    'da Júlia.',
    'da Brenda.',
    'do Antonio.',
    'do Junior.',
    'do Brasil.',
  ];

  return (
    <div className="container">
      <Banner names={names} />
    </div>
  );
}

export default App;
