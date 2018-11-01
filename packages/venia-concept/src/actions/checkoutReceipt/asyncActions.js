import { resetCheckout } from 'src/actions/checkout';
import { objectToQueryString } from 'src/util/queryStringHelpers';
import { getAccountInformation } from 'src/selectors/checkoutReceipt';

export const handleCreateAccount = history => async (dispatch, getState) => {
    const accountInfo = getAccountInformation(getState());

    await dispatch(resetCheckout());

    history.push(`/create-account${objectToQueryString(accountInfo)}`);
};

export const handleContinueShopping = history => async dispatch => {
    await dispatch(resetCheckout());

    history.push('/');
};
