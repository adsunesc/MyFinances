import React, {useContext} from 'react';
import { Colors, IconButton } from 'react-native-paper';
import { Text, View, TouchableOpacity, Button } from "react-native-web";
import FinancesContext from "../context/FinancesContext";
import styles from "../css/Finances";

import axios from '../services/api';

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
                        onPress={() => navigation.navigate('FinanceForm', finance)}
                    />
                </View>
                <View style={styles.valor}>
                    <IconButton 
                        icon="trash-can-outline"
                        color={Colors.red500}
                        size={40}
                        onPress={() => {
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
                                console.log("Falha ao deletar a financia de id:" + user.id);
                            });
                        }}
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