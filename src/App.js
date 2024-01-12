import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
function App() {
  const {tg, onToggleButton} = useTelegram()
  useEffect(()=>{
    tg.ready()
  },[])


  

  return (
    <div className="App">
        <button onClick={onToggleButton}> toggleButton </button>
        
    </div>
  );
}

export default App;
