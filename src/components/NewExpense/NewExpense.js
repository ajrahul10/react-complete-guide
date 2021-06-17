import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowNewExpenseForm(false);
    }

    const showNewExpenseFormHandler = () => {
        setShowNewExpenseForm(true);
    }
    const hideNewExpenseFormHandler = () => {
        setShowNewExpenseForm(false);
    }

    return (
        <div className="new-expense">
            {!showNewExpenseForm && 
                <button
                    onClick={showNewExpenseFormHandler}>
                    Add New Expense
                </button>
            }
            {showNewExpenseForm && 
                <ExpenseForm
                    hideNewExpenseForm={hideNewExpenseFormHandler}
                    onSaveNewExpenseData={saveExpenseDataHandler}
                />
            }
        </div>
    );
}

export default NewExpense;