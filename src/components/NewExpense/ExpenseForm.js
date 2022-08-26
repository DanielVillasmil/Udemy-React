import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

// Setting Title
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
//Setting Amount
    const amountChangeHanlder = (event) => {
        setEnteredAmount(event.target.value);
    };
//Setting Date
    const dateChangeHanlder = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date (enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
        //set to empty string to clear the input in forms
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };



    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                    type='text' 
                    value={enteredTitle}
                    onChange={titleChangeHandler} 
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                    type='number' 
                    min='0.01' 
                    step='0.01' 
                    value={enteredAmount}
                    onChange={amountChangeHanlder} 
                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                    type='date' 
                    min='2019-01-01' 
                    max='2030-12-31' 
                    value={enteredDate}
                    onChange={dateChangeHanlder} 
                />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
)};

export default ExpenseForm;