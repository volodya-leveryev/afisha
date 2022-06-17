import React from 'react';

import styles from './collection-preview.module.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({collectionType, collections}) => (
    <div className={styles.collectionPreview}>
        {
            (() => {
                let collectionsNowShowing = collections;
                let collectionsPopular = [...collections].sort((a, b) => (b.imdbRating-a.imdbRating));
                collectionsNowShowing = collectionsNowShowing.filter((collection, idx) => collection.Year < 2013);
                collectionsPopular = collectionsPopular.filter((collection, idx) => collection.Type === "Theatre");
                let collectionsUpcoming = [...collections].filter((collection, idx) => collection.Type === "Music");

                if(collectionType==='movie-indirect'){
                    return(collectionsNowShowing.filter((collection, idx) => idx<10)
                    .map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} />
                    ))
                }

                else if(collectionType==='movie-direct'){
                    return(collectionsNowShowing.filter((collection, idx) => idx<40)
                    .map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} />
                    ))
                }

                else if(collectionType==='upcoming-indirect'){
                    return(collectionsUpcoming.filter((collection, idx) => idx<10)
                    .map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} collectionType={collectionType} />
                    ))
                }

                else if(collectionType==='upcoming-direct'){
                    return(collectionsUpcoming.filter((collection, idx) => idx<40)
                    .map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} collectionType={collectionType} />
                    ))
                }

                else if(collectionType==='popular-indirect'){
                    return(collectionsPopular.filter((collection, idx) => idx<10)
                    .map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} />
                    ))
                }

                else{
                    return(collectionsPopular.filter((collection, idx) => idx<40)
                    .map(({ imdbID, ...otherCollectionProps }) => 
                        <CollectionItem key={imdbID} imdbID={imdbID} {...otherCollectionProps} />
                    ))
                }
            })()
        }
    </div>
)

export default CollectionPreview;