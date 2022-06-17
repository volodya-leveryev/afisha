import React from 'react';
import styles from './sign-in-and-sign-up.module.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = (props) => {
    return (
        <div className='sign-in-and-sign-up-page-container'>
            <div className={styles.signInAndSignUpcontainer}>
                <SignIn onAuthChange={props.onAuthChange} />
                <SignUp onAuthChange={props.onAuthChange} />
            </div>
        </div>
    )
}

export default SignInAndSignUp;