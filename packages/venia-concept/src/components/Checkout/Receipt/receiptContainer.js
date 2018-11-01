import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import actions, {
    handleCreateAccount,
    handleContinueShopping
} from 'src/actions/checkoutReceipt';
import Receipt from './receipt';
import { getOrderInformation } from '../../../selectors/checkoutReceipt';

const { reset } = actions;

export default compose(
    connect(
        state => ({ order: getOrderInformation(state) }),
        { handleContinueShopping, reset, handleCreateAccount }
    ),
    withRouter
)(Receipt);
