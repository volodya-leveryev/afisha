import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import MOVIE_DATA from '../assets/movie.data';
import CollectionPreview from '../components/collection-preview/collection-preview.component';
import HomePage from '../components/homepage/homepage.component';

class Home extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: 'false'
    }
  }

  onChange = (newState) => {
    this.setState({
      isLoggedIn: newState
    });
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/signedin', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(json => {
      if(json===true){
        this.setState({isLoggedIn: 'true'});
      }
      else{
        this.setState({isLoggedIn: 'false'});
      }
    })
    .catch(err => console.log(err))

  }
  
  render() {
    return (
      <div className="App">
        <div>
          <HomePage />
        </div>
      </div>
    );
  }
}

export default Home;
