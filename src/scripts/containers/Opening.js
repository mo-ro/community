import { connect } from 'react-redux';
import {
  changeCharacter
} from "../actions/character";
import Opening from "../components/Opening";

const mapStateToProps = (state) => ({
  currentCharacter: state.character.currentCharacter,
  uid: state.auth.uid
});

const mapDispatchToProps = dispatch => ({
  changeCharacter(currentCharacter, CurrentUser) {
    // console.log(currentCharacter, CurrentUser)
    // CurrentUser.child("userData").update({currentCharacter: currentCharacter});
    dispatch(changeCharacter(currentCharacter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Opening);