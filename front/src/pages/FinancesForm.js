import React, { useContext, useState } from 'react';
import { Text, StyleSheet} from 'react-native';
import { Button, Colors, IconButton } from 'react-native-paper';
import { TextInput, View } from 'react-native-web';

import axios from '../services/api';
import FinancesContext from '../context/FinancesContext';

import Globais from '../config/Globais';
import { color } from 'react-native-reanimated';

const cor_primaria = Globais.cor_primaria; 
const cor_secundaria = Globais.cor_secundaria; 
const cor_tercearia = Globais.cor_tercearia; 

const font_color = Globais.font_color; 
const font_size = Globais.font_size; 




export default ({route, navigation}) => {
    const [finance, setFinance] = useState(route.params ? route.params : []);
    const { dispatch } = useContext(FinancesContext);
   
    return (
        <View style={style.form}>
            <Text style={style.text}>Tipo</Text>
            <TextInput 
                style={style.input}            
                onChangeText={financesTipo => setFinance({...finance, financesTipo})}
                placeHolder="Informe o Tipo"
                value={route.params ? finance.financesTipo.id : finance.financesTipo}
            />
            <Text style={style.text}>Descricao</Text>
            <TextInput 
                style={style.input}            
                onChangeText={descricao => setFinance({...finance, descricao})}
                placeHolder="Informe a Descricao"
                value={finance.descricao}
            />
            <Text style={style.text}>Valor Parcela</Text>
            <TextInput 
                style={style.input}            
                onChangeText={valorParcela => setFinance({...finance, valorParcela})}
                placeHolder="Informe o Valor"
                value={finance.valorParcela}
            />
            {/* <Text>Parcelas</Text>
            <TextInput 
                style={style.input}            
                onChangeText={parcelas => setFinance({...finance, parcelas})}
                placeHolder="Quantidade de Parcelas"
                value={finance.parcelas}
            /> */}
            {/* <Text>Data Vencimento</Text>
            <TextInput 
                style={style.input}            
                onChangeText={dataVencimento => setFinance({...finance, dataVencimento})}
                placeHolder="Informe a Data Vencimento"
                value={finance.dataVencimento}
            /> */}
            <View style={style.buttonContainer}>
                <IconButton 
                    icon="check-circle-outline"
                    color={Colors.green400}
                    size={60}
                    onPress={() => {
                        if(finance.id){
                            axios.put('/finances', {
                                "id" : finance.id,
                                "tipo" :finance.financesTipo.id, 
                                "descricao" : finance.descricao,
                                "valorParcela" : finance.valorParcela,
                            }).then((response) => {
                                console.log(response.data);
                                dispatch({
                                    type: 'updateFinance',
                                    payload: response.data,
                                });
                            }).catch((response) => {
                                console.log(response);
                            });
                        } else {
                            axios.post('/finances', {
                                "tipo" : finance.financesTipo, 
                                "descricao" : finance.descricao,
                                "valorParcela" : finance.valorParcela,
                            }).then((response) => {
                                console.log(response.data);
                                dispatch({
                                    type: 'createFinance',
                                    payload: response.data,
                                });
                            }).catch((response) => {
                                console.log(response);
                            });
                        }

                        navigation.goBack();
                    }}
                />
               <IconButton 
                    icon="close-outline"
                    color={Colors.red500}
                    size={60}
                    onPress={() => {
                        navigation.goBack();
                    }} 
                />
            </View>
        </View>
    )

};

const style = StyleSheet.create({
    form: {
        flex: 1,
        padding: 20,
        backgroundColor: cor_primaria
    },
    input: {
        height: 70,
        borderColor: cor_secundaria,
        borderWidth: 5,
        marginBottom: 10,
        borderRadius: 80,

        backgroundColor: cor_primaria,
        paddingLeft: 40,

        color: font_color,
        fontSize: font_size
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button:{
        height: 40,
        width: 80 
    },
    text:{
        color: font_color,
        fontSize: font_size
    }
});