import React from 'react';
import styles from './movie.module.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import MOVIE_DATA from '../../assets/movie.data';

class Movie extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: MOVIE_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
        <div className={styles.movieContainer}>
            <h1>Кино</h1>
            <CollectionPreview collectionType='movie-direct' collections={collections} />
        </div>
        );
    }
}

export default Movie;