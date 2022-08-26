import {useState} from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenesesContent = <p>No expenses found</p>;

  if(filteredExpenses.length > 0) {
    expenesesContent = filteredExpenses.map((expense)  => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} 
    />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
        {expenesesContent}
      </Card>
    </div>
  );
}

export default Expenses;
