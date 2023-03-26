import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [
				{
					id: 1,
					name: 'Apple',
				},
				{
					id: 2,
					name: 'Banana',
				},
				{
					id: 3,
					name: 'Coco',
				},
			],
			searchField: '',
		};
	}

	onSearchChange = (e) => {
		e.preventDefault();
		const searchField = e.target.value.toLowerCase();
		this.setState({ searchField });
	};

	render() {
		const { users, searchField } = this.state;

		const filteredUsers = users.filter((user) => {
			return user.name.toLowerCase().includes(searchField);
		});
		return (
			<div>
				<h1> App component</h1>
				<input
					type='text'
					placeholder='search users'
					onChange={this.onSearchChange}
				/>
				{filteredUsers.map((user) => {
					const { id, name } = user;
					return <h2 key={id}>{name} </h2>;
				})}
			</div>
		);
	}
}

export default App;
