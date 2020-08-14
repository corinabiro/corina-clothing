import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector (
    [selectCollections],
    //Object keys takes all keys from an object and returns it into an array format
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
    