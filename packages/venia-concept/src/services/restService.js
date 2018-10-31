import { RestApi } from '@magento/peregrine';
import purchaseHistoryMock from './mocks/purchaseHistoryMock';

const { request } = RestApi.Magento2;

const API_VERSION = 'V1';

export const addItemToGuestCart = ({ guestCartId, cartItem }) =>
    request(`/rest/${API_VERSION}/guest-carts/${guestCartId}/items`, {
        method: 'POST',
        body: JSON.stringify({
            cartItem
        })
    });

// TODO: make a request here.
export const fetchPurchaseHistory = () =>
    new Promise(resolve => {
        setTimeout(() => resolve(purchaseHistoryMock), 1000);
    });

const restService = {};

restService.api = {
    addItemToGuestCart,
    fetchPurchaseHistory
};

export default restService;
