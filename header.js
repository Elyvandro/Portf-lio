import React from 'react';
import './App.css';




class Header extends React.Component{


    render(){

        return (
            <header className='Header'>
            <h1>(this.props.name)</h1>
            <ul className='menu'>
            <li>ABOUT</li>
            <li>BY</li>
            <li>CONTACT</li>
            </ul>
            </header>)
    }
}


export default Header




