import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import selectedSeatsToPrice from '../global-functions/selectedSeatsToPrice';
import selectedSeatsToString from '../global-functions/selectedSeatsToString';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const TransactionDetailsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [selected_filter, setSelected_filter] = React.useState('');
  const multiply = (quantity, price) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return Math.round(quantity * price);
  };

  const boughtFood = allFood => {
    return allFood.filter(item => item.quantity > 0);
  };

  const countPrice = allFood => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    const totalPrice = allFood.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return Math.round(totalPrice);
  };

  const confirmOrder = (transactionHistory, selectedSeats) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    const bookingCode = Math.floor(10000 + Math.random() * 90000); // Generates a random code between 10000 and 99999
    const newTransaction = {
      booking_code: bookingCode,
      selected_tickets: selectedSeats,
    };

    return transactionHistory.push(newTransaction);
  };

  return (
    <View style={StyleSheet.applyWidth({ gap: 10 }, dimensions.width)}>
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Poppins'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Poppins'].style, {
            fontFamily: 'Poppins_700Bold',
            fontSize: 16,
            marginBottom: 10,
            textAlign: 'left',
          }),
          dimensions.width
        )}
      >
        {'Detail Transaksi'}
      </Text>

      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {'Seats'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontFamily: 'Poppins_700Bold', fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {selectedSeatsToString(Constants['selected_seats'])}
        </Text>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {'Ticket'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontFamily: 'Poppins_700Bold', fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {Constants['selected_seats']?.length}
          {' x Rp'}
          {selectedSeatsToPrice(selected_filter)}
        </Text>
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {'Admin Fee'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontFamily: 'Poppins_700Bold', fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {Constants['selected_seats']?.length}
          {' x Rp'}
          {selectedSeatsToPrice(Constants['selected_seats'])}
        </Text>
      </View>
      {/* View 4 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {'Promo'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontFamily: 'Poppins_700Bold', fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {'Rp 0'}
        </Text>
      </View>
      {/* View 5 */}
      <View
        style={StyleSheet.applyWidth({ alignSelf: 'auto' }, dimensions.width)}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { color: theme.colors['Error'], fontSize: 12, textAlign: 'left' }
            ),
            dimensions.width
          )}
        >
          {'*Tickets that have been purchased cannot be exchanged or refunded.'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { color: theme.colors['Error'], fontSize: 12, textAlign: 'left' }
            ),
            dimensions.width
          )}
        >
          {
            '*Children (2 years old or above) are required to purchase a ticket.'
          }
        </Text>
      </View>
    </View>
  );
};

export default withTheme(TransactionDetailsBlock);
