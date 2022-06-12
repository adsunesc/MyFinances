import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';

import styles from '../css/Header';
import FinancesContext from '../context/FinancesContext';

import { Colors, IconButton } from 'react-native-paper';

export default function Header({ navigation }){
  const { dispatch } = useContext(FinancesContext);

  return (
    <View style={styles.container}>
      <IconButton
        style={style.buttonBack} 
        icon="account-arrow-left-outline"
        color={Colors.red500}
        size={60}
        onPress={() => {
            navigation.goBack();

            dispatch({
              type: 'logoutUser'
            });
        }} 
    />
      {/* <Mes mes={state.mesAnterior}/>
      <Mes mes={state.mesAtual}/>
      <Mes mes={state.mesPosterior}/> */}
    </View>
  )
};

const style = StyleSheet.create({
  buttonBack:{
      position: 'absolute',
      left: 8,
      top: -14
  },
})