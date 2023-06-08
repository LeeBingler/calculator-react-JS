import React, { useState } from 'react'

function ButtonInterface({ setNbrDisplay, setOperator}) {
  const [dotClick, setDotClick] = useState(false);
  const [powerForDecimalNbr, setPowerForDecimalNbr] = useState(1);

  function changeNbr(nbr) {
    nbr = Number(nbr);

    if (dotClick === false) {
      setNbrDisplay(actualNbr => {
        if (actualNbr === 0)
          return nbr;
        return actualNbr * 10 + nbr;
      });
    } else {
      setNbrDisplay(actualNbr => {
        setPowerForDecimalNbr(powerForDecimalNbr + 1)
        return actualNbr + nbr / (10 ** powerForDecimalNbr);
      });
    }
  }

  function percentageClick () {
    setNbrDisplay(actualNbr => actualNbr / 100);
  }

  function resetClick() {
    setNbrDisplay(0);
    setPowerForDecimalNbr(1);
    setDotClick(false);
    setOperator('');
  }

  function changeSign() {
    setNbrDisplay(actualNbr => actualNbr * -1);
  }

  function changeOperator (operator) {
    console.log(operator);
    setOperator(currentOperator => {
      if (currentOperator != '')
        return currentOperator;
      return operator;
    });
  }

  return (
    <div className='btn-interface'>
        <button onClick={() => resetClick()} className='btn'> AC </button>
        <button onClick={() => changeSign()} className='btn'> +/- </button>
        <button onClick={() => percentageClick()} className='btn'> % </button>
        <button onClick={event => changeOperator(event.target.innerHTML)} className='btn operator'> ÷ </button>

        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 7 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 8 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 9 </button>
        <button onClick={event => changeOperator(event.target.innerHTML)} className='btn operator'> x </button>

        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 4 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 5 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 6 </button>
        <button onClick={event => changeOperator(event.target.innerHTML)} className='btn operator'> - </button>

        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 1 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 2 </button>
        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number'> 3 </button>
        <button onClick={event => changeOperator(event.target.innerHTML)} className='btn operator'> + </button>

        <button onClick={event => changeNbr(event.target.innerHTML)} className='btn number zero'> 0 </button>
        <button onClick={() => setDotClick(true)} className='btn number'> . </button>
        <button className='btn operator'> = </button>
      </div>
  )
}

export default ButtonInterface;