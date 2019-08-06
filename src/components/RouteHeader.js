import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class RouteHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create new link
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(RouteHeader);