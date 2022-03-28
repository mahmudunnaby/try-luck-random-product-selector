import './App.css';
import Header from './components/header/Header';
import Question1 from './components/Questions/Question1';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Question1></Question1>
    </div>
  );
}

export default App;
