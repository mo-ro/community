import { connect } from 'react-redux';
import {
  moveCharacterUp,
  moveCharacterRight,
  moveCharacterDown,
  moveCharacterLeft,
} from '../actions/character';
import MoveArea  from '../components/MoveArea';

const mapStateToProps = (state) => ({
  direction: state.character.direction,
  isWalking: state.character.isWalking
});

const mapDispatchToProps = dispatch => ({
  moveCharacterUp() {
    dispatch(moveCharacterUp());
  },
  moveCharacterRight() {
    dispatch(moveCharacterRight());
  },
  moveCharacterDown() {
    dispatch(moveCharacterDown());
  },
  moveCharacterLeft() {
    dispatch(moveCharacterLeft());
  },
  moveCharacter(event) {
    switch (event.keyCode) {
      case 37:
        dispatch(moveCharacterLeft());
        break;
      case 38:
        dispatch(moveCharacterUp());
        break;
      case 39:
        dispatch(moveCharacterRight());
        break;
      case 40:
        dispatch(moveCharacterDown());
        break;
      default:
        break;
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveArea);