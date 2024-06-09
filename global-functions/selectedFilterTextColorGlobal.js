import React from 'react';

const selectedFilterTextColorGlobal = (value, selected_filter) => {
  if (value != selected_filter) {
    return '#BD9759';
  } else {
    return '#FFFFFF';
  }
};

export default selectedFilterTextColorGlobal;
