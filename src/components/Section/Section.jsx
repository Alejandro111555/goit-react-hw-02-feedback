import PropTypes from 'prop-types';
import { Box } from '../theme/Box';

export const Section = ({ title, children }) => {
  return (
    <>
      <Box as="h2" mb="10px">
        {title}
      </Box>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};