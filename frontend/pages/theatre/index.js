import React from 'react';
import MOVIE_DATA from '../../assets/movie.data';


class Theatre extends React.Component {
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
            <h1>Театр</h1>
            <p>Извините, здесь пока пусто</p>
        </div>
        );
    }
}

export default Theatre;