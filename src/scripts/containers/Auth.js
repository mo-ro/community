import { connect } from "react-redux";
import {
  signIn,
  signOut
} from "../actions/auth";
import Auth from "../components/Auth";

const mapStateToProps = (state) => ({
  uid: state.auth.uid
});

const mapDispatchToProps = dispatch => ({
  signIn(uid) {
    dispatch(signIn(uid));
  },
  signOut(uid) {
    dispatch(signOut(uid));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);