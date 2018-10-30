import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import actions from './actions';
import { handleCreateAccount, handleContinueShopping } from './asyncActions';
import Receipt from './receipt';
import { getOrderInformation } from './selectors';

const { reset } = actions;

export default compose(
    connect(
        state => ({ order: getOrderInformation(state) }),
        { handleContinueShopping, reset, handleCreateAccount }
    ),
    withRouter
)(Receipt);
