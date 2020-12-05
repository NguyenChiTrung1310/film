import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';

import {useStyles} from './useStyles';
import './TabPanel.scss';

const TabPanel = (props) => {
  const classes = useStyles();
  const {children, handleChange, propsValue, orientation = ['horizontal', 'vertical']} = props;

  return (
    <div>
      <Tabs
        aria-label='Vertical tabs example'
        className={classes.tabs}
        classes={{
          indicator: classes.indicator,
        }}
        onChange={handleChange}
        orientation={orientation}
        textColor='secondary'
        value={propsValue}
        variant='scrollable'
      >
        {children}
      </Tabs>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.array,
  handleChange: PropTypes.func,
  orientation: PropTypes.string,
  propsValue: PropTypes.number,
};

export default TabPanel;
