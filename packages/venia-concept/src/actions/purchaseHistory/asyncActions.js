import actions from './actions';
import { restService } from 'src/services';

export const getPurchaseHistory = () =>
    async function thunk(dispatch) {
        dispatch(actions.fetchPurchaseHistoryRequest());

        try {
            const response = await restService.api.fetchPurchaseHistory();

            dispatch(actions.setItems(response));
        } catch (error) {
            dispatch(actions.setItems(error));
        }
    };
