import React, { Component } from 'react';
import clsx from 'clsx';
import { SignUp } from './componet/SignUp/SignUp';
import { SignIn } from './componet/SignIn/SignIn';
import { Sidebar } from './componet/Sidebar/Sidebar';
import styles from './Projects.module.scss'

export class Projects extends Component {
    constructor() {
        super();
        const item = localStorage.getItem('data')
        const information = item ? JSON.parse(item) : [];
        this.state = {
            isAdd: false,
            information
        }
    }

    onChange = () => {
        this.setState({
            isAdd: !this.state.isAdd
        })
    }

    onSubmit = (information) => {
        this.setState((prev) => {
            return {
                information: [information, ...prev.information]
            }
        }, this.updateLocalStorage)
    }

    updateLocalStorage = () => { localStorage.setItem('data', JSON.stringify(this.state.information)) };

    render() {
        // const {rightPanelActive} = this.state.isAdd ? styles.rightPanelActive : styles ;
        // console.log(rightPanelActive)
        return (
            <div className={styles.root}>
                <div className={clsx(styles.container, { [styles.rightPanelActive]: this.state.isAdd })} id='container'>
                    <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
                        <SignUp className={styles.root}
                            onSave={this.onSubmit} />
                    </div>
                    <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                        <SignIn />
                    </div>
                    <div className={styles.overlayContainer}>
                        <Sidebar
                            onChange={this.onChange} />
                    </div>
                </div >
            </div>

        )
    }
}
