import React, {useContext, useEffect, useState} from 'react';
import { View } from 'react-native';

import styles from '../css/Main';
import FinancesContext from '../context/FinancesContext';

import Finance from '../components/Finance';

import axios from '../services/api';
import { FlatList } from 'react-native-web';

export default function FinancesList({ navigation }){
  const { state, dispatch } = useContext(FinancesContext);

  // useEffect(() => {
  //     function doData(){
  //         axios.get('/finances')
  //         .then((res) => {
  //             dispatch({
  //                 type: 'loadFinances',
  //                 payload: res.data,
  //             });  
  //         })
  //         .catch((err) => 
  //           console.log(err.data)
  //         );
  //     }
  
  //     doData();
  // }, []);

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
