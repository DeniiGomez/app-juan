/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StackNav } from './components/navigator/Stack'
import { CareerState } from './context/career/CareerState';

const App = () => {
  return (
    <CareerState>
      <StackNav/>
    </CareerState>
  )
}

export default App;
