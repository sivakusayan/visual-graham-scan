import { connect } from 'react-redux';
import RejectedPointLayer from '../../components/Layers/RejectedPointLayer';

const mapStateToProps = state => ({
  points: state.points.filter(point => point.status === 'REJECTED'),
});

export default connect(mapStateToProps)(RejectedPointLayer);