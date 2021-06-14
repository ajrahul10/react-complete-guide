import Expenses from './components/Expenses'

function App() {
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

	return (
		<div>
			<h1>This is my first app!</h1>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
