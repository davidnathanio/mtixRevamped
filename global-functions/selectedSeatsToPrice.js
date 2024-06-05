import React from 'react';

const selectedSeatsToPrice = selectedSeats => {
  // Type the code for the body of your function or hook here.
  // Functions can be triggered via Button/Touchable actions.
  // Hooks are run per ReactJS rules.

  /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  if (selectedSeats.length == 0) {
    return '-';
  } else {
    const totalCost = 30000 * selectedSeats.length;
    const formattedCost = new Intl.NumberFormat('id-ID').format(totalCost);
    return formattedCost;
  }
};

export default selectedSeatsToPrice;
