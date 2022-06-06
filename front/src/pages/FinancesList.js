import React, {useContext, useEffect, useState} from 'react';
import { View } from 'react-native';

import styles from '../css/FinancesCarrousel';
import FinancesContext from '../context/FinancesContext';

import Finance from '../components/Finance';

import axios from '../services/api';
import { FlatList } from 'react-native-web';
import FabBack from '../components/FabBack';

export default function FinancesList({ navigation }){
  const { state, dispatch } = useContext(FinancesContext);

  return (
    <View style={styles.container}>
        <FlatList
            data={state.finances}
            keyExtractor={finance => finance.id.toString()}
            renderItem={item => Finance(item, dispatch, navigation)}
        />
    </View>
  )
};
