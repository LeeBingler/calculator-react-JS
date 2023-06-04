import { useState } from 'react'

function App() {
  const [nbrDisplay, setNbrDisplay] = useState(0);
  const [operator, setOperator] = useState('');

  return (
    <>
      <div className='display'>
        <h1> {nbrDisplay} </h1>
      </div>

      <div className='btn-interface'>
        <button className='btn reset'> AC </button>
        <button className='btn sign'> +/- </button>
        <button className='btn percent'> % </button>
        <button className='btn operator'> ÷ </button>

        <button className='btn number'> 7 </button>
        <button className='btn number'> 8 </button>
        <button className='btn number'> 9 </button>
        <button className='btn operator'> x </button>

        <button className='btn number'> 4 </button>
        <button className='btn number'> 5 </button>
        <button className='btn number'> 6 </button>
        <button className='btn operator'> - </button>

        <button className='btn number'> 1 </button>
        <button className='btn number'> 2 </button>
        <button className='btn number'> 3 </button>
        <button className='btn operator'> + </button>

        <button className='btn number zero'> 0 </button>
        <button className='btn number'> . </button>
        <button className='btn operator'> = </button>
      </div>
    </>
  )
}

export default App
