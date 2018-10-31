import purchaseHistoryMock from './mocks/purchaseHistoryMock';

// TODO: make a request here.
export const fetchPurchaseHistory = () =>
    new Promise(resolve => {
        setTimeout(() => resolve(purchaseHistoryMock), 1000);
    });

const restService = {};

restService.api = {
    fetchPurchaseHistory
};

export default restService;
