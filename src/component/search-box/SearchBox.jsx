import { Component } from 'react';

class SearchBox extends Component {
	render() {
		const { onSearchChange, placeholder } = this.props;
		return (
			<div>
				<input
					type='text'
					placeholder={placeholder}
					onChange={onSearchChange}
				/>
			</div>
		);
	}
}

export default SearchBox;
