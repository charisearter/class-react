import { Component } from 'react';

class CardList extends Component {
	render() {
		const { filteredUsers } = this.props;
		return (
			<div>
				{filteredUsers.map((user) => {
					const { id, name } = user;
					return <h2 key={id}>{name} </h2>;
				})}
			</div>
		);
	}
}

export default CardList;
