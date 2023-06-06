import React from 'react'

function ButtonInterface({ setNbrDisplay, setOperator}) {

  function changeNbr(nbr) {
    nbr = Number(nbr);
    console.log(nbr);
    setNbrDisplay(actualNbr => {
      if (actualNbr === 0)
        return nbr;
      return actualNbr * 10 + nbr;
    });  
  }

  return (
    <div className='btn-interface'>
        <button className='btn'> AC </button>
        <button className='btn'> +/- </button>
        <button className='btn'> % </button>
        <button className='btn operator'> ÷ </button>

        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 7 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 8 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 9 </button>
        <button className='btn operator'> x </button>

        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 4 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 5 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 6 </button>
        <button className='btn operator'> - </button>

        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 1 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 2 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 3 </button>
        <button className='btn operator'> + </button>

        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number zero'> 0 </button>
        <button className='btn number'> . </button>
        <button className='btn operator'> = </button>
      </div>
  )
}

export default ButtonInterface