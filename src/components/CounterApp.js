import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleReset = () => {
        setCounter(value);
    }
    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSubtract}>-1</button>

        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;