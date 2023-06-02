import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron';
import Soundsection from './components/soundsection';
import Displaysection from './components/displaySection';
import WebgiViewer from './components/WebgiViewer';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <Soundsection/>
      <Displaysection/>
      <WebgiViewer/>
    </div>
  );
}

export default App;
