import React from 'react';

const selectedFilterColorG = (value, selected_filter) => {
  if (value != selected_filter) {
    return '#FFFFFF';
  } else {
    return '#BD9759';
  }
};

export default selectedFilterColorG;
