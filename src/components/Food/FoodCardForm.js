import React,{useState,useRef,useContext} from 'react'
import classes from './FoodCardForm.module.css'
import Input from '../UI/Input'

const FoodCard = (props) => {
  const [amountValid,setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length===0 || enterdAmountNumber < 1){
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enterdAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" 
            ref={amountInputRef}
            input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        {!amountValid && <p>Enter a valid amount</p>}
    </form>
  )
}

export default FoodCard