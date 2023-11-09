import './Main.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Card heading={'Специальные предложения'} />
      <Card heading={'Вы недавно смотрели'} />
    </div>
  );
}

export default App;
