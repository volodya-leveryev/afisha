import React from 'react';
import MOVIE_DATA from '../../assets/movie.data';

class Concert extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: MOVIE_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
        <div>
            <h1>Концерты</h1>
            <p>Извините, здесь пока пусто</p>
        </div>
        );
    }
}

export default Concert;