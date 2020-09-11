import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to firebase with react</h1>
                <li><a href="http://localhost:3000/hooks">Hooks</a></li>
            <li><a href="http://localhost:3000/simple">Simple</a></li>
            <li><a href="http://localhost:3000/auth">Email/password login</a></li>
            <li><a href="http://localhost:3000/fireauth">Authentication</a></li>
            </div>
        )
    }
}

export default Header
