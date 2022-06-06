import React, {useContext, useEffect, useRef} from 'react';
import { View, Text } from 'react-native';

import Fab from '../components/Fab';

import styles from '../css/Footer';
import FinancesContext from '../context/FinancesContext';
import { Avatar, Colors } from 'react-native-paper';

export default function Header({ navigation }){
  const { state } = useContext(FinancesContext);
  var bigDecimal = require('js-big-decimal');

  const entrada = useRef(bigDecimal.round(0, 2));
  const saida = useRef(bigDecimal.round(0, 2));
  const atual = useRef(bigDecimal.round(0, 2));

  function getSaldo(){
    entrada.current = bigDecimal.round(0, 2);
    saida.current = bigDecimal.round(0, 2);
    atual.current = bigDecimal.round(0, 2);

    state.finances.map(fin => {
      if(fin.financesTipo.id == 1){
        entrada.current = bigDecimal.add(entrada.current, fin.valorParcela);
        entrada.current = bigDecimal.round(entrada.current, 2);
      }
      
      if(fin.financesTipo.id == 2){
        saida.current = bigDecimal.add(saida.current, fin.valorParcela);
        saida.current = bigDecimal.round(saida.current, 2);
      }
    })
    
    atual.current = bigDecimal.subtract(entrada.current, saida.current);
    atual.current = bigDecimal.round(atual.current, 2);
  }
  
  if(state.finances){
    getSaldo();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerSaldo}>
        <Avatar.Icon size={50} color={Colors.white} icon="clipboard-arrow-up-outline" style={styles.teste}/>
        <Text style={styles.textSaldo}>R$ {entrada.current}</Text>
      </View>

      <View style={styles.containerSaldo}>
        <Avatar.Icon size={50} color={Colors.white} icon="clipboard-arrow-down-outline" style={styles.teste}/>
        <Text style={styles.textSaldo}>R$ {saida.current}</Text>
      </View>

      <View style={styles.containerSaldo}>
        <Avatar.Icon size={50} color={Colors.white} icon="clipboard-flow-outline" style={styles.teste}/>
        <Text style={styles.textSaldo}>R$ {atual.current}</Text>
      </View>
      <Fab navigation={navigation} />
    </View>
  )
};
