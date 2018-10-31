import { connect } from 'react-redux';
import {
    getPurchaseHistoryItems,
    isPurchaseHistoryFetching
} from './selectors';
import PurchaseHistory from './purchaseHistory';
import { getPurchaseHistory } from './asyncActions';
import actions from './actions';

const mapStateToProps = state => {
    return {
        items: getPurchaseHistoryItems(state),
        isFetching: isPurchaseHistoryFetching(state)
    };
};

const mapDispatchToProps = {
    getPurchaseHistory,
    resetPurchaseHistory: actions.reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchaseHistory);
