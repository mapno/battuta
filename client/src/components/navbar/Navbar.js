import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    }

    handleLogout = (e) => {
        this.props.logout()
    }

    render() {
        if (this.state.loggedInUser) {
            return (
                <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
                    <span className="nav-item active"><Link to="/" alt="" className="nav-link">Home</Link></span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link to="/profile" className="nav-link">My profile</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/" onClick={this.handleLogout}>Logout</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
                    <div className="navbar-nav">
                        <span className="nav-item active title"><Link to="/" alt="" className="nav-link">Home</Link></span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link to='/signup' className="nav-link">Signup</Link></li>
                            <li className="nav-item active"><Link to='/login' className="nav-link">Login</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default Navbar;