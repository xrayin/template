import React, {Component} from 'react';
import favicon from "../../assets/img/favicon.ico";

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <title>title</title>
                    <meta name="description" content=""/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

                    <link rel="shortcut icon" href={favicon}/>

                </header>
            </div>
        );
    }
}

export default Header;
