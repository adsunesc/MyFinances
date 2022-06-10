import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Globais from '../config/Globais';

import FinancesContext from '../context/FinancesContext';
import axios from '../services/api';

import Header from '../components/Header';
import FinancesList from '../components/FinancesList';
import Footer from '../components/Footer';

// import MyDrawer from '../components/Menu';

// import moment from "moment";

export default function Main({ navigation }){
    const { state, dispatch } = useContext(FinancesContext);

    function getMes(mes, value){
        var new_date = moment(mes, "YYYY-DD-MM").add(value, 'months');

        var day = new_date.format('DD');
        var month = new_date.format('MM');
        var year = new_date.format('YYYY');

        var new_date = (year + "-" + month + "-"+ day);

        return new_date;
    }


    useEffect(() => {
        function doData(){
            axios.post("/finances/usuario", {
                "id" : state.user.id
                // "dataVencimento" : state.mesAtual ? state.mesAtual : "2022-06-05"
            })
            .then((res) => {
                dispatch({
                    type: 'loadFinances',
                    payload: res.data
                });  
            })
            .catch((err) => 
              console.log(err.data)
            );
        }
    
        // function doDataMes(){
        //     var mesAtual = state.mesAtual ? state.mesAtual : moment(new Date()).format("YYYY-MM-DD");
        //     var mesAnterior = getMes(mesAtual, -1);
        //     var mesPosterior = getMes(mesAtual, +1);
            
        //     dispatch({
        //         type: 'loadMeses',
        //         payload: {
        //             "mesAnterior" : mesAnterior,
        //             "mesAtual" : mesAtual,
        //             "mesPosterior" : mesPosterior
        //         }
        //     });  
        // }
        
        // doDataMes();
        doData();
    }, []);


    return(
        <View style={style.container}>
            <Header navigation={navigation} />
            <FinancesList navigation={navigation} />
            <Footer navigation={navigation} />
        </View>
      
    )
}

const cor_primaria = Globais.cor_primaria; 

const style = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        
        backgroundColor: cor_primaria,
    }
});