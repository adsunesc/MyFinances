import React, { useContext, useRef } from 'react';

import styles from '../css/Mes';

import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import FinancesContext from '../context/FinancesContext';


export default function Mes({ mes }){
    const { doData, dispatch, getMesStr } = useContext(FinancesContext);

    function getMes(mes, value){
        console.log(mes);
        var new_date = moment(mes, "YYYY-MM-DD").add(value, 'months');
        console.log(new_date);

        var day = new_date.format('DD');
        var month = new_date.format('MM');
        var year = new_date.format('YYYY');

        var new_date = (year + "-" + month + "-"+ day);

        return new_date;
    }

    function handlePress(){
        var mesAtual = mes;
        var mesAnterior = getMes(mesAtual, -1);
        var mesPosterior = getMes(mesAtual, +1);
        
        dispatch({
            type: 'loadMeses',
            payload: {
                "mesAnterior" : mesAnterior,
                "mesAtual" : mesAtual,
                "mesPosterior" : mesPosterior
            }
        });  

        doData();
    }

    return(
        <TouchableOpacity style={styles.container}
            onPress={() => handlePress()}> 
            <Text style={styles.text}>{getMesStr(mes)}</Text>
        </TouchableOpacity>
    )
}