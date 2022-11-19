
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';

function App() {
  return (
    <>
    <Navbar title="FunWithText"/>
    <div className="container">
    <TextArea heading="Enter The Text"/>
    </div>
    </>
  );
}

export default App;
