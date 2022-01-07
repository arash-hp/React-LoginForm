import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './SignUp.module.scss';

export class SignUp extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value)
        this.setState({
            [name]: value
        });
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        const information = this.state;
        this.props.onSave(information)
    }
    render() {
        return (
            <form action='#' onSubmit={this.onSubmit}>
                <h1>Create Account</h1>
                <div className={styles.socialContainer}>
                    <a href='#' className={styles.social}><i className='fab fa-facebook-f'></i></a>
                    <a href='#' className={styles.social}><i className='fab fa-google-plus-g'></i></a>
                    <a href='#' className={styles.social}><i className='fab fa-linkedin-in'></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type='text' name='name' placeholder='Name' value={this.state.name}
                    onChange={this.handleChangeInput} />
                <input type='email' name='email' placeholder='Email' value={this.state.email}
                    onChange={this.handleChangeInput} />
                <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChangeInput} />
                <button type='submit'>Sign Up</button>
            </form>
        )
    }
}
