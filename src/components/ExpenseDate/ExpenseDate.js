import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className='expense-date'>{month}</div>
      <div className='expense-date__month'>{day}</div>
      <div className='expese-date__day'>{year}</div>
    </div>
  );
}

export default ExpenseDate;
