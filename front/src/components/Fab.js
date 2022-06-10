import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

const MyComponent = ({ navigation }) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          style={styles.fab}
          open={open}
          great
          icon={'playlist-plus'}
          actions={[
            {
              icon: 'plus',
              label: 'Entrada',
              small: false,
              onPress: () => navigation.navigate('FinancesForm', {"financesTipo" : 1}),
            },
            {
              icon: 'minus',
              label: 'Saida',
              small: false,
              onPress: () => navigation.navigate('FinancesForm', {"financesTipo" : 2}),
            },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
    </Provider>
  );
};


const styles = StyleSheet.create({
  fab: {
  },
})

export default MyComponent;