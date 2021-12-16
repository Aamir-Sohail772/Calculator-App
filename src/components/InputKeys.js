import React from 'react'
import '../App.css';

function InputKeys({setInputValue}) {

    const onClick = (e, value) => {
        clickEffect(e)
        setInputValue(value);
    }
    const clickEffect=(e) => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let span = document.createElement('span');
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        span.style.backgroundColor = 'rgba(255, 255, 255,0.5)';
        e.target.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 1000);
    }
    return (
        <div className="input-container">
            <button onClick={(e) =>onClick(e,'All Clear') }>AC</button>
            <button onClick={(e) =>onClick(e, 'Clear') }>C</button>
            <button onClick={(e) =>onClick(e,"%" )}>%</button>
            <button onClick={(e) =>onClick(e, "/") }>/</button>
            <button onClick={(e) =>onClick(e, "7")}>7</button>
            <button onClick={(e) =>onClick(e, "8") }>8</button>
            <button onClick={(e) =>onClick(e, "9") }>9</button>
            <button onClick={(e) =>onClick(e, "*") }>X</button>
            <button onClick={(e) =>onClick(e, "4") }>4</button>
            <button onClick={(e) =>onClick(e, "5") }>5</button>
            <button onClick={(e) =>onClick(e, "6") }>6</button>
            <button onClick={(e) =>onClick(e, "-") }>-</button>
            <button onClick={(e) =>onClick(e, "1") }>1</button>
            <button onClick={(e) =>onClick(e, "2") }>2</button>
            <button onClick={(e) =>onClick(e, "3") }>3</button>
            <button onClick={(e) =>onClick(e, "+") }>+</button>
            <button onClick={(e) =>onClick(e, "00") }>00</button>
            <button onClick={(e) =>onClick(e, "0") }>0</button>
            <button onClick={(e) =>onClick(e, ".") }>.</button>
            <button onClick={(e) =>onClick(e, "=")}>=</button>
        </div>
    )
}

export default InputKeys
