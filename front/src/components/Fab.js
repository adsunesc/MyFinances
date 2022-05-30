import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const Fab = ({ navigation }) => (
  <FAB
    style={styles.fab}
    great
    icon="plus"
    onPress={() => navigation.navigate('FinanceForm')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 20,
    bottom: 120,
  },
})

export default Fab;