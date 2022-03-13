import NavBar from './component/NavBar';
import './style/app.css';
import Main from './component/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
