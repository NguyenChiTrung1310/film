import React from 'react';
import PropTypes from 'prop-types';

import {Typography, Box} from '@material-ui/core';

export const TabItem = (props) => {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      aria-labelledby={`vertical-tab-${index}`}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      role='tabpanel'
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabItem.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};