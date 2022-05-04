import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  const message = useSelector((state) => state.greetingReducer);

  return (
    <div>
      <div>
        {message.greeting}
        {' '}
        in
        {message.language}
      </div>
    </div>
  );
};

export default Greeting;
