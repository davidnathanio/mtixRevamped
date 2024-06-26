import React from 'react';

// Mengubah format harga dari integer menjadi format Rupiah
const intToPrice = int => {
  // Type the code for the body of your function or hook here.
  // Functions can be triggered via Button/Touchable actions.
  // Hooks are run per ReactJS rules.

  /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  return new Intl.NumberFormat('id-ID').format(int);
};

export default intToPrice;
