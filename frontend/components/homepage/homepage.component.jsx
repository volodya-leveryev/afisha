import React from 'react';
import Link from 'next/link';

import MOVIE_DATA from '../../assets/movie.data';
import styles from './homepage.module.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: MOVIE_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className={styles.homePage}>
                <div className={styles.homePageMovie}>
                    <h1>Кино</h1>
                    <CollectionPreview collectionType='movie-indirect' collections={collections} />
                    <Link href='/movie' >
                        <a className={styles.loadMoreItems} >
                            Загрузить больше
                        </a>
                    </Link>            
                </div>
                <div className='home-page-upcoming'>
                    <h1>Театр</h1>
                    <CollectionPreview collectionType='upcoming-indirect' collections={collections} />
                    <Link href='/' >
                        <a className={styles.loadMoreItems}>
                            Загрузить больше
                        </a>
                    </Link>
                </div>
                <div className='home-page-popular'>
                    <h1>Концерты</h1>
                    <CollectionPreview collectionType='popular-indirect' collections={collections} />
                    <Link href='/'>
                        <a className={styles.loadMoreItems}>
                            Загрузить больше
                        </a>
                    </Link>
                </div>
                <div className='home-page-popular'>
                    <h1>Музей</h1>
                    <CollectionPreview collectionType='popular-indirect' collections={collections} />
                    <Link href='/' >
                        <a className={styles.loadMoreItems}>
                            Загрузить больше
                        </a>
                    </Link>
                </div>
                <div className='home-page-popular'>
                    <h1>Прочее</h1>
                    <CollectionPreview collectionType='popular-indirect' collections={collections} />
                    <Link href='/' >
                        <a className={styles.loadMoreItems}>
                            Загрузить больше
                        </a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;