import { connect } from 'react-redux';
import CreateAccountPage from './createAccountPage';
import { createAccount } from 'src/actions/createAccountPage';

export default connect(
    null,
    { createAccount }
)(CreateAccountPage);
