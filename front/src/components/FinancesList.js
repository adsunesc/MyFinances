import React, {useContext} from 'react';
import { View, FlatList } from 'react-native';

import styles from '../css/FinancesList';

import FinancesContext from '../context/FinancesContext';
import Finance from './Finance';

import Fab from './Fab';

export default function FinancesList({ navigation }){
  const { state, dispatch } = useContext(FinancesContext);

  return (
    <View style={styles.container}>
        <FlatList
            data={state.finances}
            keyExtractor={finance => finance.id.toString()}
            renderItem={item => Finance(item, dispatch, navigation)}
        />
         <Fab navigation={navigation} />
    </View>
  )
};
