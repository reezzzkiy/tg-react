// import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
import Header1 from './components/header/Header';
function App() {
  const {onToggleButton} = useTelegram();

  // useEffect(() => {
  //     tg.ready();
  // }, [])

  return (
    
    <div className="App">
      <Header1/>
      <button onClick={onToggleButton}> toggleButton </button>
        
    </div>
  );
}

export default App;
