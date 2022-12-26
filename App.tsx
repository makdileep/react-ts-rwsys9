import * as React from 'react';
import { MemoizedApple } from './Apple';
import { MemoizedBanana } from './Banana';
import { MemoizedCar } from './Car';

import './style.css';

export default function App() {
  return (
    <div>
      <MemoizedApple prodName="Apple2" />
      <MemoizedBanana prodName="Banana" />
      <MemoizedCar prodName="Car" />
    </div>
  );
}
