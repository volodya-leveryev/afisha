import React from 'react';
import styles from './sign-in.module.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
     
    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/signin',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(this.state)
        })
        .then(res => {
            if(res.status === 401){
                alert("ERROR: Invalid Email and/or Password combination!");
                window.location.reload();
            }
            else if(res.status === 400){
                alert("ERROR: Fill all the required fields");
            }
            else{
                this.props.onAuthChange('true');
                this.props.history.push('/');
            }
        })
        .catch(err => console.log(err));
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className={styles.signInContainer}>
                <h2>У вас уже есть аккаунт?</h2>
                <span>Зайдите в аккаунт с помощью электронной почты и пароля</span>
                <div className={styles.formContainer}>
                    <form>
                        <input className={styles.input} name='username' type='email' label='email' placeholder='Email' value={this.state.username} onChange={this.handleChange} required />
                        <input className={styles.input} name='password' type='password' label='password' placeholder='Пароль' value={this.state.password} onChange={this.handleChange} required />
                        <button className={styles.button} type='submit' onClick={this.handleSubmit}>Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;