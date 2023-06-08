import { useState } from 'react'
import Display from './component/Display';
import ButtonInterface from './component/ButtonInterface';

function App() {
  const [nbrDisplay, setNbrDisplay] = useState(0);
  const [operator, setOperator] = useState('');
  const [nbrMemory, setNbrMemory] = useState(0);

  return (
    <>
      <Display nbrDisplay={nbrDisplay} />
      <ButtonInterface 
      setNbrDisplay={setNbrDisplay} 
      setOperator={setOperator} 
      operator={operator}
      setNbrMemory={setNbrMemory}
      nbrMemory={nbrMemory}
      />
    </>
  )
}

export default App
