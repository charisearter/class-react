import { Component } from 'react';
import './App.css';
import CardList from './component/card-list/CardList';
import SearchBox from './component/search-box/SearchBox';
import Title from './component/title/Title';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://rickandmortyapi.com/api/character')
			.then((res) => res.json())
			.then((data) => this.setState({ users: data.results }));
		console.log(this.state.users);
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
				<Title title='Title Here' subtitle='Subtitle if needed' />
				<SearchBox
					onSearchChange={this.onSearchChange}
					placeholder='Search Users'
				/>
				<CardList filteredUsers={filteredUsers} />
			</div>
		);
	}
}

export default App;
