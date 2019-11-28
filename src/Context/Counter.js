import React, { useState,useContext } from 'react';
import {CountContext2} from '../Example5'
function Counter(){
    const count = useContext(CountContext2)  //一句话就可以得到count
    return (<h2>{count}</h2>)
}

export default Counter;