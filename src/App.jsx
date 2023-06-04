import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='display'>
        <h1> 0 </h1>
      </div>
      <div className='button'>
        <button className='btn reset'> AC </button>
        <button className='btn operator'> +/- </button>
        <button className='btn operator'> % </button>
        <button className='btn operator'> ÷ </button>

        <button className='btn number'> 7 </button>
        <button className='btn number'> 8 </button>
        <button className='btn number'> 9 </button>
        <button className='btn operator'> X </button>

        <button className='btn number'> 4 </button>
        <button className='btn number'> 5 </button>
        <button className='btn number'> 6 </button>
        <button className='btn operator'> - </button>

        <button className='btn number'> 1 </button>
        <button className='btn number'> 2 </button>
        <button className='btn number'> 3 </button>
        <button className='btn operator'> + </button>

        <button className='btn number'> 0 </button>
        <button className='btn number'> . </button>
        <button className='btn operator'> = </button>
      </div>
    </>
  )
}

export default App
