import React, { Component } from 'react';
import styles from './SignIn.module.scss';

export class SignIn extends Component {
 
    render() {
        return (
                <form action='#'>
                    <h1>Sign in</h1>
                    <div className={styles.socialContainer}>
                        <a href='#' className={styles.social}><i className='fab fa-facebook-f'></i></a>
                        <a href='#' className={styles.social}><i className='fab fa-google-plus-g'></i></a>
                        <a href='#' className={styles.social}><i className='fab fa-linkedin-in'></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <a href='#'>Forgot your password</a>
                    <button>Sign In</button>
                </form>
        )
    }
}
