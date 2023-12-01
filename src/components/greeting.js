import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingData = useSelector((state) => state.greetings.value);
  const { greeting } = greetingData;

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Random greeting will be generated on refresh</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
