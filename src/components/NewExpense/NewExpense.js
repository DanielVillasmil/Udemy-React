import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //defined in App.js
        props.onAddExpense
    };
    

    return (
     <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;