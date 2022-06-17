import React, { useState } from 'react';
import Link from 'next/link';
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/close.svg";
import menuIcon from "../../assets/menu.svg";
import signIcon from "../../assets/sign.svg";
import Image from 'next/image';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

export const Header = (props) => {

    const router = useRouter();

    const currentRoute = router.pathname;

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    function handleLogout() {
        fetch('http://localhost:3001/api/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => {
            alert("You have logged out of your account!");
            window.location.replace("http://localhost:3000");
        })
        .catch(err => console.log(err));
    }

   
    return (
        <div className={styles.header}>
            <div className={styles.navIcon} onClick={handleClick}>
                <Image src={click ? closeIcon : menuIcon} className={styles.resNavIcon} alt="Close icon" />
            </div> 
            <div className={styles.logoContainer}>
                <Link href='/' passHref><a className={styles.logoImage}><Image src={ logo } alt="logo"/></a></Link>
                <Link href='/' ><a className={styles.logoText}>афиша</a></Link>
            </div>
            <div className={click ? `${styles.options} ${styles.active}` : `${styles.options}`}>
                <Link href="/movie">
                    <a className={currentRoute === "/movie" ? `${styles.option} ${styles.active}` : `${styles.option}`} >Кинотеатры</a>
                </Link>
                <Link href="/theatre" >
                    <a className={currentRoute === "/theatre" ? `${styles.option} ${styles.active}` : `${styles.option}`} >Театры</a>
                </Link>
                <Link href="/concert" >
                    <a className={currentRoute === "/concert" ? `${styles.option} ${styles.active}` : `${styles.option}`} >Концерты</a>
                </Link>
                <Link href="/museum" >
                    <a className={currentRoute === "/museum" ? `${styles.option} ${styles.active}` : `${styles.option}`} >Музеи</a>
                </Link>
                <Link href="/other" >
                    <a className={currentRoute === "/other" ? `${styles.option} ${styles.active}` : `${styles.option}`} >Прочие</a>
                </Link>
            </div>
        
            <div className={styles.signInIcon}>
                <Image src={signIcon} alt="Signin icon" className='svg' />
                {
                    (props.isLoggedIn==='true') ?
                    (<Link href='/logout'><a className={styles.logOut} onClick={handleLogout}></a></Link>) :
                    (<Link href='/signin'><a className={styles.signIn}></a></Link>)
                }   
            </div>
            <div className={styles.signInContainer}>
                {
                    (props.isLoggedIn==='true') ?
                    (<Link href='/logout' ><a className={styles.logOut} onClick={handleLogout}>Logout</a></Link>) :
                    (<Link href='/signin' ><a className={styles.signIn}>Вход / Регистрация</a></Link>)
                }
            </div> 
        </div>
    );
}

export default Header;