import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeviceVariables = {
  all_reviews: [
    {
      date: 'March 12th, 2024',
      star: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere dui, vitae gravida mi. In non est eu ipsum scelerisque lacinia sit amet a odio. Nullam sollicitudin, risus in porta cursus, nisl odio viverra nunc, ac blandit ligula ex sed diam. Ut venenatis, lorem nec commodo mattis, libero nibh finibus dolor, a venenatis quam urna non nisl.',
      user: 'mtixuser1',
    },
    {
      date: 'March 13th, 2024',
      star: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere dui, vitae gravida mi. In non est eu ipsum scelerisque lacinia sit amet a odio. Nullam sollicitudin, risus in porta cursus, nisl odio viverra nunc, ac blandit ligula ex sed diam. Ut venenatis, lorem nec commodo mattis, libero nibh finibus dolor, a venenatis quam urna non nisl.',
      user: 'mtixuser2',
    },
    {
      date: 'March 14th, 2024',
      star: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere dui, vitae gravida mi. In non est eu ipsum scelerisque lacinia sit amet a odio. Nullam sollicitudin, risus in porta cursus, nisl odio viverra nunc, ac blandit ligula ex sed diam. Ut venenatis, lorem nec commodo mattis, libero nibh finibus dolor, a venenatis quam urna non nisl.',
      user: 'mtixuser3',
    },
  ],
  __env__: 'Development',
};
export const AppVariables = {
  all_food: [
    {
      type: 'combo',
      price: 70000,
      title: 'Cornell Combo 1 with Matcha Latte',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/Packshot_11_Popcorn_Cornell_Small__Matcha_Oat_Latte.jpg',
      quantity: 0,
      description: '1 Popcorn Cornell (S) + 1 Matcha Latte',
      estimatedTime: '20 mins',
    },
    {
      type: 'combo',
      price: 80000,
      title: 'Cornell Combo 2 with Milo Dinosaurs',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/Packshot_13_Popcorn_Cornell_Small__Milo_Dino.jpg',
      quantity: 0,
      description: '1 Popcorn Cornell (S) + 1 Milo Dinosaurs',
      estimatedTime: '15 mins',
    },
    {
      type: 'promo',
      price: 40000,
      title: 'Combo A with Soft Drink (S)',
      imgUrl: 'https://web3.21cineplex.com/resizer/images/fnb/Combo_A.jpg',
      quantity: 0,
      description: '1 Popcorn Salt (S) + 1 XXI Java Tea (S)',
      estimatedTime: '10 mins',
    },
    {
      type: 'promo',
      price: 60000,
      title: 'Paket Gratis Minum A',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/gratis_minum_a.jpg',
      quantity: 0,
      description: '1 Original Hot Dog + 1 Soft Drink (S)',
      estimatedTime: '15 mins',
    },
    {
      type: 'promo',
      price: 60000,
      title: 'Paket Gratis Minum B',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/gratis_minum_b.jpg',
      quantity: 0,
      description: '1 Chicken Burger + 1 Soft Drink (S)',
      estimatedTime: '15 mins',
    },
    {
      type: 'popcorn',
      price: 65000,
      title: 'Popcorn Milo Dinosaurs (M)',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/milo_shake_new_mtix.jpg',
      quantity: 0,
      description: 'Popcorn Milo Dinosaurs Medium',
      estimatedTime: '15 mins',
    },
    {
      type: 'popcorn',
      price: 55000,
      title: 'Popcorn Milo Dinosaurs (S)',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/milo_shake_new_mtix.jpg',
      quantity: 0,
      description: 'Popcorn Milo Dinosaurs Small',
      estimatedTime: '15 mins',
    },
    {
      type: 'popcorn',
      price: 70000,
      title: 'Popcorn Salt (L)',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/Popcorn_Gabungan_Salt.jpg',
      quantity: 0,
      description: 'Popcorn Salt Large',
      estimatedTime: '15 mins',
    },
    {
      type: 'popcorn',
      price: 50000,
      title: 'Popcorn Salt (M)',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/Popcorn_Gabungan_Salt.jpg',
      quantity: 0,
      description: 'Popcorn Salt Medium',
      estimatedTime: '15 mins',
    },
    {
      type: 'popcorn',
      price: 25000,
      title: 'Popcorn Salt (S)',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/Popcorn_Gabungan_Salt.jpg',
      quantity: 0,
      description: 'Popcorn Salt Small',
      estimatedTime: '15 mins',
    },
    {
      type: 'fritters',
      price: 60000,
      title: 'Mamigor',
      imgUrl: 'https://web3.21cineplex.com/resizer/images/fnb/MAMIGOR_3.jpg',
      quantity: 0,
      description:
        'Perpaduan mac and cheese bites dengan mini pangsit goreng yang disajikan bersama dengan saus tomat dan sambal khas XXI Café',
      estimatedTime: '15 mins',
    },
    {
      type: 'fritters',
      price: 60000,
      title: 'French Fries (S) Combo XXI Java Tea',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/French_Fries_Combo_AB.jpg',
      quantity: 0,
      description:
        '1 French Fries (S)+ 1 Popcorn Salt (S) + 1 XXI Java Tea (S)',
      estimatedTime: '15 mins',
    },
    {
      type: 'light meal',
      price: 50000,
      title: 'The Original Hot Dog',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/fnb_group_2_Hot_Dog.jpg',
      quantity: 0,
      description: 'The Original Hot Dog',
      estimatedTime: '15 mins',
    },
    {
      type: 'light meal',
      price: 50000,
      title: 'Chicken Burger',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/fnb_group_2_Chicken_Burger.jpg',
      quantity: 0,
      description: 'Chicken Burger',
      estimatedTime: '15 mins',
    },
    {
      type: 'bakery & pastry',
      price: 38000,
      title: 'Croffle Original',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/packshot_croffle_ori.jpg',
      quantity: 0,
      description: 'Croffle Original',
      estimatedTime: '15 mins',
    },
    {
      type: 'bakery & pastry',
      price: 38000,
      title: 'Croffle Nutella',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/packshot_croffle_nutella.jpg',
      quantity: 0,
      description: 'Croffle Nutella',
      estimatedTime: '15 mins',
    },
    {
      type: 'drinks',
      price: 30000,
      title: 'Blue Ocean Fizz',
      imgUrl:
        'https://media.21cineplex.com/webcontent/gallery/pictures/167592864562856_240x360.jpg',
      quantity: 0,
      description:
        'Minuman soda kombinasi sirup Blue Lagoon dan Sprite yang menyegarkan dengan tambahan jeruk nipis, selasih, dan lychee jelly',
      estimatedTime: '15 mins',
    },
    {
      type: 'drinks',
      price: 50000,
      title: 'Orange Jasmine Tea',
      imgUrl:
        'https://web3.21cineplex.com/resizer/images/fnb/packshot_orange_jasmine_tea.jpg',
      quantity: 0,
      description:
        'Aroma teh bunga melati dengan potongan buah jeruk sunkist asli serta selasih yang sangat menyegarkan',
      estimatedTime: '15 mins',
    },
  ],
  all_review: [
    {
      date: 'March 12th, 2024',
      star: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere dui, vitae gravida mi. In non est eu ipsum scelerisque lacinia sit amet a odio. Nullam sollicitudin, risus in porta cursus, nisl odio viverra nunc, ac blandit ligula ex sed diam. Ut venenatis, lorem nec commodo mattis, libero nibh finibus dolor, a venenatis quam urna non nisl.',
      user: 'mtixuser1',
    },
    {
      date: 'March 13th, 2024',
      star: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere dui, vitae gravida mi. In non est eu ipsum scelerisque lacinia sit amet a odio. Nullam sollicitudin, risus in porta cursus, nisl odio viverra nunc, ac blandit ligula ex sed diam. Ut venenatis, lorem nec commodo mattis, libero nibh finibus dolor, a venenatis quam urna non nisl.',
      user: 'mtixuser2',
    },
    {
      date: 'March 14th, 2024',
      star: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere dui, vitae gravida mi. In non est eu ipsum scelerisque lacinia sit amet a odio. Nullam sollicitudin, risus in porta cursus, nisl odio viverra nunc, ac blandit ligula ex sed diam. Ut venenatis, lorem nec commodo mattis, libero nibh finibus dolor, a venenatis quam urna non nisl.',
      user: 'mtixuser3',
    },
  ],
  purchase_history: [
    {
      booking_code: 12512,
      selected_tickets: ['A1'],
      transaction_date: 'May 3rd 2024, 11:20 AM',
    },
  ],
  selected_history: {
    booking_code: 12512,
    selected_tickets: ['A1'],
    transaction_date: 'May 3rd 2024, 11:20 AM',
  },
  selected_seats: [],
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();
const keySuffix = '';

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key + keySuffix, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const keys = Object.keys(DeviceVariables);
    const entries = await AsyncStorage.multiGet(
      keySuffix ? keys.map(k => k + keySuffix) : keys
    );

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key_, value]) => {
      // Keys only have the suffix appended in storage; strip the key
      // after they are retrieved
      const key = keySuffix ? key_.replace(keySuffix, '') : key_;
      return [key, value ? tryParseJson(value) : DeviceVariables[key]];
    });

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        if (
          payload?.__env__ &&
          DeviceVariables.__env__ &&
          payload.__env__ !== DeviceVariables.__env__
        ) {
          console.log(
            `Publication Environment changed from ${payload.__env__} to ${DeviceVariables.__env__}. Refreshing variables`
          );
          dispatch({
            type: 'LOAD_FROM_ASYNC_STORAGE',
            payload: DeviceVariables,
          });
        } else {
          dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
        }
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
