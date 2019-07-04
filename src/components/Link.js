import React, { Component } from 'react';

class Link extends Component {
	render() {
		return (
			<div class="link--container">
				<div class="link--element">
          <a href={this.props.link.url}>
            {this.props.link.description}
          </a>
				</div>
			</div>
		)
	}
}

export default Link;