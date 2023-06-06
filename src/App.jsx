import { useState } from 'react'
import Display from './component/Display';
import ButtonInterface from './component/ButtonInterface';

function App() {
  const [nbrDisplay, setNbrDisplay] = useState(0);
  const [operator, setOperator] = useState('');

  return (
    <>
      <Display nbrDisplay={nbrDisplay} />
      <ButtonInterface setNbrDisplay={setNbrDisplay} setOperator={setOperator} />
    </>
  )
}

export default App
