import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import styles from './collection-item.module.scss';

function CollectionItem({Poster, imdbRating, imdbID, Title, collectionType, Type}){
    const router = useRouter();
    return(
        <Link href={{
            pathname: `/movie/[imdbID]`,
            query: { imdbID: router.query.imdbID }
        }} >
            <a className={styles.collectionItem}>
            <div className={styles.imageContainer}>
                <img className={styles.image} alt={Title} src={`${Poster}`} />
            </div>  
            {
                (() => {
                    if(collectionType==='upcoming-direct' ||  collectionType==='upcoming-indirect'){
                        return(
                            <div className={styles.collectionFooter}>
                                <span className='title'>{Title}</span>
                            </div>
                        );
                    }

                    else{
                        return(
                            <div className={styles.collectionFooter}>
                                <span className='title'>{Title}</span>
                                {/* <span className='rating'>{imdbRating*10}%</span> */}
                                {/* <span className='type'> {Type}</span> */}
                            </div>
                        );
                    }
                })()
            }
            </a>
        </Link>
    )
}
export default CollectionItem;