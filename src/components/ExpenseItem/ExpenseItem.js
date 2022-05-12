import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2022, 2, 28);
    const expenseTitle = 'Car Insurnace';
    const expenseAmmount = 294.67;

    return (
        <div className='expense-item'>
            <div>March 28th 2022</div>
                <div className='expense-item__description'>
                    <h2>Car Insurance</h2>
                </div>
            <div className='expense-item__price'>$294.67</div>
        </div>
    );
}

export default ExpenseItem;