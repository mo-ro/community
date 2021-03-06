import { connect } from "react-redux";
import {
  changeUserNum
} from "../actions/users";
import OtherCharacters from "../components/OtherCharacters";

const mapStateToProps = (state) => ({
  currentUsers: state.users.currentUsers,
  currentUid: state.auth.uid
});

const mapDispatchToProps = dispatch => ({
  changeUserNum(currentUsers) {
    dispatch(changeUserNum(currentUsers));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherCharacters);