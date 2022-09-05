import { Box } from 'components/theme/Box';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  onPositivePercentage,
}) => {
  return (
    <>
      <Box display="flex" gridGap="10px" mb="20px">
        <p>
          Good : <span>{good}</span>
        </p>
        <p>
          Neutral : <span>{neutral}</span>
        </p>
        <p>
          Bad : <span>{bad}</span>
        </p>
      </Box>

      <Box display="flex" gridGap="10px">
        <p>Total : {total} </p>
        <p>Positive feedback : {onPositivePercentage} %</p>
      </Box>
    </>
  );
};

Statistics.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  list: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};