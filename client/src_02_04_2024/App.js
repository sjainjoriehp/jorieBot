import './App.css';
import JBot from './Components/JBot';
import { ContextProvider } from './Context/ContextProvider';
function App() {
  return (
  <>
   <h4>Jorie Bot</h4>
   <ContextProvider>
   <JBot/>
   </ContextProvider>
  </>
  );
}

export default App;
