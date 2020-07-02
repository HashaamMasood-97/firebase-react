import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to firebase with react</h1>
                <li><a href="http://localhost:3000/a">Hook</a></li>
            <li><a href="http://localhost:3000/b">Simple</a></li>
            </div>
        )
    }
}

export default Header
