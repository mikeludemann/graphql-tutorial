import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from './Link';

const FEED_QUERY = gql`
{
  feed {
    links {
      id
      createdAt
      url
      description
    }
  }
}
`

class ListQuery extends Component {
  render() {
    const linkInformations = [
      {
        id: '1',
        description: 'Prisma',
        url: 'https://www.prisma.io',
      },
      {
        id: '2',
        description: 'GraphQL',
        url: 'https://graphql.org',
      },
      {
        id: '3',
        description: 'GitHub',
        url: 'https://github.com/',
      },
    ]

    return (
      <Query query={FEED_QUERY}>
        {() => linkInformations.map(link => <Link key={link.id} link={link} />)}
      </Query>
    )
  }
}

export default ListQuery;