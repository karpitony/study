import Button from './Button';
import Styled from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={Styled.title}>Welcome back!!!</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
