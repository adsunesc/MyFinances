import React, {useContext, useEffect, useState} from 'react';
import { View } from 'react-native';

import styles from '../css/Header';
import FinancesContext from '../context/FinancesContext';

import Mes from '../components/Mes';
import FabBack from '../components/FabBack';

export default function Header({ navigation }){
  const { state } = useContext(FinancesContext);

  return (
    <View style={styles.container}>
      <FabBack navigation={navigation}/>
      {/* <Mes mes={state.mesAnterior}/>
      <Mes mes={state.mesAtual}/>
      <Mes mes={state.mesPosterior}/> */}
    </View>
  )
};
