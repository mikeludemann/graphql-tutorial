import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const POST_MUTATION = gql`
	mutation PostMutation($description: String!, $url: String!) {
		post(description: $description, url: $url) {
			id
			createdAt
			url
			description
		}
	}
`

class CreateLink extends Component {
	state = {
		description: '',
		url: '',
	}
	render() {
		const { description, url } = this.state;

		const field = {
			margin: "5px 0px",
			padding: "5px 0px",
			width: "100%"
		};

		return (
			<div className="row">
				<div className="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
					<input
						className="description"
						value={description}
						onChange={e => this.setState({ description: e.target.value })}
						type="text"
						placeholder="Description"
						style={field}
					/>
				</div>
				<div className="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
					<input
						className="url"
						value={url}
						onChange={e => this.setState({ url: e.target.value })}
						type="text"
						placeholder="URL"
						style={field}
					/>
				</div>
				<div className="col-12">
					<Mutation mutation={POST_MUTATION} variables={{ description, url }}>
						{postMutation => (
							<button type="button" className="btn btn-primary btn-block" onClick={postMutation} style={field}>
								Submit
							</button>
						)}
					</Mutation>
				</div>
			</div>
		)
	}
}

export default CreateLink;
