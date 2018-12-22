import { connect } from 'react-redux';
import LineLayer from '../../components/Layers/LineLayer';

const mapStateToProps = state => ({
  lines: state.lines,
});

export default connect(mapStateToProps)(LineLayer);
