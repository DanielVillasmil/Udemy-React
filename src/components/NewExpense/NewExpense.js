import React, {useState} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //defined in App.js
        props.onAddExpense(expenseData);
    };
    
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return (
     <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
    );
};

export default NewExpense;