import React, {Component} from 'react';
import logo from '../../assets/img/svg/logo-blog.svg';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white" role="navigation">

                    <div className="container position-relative">

                        <a className="navbar-brand" href={logo}>Said Amrani</a>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-1">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-1">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nav link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nav link</a>
                                </li>
                                <li className="nav-item dropdown dropdown-hover">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu" role="menu">
                                        <a className="dropdown-item" href="#">Item 1</a>
                                        <a className="dropdown-item" href="#">Item 2</a>
                                        <a className="dropdown-item" href="#">Item 3</a>
                                    </div>
                                </li>
                                <li className="nav-item ml-lg-2 mt-2 mt-lg-0">
                                    <a className="btn btn-pastel-primary ml-2" href="#">Buy now</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
