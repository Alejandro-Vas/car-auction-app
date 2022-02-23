import PropTypes from 'prop-types';

function FinishTime(props) {
  const { finishTime } = props;
  return (
    <div>{finishTime}</div>
  );
}
export default FinishTime;

FinishTime.propTypes = {
  finishTime: PropTypes.number.isRequired,
};
