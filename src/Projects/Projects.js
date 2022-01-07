import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './Projects.module.scss'

export class Projects extends Component {
    constructor() {
        super();
        this.state = {
            isAdd: false
        }
    }

    onChange = () => {
        this.setState({
            isAdd: !this.state.isAdd
        })
    }

    render() {
        // const {rightPanelActive} = this.state.isAdd ? styles.rightPanelActive : styles ;
        // console.log(rightPanelActive)
        return (
            <div className={styles.root}>
                <div className={clsx(styles.container, { [styles.rightPanelActive] : this.state.isAdd })} id='container'>
                    <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
                        <form action='#'>
                            <h1>Create Account</h1>
                            <div className={styles.socialContainer}>
                                <a href='#' className={styles.social}><i className='fab fa-facebook-f'></i></a>
                                <a href='#' className={styles.social}><i className='fab fa-google-plus-g'></i></a>
                                <a href='#' className={styles.social}><i className='fab fa-linkedin-in'></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type='text' placeholder='Name' />
                            <input type='email' placeholder='Email' />
                            <input type='password' placeholder='Password' />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className={`${styles.formContainer} ${styles.signInContainer}`}>
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
                            <button onClick={this.onChange}>Sign In</button>
                        </form>
                    </div>
                    <div className={styles.overlayContainer}>
                        <div className={styles.overlay}>
                            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                                <h1>Welcome Back!</h1>
                                <p>
                                    To Keep connected with us please login with your personal info
                                </p>
                                <button className={styles.ghost} onClick={this.onChange}>Sign In</button>
                            </div>
                            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className={styles.ghost} onClick={this.onChange}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>

        )
    }
}
