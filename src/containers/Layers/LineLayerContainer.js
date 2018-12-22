import LineLayer from '../../components/Layers/LineLayer';
import connectWithStore from '../../state/store/connectWithStore';

const mapStateToProps = state => ({
  lines: state.lines,
});

export default connectWithStore(mapStateToProps)(LineLayer);
