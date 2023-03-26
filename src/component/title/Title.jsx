import { Component } from 'react';

class Title extends Component {
	render() {
		const { title, subtitle } = this.props;
		return (
			<div>
				<h1> {title} </h1>
				<h2> {subtitle} </h2>
			</div>
		);
	}
}

export default Title;
