import ExpenseItem from './components/ExpenseItem/ExpenseItem';


function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28) },
  ]

  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
