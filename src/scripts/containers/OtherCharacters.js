import { connect } from "react-redux";
import {
  signIn,
  signOut
} from "../actions/users";
import OtherCharacters from "../components/OtherCharacter";

const mapStateToProps = (state) => ({
  uid: state.users.uid
});

const mapDispatchToProps = dispatch => ({
  signIn() {
    dispatch(signIn());
  },
  signOut() {
    dispatch(signOut());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherCharacters);