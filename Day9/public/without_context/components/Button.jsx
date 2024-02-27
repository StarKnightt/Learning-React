import React from 'react';
import Component1 from './Component1';

const Button = () => {
  return (
    <div>
      <button>
        <span>
          <Component1 count={count} />
        </span>
        I'm a button
      </button>
    </div>
  );
};

export default Button;
