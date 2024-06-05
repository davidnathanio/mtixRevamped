import React from 'react';

const selectedFilterTextColorG = (value, selected_filter) => {
  if (value != selected_filter) {
    return '#BD9759';
  } else {
    return '#FFFFFF';
  }
};

export default selectedFilterTextColorG;
