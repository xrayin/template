import React, {Component} from 'react';
import footerLogo from '../../assets/img/svg/logo.svg';
import { FontAwesomeSvgCore } from '@fortawesome/fontawesome-svg-core';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
    render() {
        return (
            <div>
                {/*Footer*/}
                <footer className="footer footer-dark bg-dark mt-8">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-12 col-md">
                                <h6 className="footer-header mb-4 pb-md-2">
                                    Inertia
                                </h6>
                                <a href="#" className="footer-link">
                                    Landing pages
                                </a>
                                <a href="#" className="footer-link mt-2">
                                    Blog pages
                                </a>
                                <a href="#" className="footer-link mt-2">
                                    Ecommerce layout
                                </a>
                            </div>

                            <div className="col-12 col-md mt-5 mt-md-0">
                                <h6 className="footer-header mb-4 pb-md-2">
                                    Company
                                </h6>
                                <a href="#" className="footer-link">
                                    Contact Us
                                </a>
                                <a href="#" className="footer-link mt-2">
                                    About
                                </a>
                                <a href="#" className="footer-link mt-2">
                                    Careers
                                </a>
                            </div>

                            <div className="col-12 col-md mt-5 mt-md-0">
                                <h6 className="footer-header mb-4 pb-md-2">
                                    Products
                                </h6>
                                <a href="#" className="footer-link">
                                    Theme Landings
                                </a>
                                <a href="#" className="footer-link mt-2">
                                    Theme Support
                                </a>
                                <a href="#" className="footer-link mt-2">
                                    Theme Documentation
                                </a>
                            </div>

                            <div className="col-12 col-md mt-5 mt-md-0">
                                <h6 className="footer-header mb-4 pb-md-2">
                                    Resources
                                </h6>
                                <a href="#" className="footer-link">
                                    My Account
                                </a>
                                <a href="#" className="footer-link mt-2">
                                    Branding Resources
                                </a>
                            </div>

                            <div className="col-12 col-md mt-5 mt-md-0">
                                <h6 className="footer-header mb-4 pb-md-2">
                                    Support
                                </h6>
                                <a href="#" className="footer-link">
                                    Frequently Asked Questions
                                </a>
                                <a href="#" className="footer-link mt-2">
                                    Email Us
                                </a>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-6">
                            <a href="#" className="hover-lift-light text-decoration-none mx-2">
        <span className="icon-circle footer-social-icon">
            <FontAwesomeIcon icon={faTwitter}/>
        </span>
                            </a>
                            <a href="#" className="hover-lift-light text-decoration-none mx-2">
        <span className="icon-circle footer-social-icon">
                        <FontAwesomeIcon icon={faFacebook}/>
        </span>
                            </a>
                            <a href="#" className="hover-lift-light text-decoration-none mx-2">
        <span className="icon-circle footer-social-icon">
                                  <FontAwesomeIcon icon={faGithubAlt}/>
        </span>
                            </a>
                            <a href="#" className="hover-lift-light text-decoration-none mx-2">
        <span className="icon-circle footer-social-icon">
                                  <FontAwesomeIcon icon={faGoogle}/>

        </span>
                            </a>
                        </div>

                        <div className="mt-6">
                            <p className="footer-text mb-2">
                                All rights reserved. © 2020.
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href="#" className="footer-text mx-3">
                                    Privacy & terms
                                </a>
                                <a href="#" className="footer-text mx-3">
                                    Terms of service
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="footer-text text-uppercase font-weight-bold">
                                Made with love from
                            </p>
                            <div className="footer-brand">
                                <img src={footerLogo} alt="React Logo" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
