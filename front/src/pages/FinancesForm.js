import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Colors, IconButton } from 'react-native-paper';

import style from '../css/Main';

import axios from '../services/api';

import FinancesContext from '../context/FinancesContext';

export default ({route, navigation}) => {
    
    const [erro, setErro] = useState("");
    const [finance, setFinance] = useState(route.params ? route.params : []);
    const { state, dispatch } = useContext(FinancesContext);

    return (
        <View style={style.form}>
            <View style={style.viewStatus}>
                <Text style={style.textStatus}>{ finance.financesTipo == 1 ? "Entrada" : "Saida"}</Text>
                <View style={ finance.financesTipo == 1 ? style.viewStatusEntrada : style.viewStatusSaida} />
            </View>
            
            <Text style={style.text}>Descricao</Text>
            <TextInput 
                style={style.input}            
                onChangeText={descricao => setFinance({...finance, descricao})}
                placeHolder="Informe a Descricao"
                value={finance.descricao}
            />
            
            <Text style={style.text}>Valor</Text>
            <TextInput 
                style={style.input}            
                onChangeText={valorParcela => setFinance({...finance, valorParcela})}
                placeHolder="Informe o Valor"
                keyboardType="decimal-pad"
                value={finance.valorParcela ? finance.valorParcela.toString() : finance.valorParcela}
            />

            {/* <Text>Parcelas</Text>
            <TextInput 
                style={style.input}            
                onChangeText={parcelas => setFinance({...finance, parcelas})}
                placeHolder="Quantidade de Parcelas"
                value={finance.parcelas}
            />  */}

            {/* <Text>Data Vencimento</Text>
            <TextInput 
                style={style.input}            
                onChangeText={dataVencimento => setFinance({...finance, dataVencimento})}
                placeHolder="Informe a Data Vencimento"
                value={finance.dataVencimento}
            /> */}

            <View style={style.buttonView}>
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
                                "usuarioId" : state.user.id,
                                "valorParcela" : finance.valorParcela
                            }).then((response) => {
                                dispatch({
                                    type: 'updateFinance',
                                    payload: response.data,
                                });
                                navigation.goBack();
                            }).catch((response) => {
                                console.log(response);
                                setErro("Descrição ou valor invalido!");
                            });
                        } else {
                            console.log(finance);
                            axios.post('/finances', {
                                "tipo" : finance.financesTipo, 
                                "descricao" : finance.descricao,
                                "usuarioId" : state.user.id,
                                "valorParcela" : finance.valorParcela
                            }).then((response) => {
                                dispatch({
                                    type: 'createFinance',
                                    payload: response.data,
                                });
                                navigation.goBack();
                            }).catch((response) => {
                                console.log(response);
                                setErro("Descrição ou valor invalido!");
                            });
                        }
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
            <Text style={style.text}>{erro}</Text>
        </View>
    )

};