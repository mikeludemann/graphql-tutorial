import React, { Component } from 'react';
import Link from './Link';

class List extends Component {
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
      <div class="container">
        {linkInformations.map(link => 
          <Link key={link.id} link={link} />)
        }
      </div>
    )
  }
}

export default List;