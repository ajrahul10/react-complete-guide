import React from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 26.78,
			date: new Date(2021, 5, 5),
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

	const addExpenseHandler = expense => {
		console.log('In app.js');
		expenses.push(expense);
		console.log(expenses);

	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
