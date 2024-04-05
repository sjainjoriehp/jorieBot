import './App.css';
import JBot from './Components/JBot';
import { ContextProvider } from './Context/ContextProvider';
import backgroundImg from './resources/background.png'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
function App() {

  return (
  <>
   <div >
   <ContextProvider>
   <JBot/>
   </ContextProvider>
   </div>
  </>
  );
}

export default App;
