import './App.css';
import JBot from './Components/JBot';
import { ContextProvider } from './Context/ContextProvider';
import backgroundImg from './resources/background.png'

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
