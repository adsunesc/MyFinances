import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Globais from '../config/Globais';
import FinancesContext from '../context/FinancesContext';

import axios from '../services/api';

import Header from './Header';
import FinancesList from './FinancesList';
import Footer from './Footer';

export default function Main({ navigation }){
    const { state, dispatch } = useContext(FinancesContext);

    useEffect(() => {
        function doData(){
            axios.get('/finances')
            .then((res) => {
                dispatch({
                    type: 'loadFinances',
                    payload: res.data,
                });  
            })
            .catch((err) => 
              console.log(err.data)
            );
        }
    
        doData();
    }, []);


    return(
        <View style={style.container}>
            <Header />
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