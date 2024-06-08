import './styles/index.css';
import './styles/App.css';
import './styles/Modern-normalize.css';
import Landing from './page/landing/Landing';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Toaster />
    </div>
  );
}

export default App;
