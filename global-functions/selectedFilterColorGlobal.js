import React from 'react';

const selectedFilterColorGlobal = (value, selected_filter) => {
  if (value != selected_filter) {
    return '#FFFFFF';
  } else {
    return '#BD9759';
  }
};

export default selectedFilterColorGlobal;
