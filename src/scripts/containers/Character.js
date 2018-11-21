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
    console.log(event.keyCode, 9999)
    dispatch(moveCharacterLeft());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveArea);