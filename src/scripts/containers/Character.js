import { connect } from 'react-redux';
import { moveCharacter } from '../actions/character';
import Character from '../components/Character';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  moveCharacter() {
    dispatch(moveCharacter(

    ));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);