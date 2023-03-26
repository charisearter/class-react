import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{
					id: 1,
					name: 'A',
				},
				{
					id: 2,
					name: 'B',
				},
				{
					id: 3,
					name: 'C',
				},
			],
		};
	}
	render() {
		const { users } = this.state;
		return (
			<div>
				<h1> App component</h1>
				{users.map((user) => {
					const { id, name } = user;
					return <h2 key={id}>{name} </h2>;
				})}
			</div>
		);
	}
}

export default App;
