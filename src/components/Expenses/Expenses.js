import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpensesFilter/ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {

    const [filteredExpenses, setFilteredExpenses] = useState(props.items);
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        const filteredExp = props.items.filter(expense => {
            return expense.date.getFullYear() == selectedYear
        })
        setFilteredExpenses(filteredExp);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter 
                selectedYear={filteredYear} 
                onFilterChange={filterChangeHandler} 
            />

            {filteredExpenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </Card>
    )
}

export default Expenses;