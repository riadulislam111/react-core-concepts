import Counter from './counter';
import Batsman from './Batsman';
import Users from './Users';
import './App.css'

function App() {
 
function handleClick() {
  alert('I am clicked.')
}

const handleClick3 = () =>{
  alert('clicked 3')
}

const handleAdd5 = (num) => {
  const newNum = num + 5;
  alert(newNum);
}
  return (
    <>
     <h3>Vite + React</h3>
     <Users></Users>
<Batsman></Batsman>
    <Counter></Counter>

     <button onClick={handleClick}>Click Me</button>
     <button onClick={function handleClick() {
      alert('clicked 2')
     }}>click me2</button>
     <button onClick={handleClick3}>clicked 3</button>
     <button onClick={() => alert('click 4')}>Click me 4</button>
      <button onClick={() => handleAdd5(10)}>click add 5</button>
    </>
   
  )
}

export default App
