import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'


const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 26.78,
		date: new Date(2020, 5, 5),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 874.58,
		date: new Date(2021, 4, 28),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 360.23,
		date: new Date(2021, 6, 1),
	},
	{
		id: "e4",
		title: "New Desk",
		amount: 409.49,
		date: new Date(2021, 1, 12),
	},
];

const App = () => {

	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = expense => {
		setExpenses(prevState => {
			return [expense, ...prevState]
		});
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
