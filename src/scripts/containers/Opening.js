import { connect } from 'react-redux';
import {
  changeCharacter
} from "../actions/character";
import Opening from "../components/Opening";

const mapStateToProps = (state) => ({
  currentCharacter: state.character.currentCharacter
});

const mapDispatchToProps = dispatch => ({
  changeCharacter(currentCharacter) {
    dispatch(changeCharacter(currentCharacter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Opening);