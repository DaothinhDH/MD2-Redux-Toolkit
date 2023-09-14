import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { act_decrease, act_increase } from '../redux/actions/actionType';
import { decrease, increase } from '../redux/useSlices/countSlice';


export default function Count() {
    const dispatch = useDispatch();
    const count = useSelector((c) => c.count.value)

    console.log(count);

    const handleIncrease = () => {
        dispatch(increase());
    };

    const handleDecrease = () => { 
        dispatch(decrease());
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
