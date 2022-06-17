import React from 'react';

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
    fetch(process.env.NEXT_PUBLIC_API_URL + '/signedin', {
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
