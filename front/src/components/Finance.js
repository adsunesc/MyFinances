import React, { useContext } from 'react';
import { Colors, IconButton } from 'react-native-paper';
import { Text, View, TouchableOpacity, Alert } from "react-native";

import styles from "../css/Finances";

import axios from '../services/api';

const showAlert = (finance, dispatch) =>
  Alert.alert(
    'Realmente deseja deletar essa Financia?',
    '',
    [
      {
        text: 'Ok',
        onPress: () => {
            var id = finance.id;
            axios.delete(`/finances/${id}`)
            .then((response) => {
                console.log(response);
                dispatch({
                    type: 'deleteFinance',
                    payload: response.data,
                });
            }).catch((response) => {
                console.log(response);
            });
        },
        style: 'ok',
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert('This alert was dismissed by tapping outside of the alert dialog.'),
    }
);


export default function getUserItem({ item: finance }, dispatch, navigation) {
    var bigDecimal = require('js-big-decimal');
    
    if(finance.show){
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => {
                    finance.show = !finance.show
                    dispatch({
                        type: 'showFinance',
                        payload: finance,
                    });
                }}
            >
                <View style={finance.financesTipo.id == 1 ? styles.statusEntrada : styles.statusSaida} />
                    
                <View style={styles.descricao}>
                    <IconButton 
                        icon="pencil-plus-outline"
                        color={Colors.white}
                        size={40}
                        onPress={() => navigation.navigate('FinancesForm', finance)}
                    />
                </View>
                <View style={styles.valor}>
                    <IconButton 
                        icon="trash-can-outline"
                        color={Colors.red500}
                        size={40}
                        onPress={() => showAlert(finance, dispatch)}
                    />
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => {
                    finance.show = !finance.show
                    dispatch({
                        type: 'showFinance',
                        payload: finance,
                    });
                }}
            >
                <View style={finance.financesTipo.id == 1 ? styles.statusEntrada : styles.statusSaida} />
                    
                <View style={styles.descricao}>
                    <Text style={styles.descricaoText}>{finance.descricao}</Text>
                </View>
                <View style={styles.valor}>
                    <Text style={styles.valorText}>R$ {bigDecimal.round(finance.valorParcela, 2)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}