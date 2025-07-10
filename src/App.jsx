import Countdown from './Components/Countdown'
import './App.css'
import ScratchCardList from './Components/ScratchCardList';

function App() {

  return ( <>
  <div>
    <h1>🥳Niko's 23rd Birthday🥳</h1>
  </div>
  
    <div >
      <Countdown />
    </div>
    <div>
    <ScratchCardList />
    </div>
  </>
  );
}

export default App
