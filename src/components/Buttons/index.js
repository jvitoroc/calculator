import React from 'react';
import Button from '../Button';
import style from './style.css';
import {allOperators} from '../../utils/calculator';

const generateNumbers = onClick => {
  var output = [];
  for (let i = 0; i <= 9; i++) {
    output[i] = (
      <Button
        value={i}
        key={i}
        onClick={() => {
          onClick (i);
        }}
      />
    );
  }
  return output;
};

const generateOperators = onClick => {
  var output = [];
  allOperators.forEach ((op, i) => {
    output[i] = (
      <Button
        value={op}
        key={op}
        color="white"
        background="darkred"
        onClick={() => {
          onClick (op);
        }}
      />
    );
  });
  return output;
};

function Buttons (props) {
  var numbers = generateNumbers (props.onInputClick);
  var operators = generateOperators (props.onInputClick);

  return (
    <div className={style.Buttons}>
      <div className={style.horizontalButtons}>
        <Button value="C"
                onClick={()=>props.clearHandler()}/>
        <Button />
        <Button />
        <Button />
        <Button value="<"
                onClick={()=>props.backspaceHandler()}/>
      </div>
      <div className={style.leftButtons + ' clearfix'}>
        {numbers[7]}{numbers[8]}{numbers[9]}
        {numbers[4]}{numbers[5]}{numbers[6]}
        {numbers[1]}{numbers[2]}{numbers[3]}
        <Button />
        <Button value="."
                onClick={()=>{props.onInputClick(".")}}/>
        <Button
          background="darkcyan"
          color="white"
          value="="
          onClick={props.evaluateHandler}
        />
      </div>
      <div className={style.rightButtons + ' clearfix'}>
        {operators}
        <Button
          color="white"
          background="darkred"
        />
      </div>
    </div>
  );
}

export default Buttons;
