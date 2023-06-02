import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron';
import Soundsection from './components/soundsection';
import Displaysection from './components/displaySection';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <Soundsection/>
      <Displaysection/>
    </div>
  );
}

export default App;
