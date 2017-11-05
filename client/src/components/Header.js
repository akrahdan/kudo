import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Header extends Component {


  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li className="nav-item"><a className="nav-link btn btn-outline-primary" href="http://localhost:3000/auth/facebook">Login with Facebook</a></li>;
      default:
        return [
            <li key= {1} className="nav-item "><a className="nav-link" href="/reviews">Dashboard</a></li>,
            <li key= {2} className="nav-item"><a className="nav-link" href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-faded">
        <a className='navbar-brand' href="/#">Kudo</a>

        <div className="collapse navbar-collapse show" id="navbarCollapse">

          <ul className="navbar-nav ml-auto">

             {this.renderContent()}
            <br/>

          </ul>

        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
