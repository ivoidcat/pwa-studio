import { generatePurchaseDetailsPageUrl } from './helpers';
import dressImage from './dress.jpg';

export const getPurchaseHistoryItems = ({ purchaseHistory: { items = [] } }) =>
    items.map(({ item_id, name, date }) => ({
        id: item_id,
        title: name,
        date,
        // TODO: use makeProductMediaPath function to get image src
        imageSrc: dressImage,
        link: generatePurchaseDetailsPageUrl()
    }));

export const isPurchaseHistoryFetching = ({
    purchaseHistory: { isFetching }
}) => isFetching;
