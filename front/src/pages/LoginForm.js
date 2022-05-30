import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';

import styles from '../css/Novo';
import axios from '../services/api';
import { useNavigation } from '@react-navigation/native';

const Novo = () => {
    const navigation = useNavigation();

    const [tipoStr, setTipoStr] = useState('');
    const [descricaoStr, setDescricao] = useState('');
    const [valorStr, setValor] = useState('');
    const [quantidadeStr, setQuantidade] = useState('');
    const [dataStr, setData] = useState('');

    const pressHandler = () => {
        var data = {
            "descricao": descricaoStr,
            "tipo": tipoStr,
            "totalParcela": quantidadeStr,
            "valorParcela": valorStr
        };

        console.log(data);
        axios.post('/finances', { data 
        })
        .then(function (response) {
            console.log(response);
            navigation.navigate('Main');
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const pressCancelHandler = () => {
        navigation.navigate('Main');
    }

    return (  
        <View style={styles.container} >
            <View style={styles.header} >
               <Text style={styles.text}>Inserir</Text>
            </View>

            <View style={styles.form} >
                <TextInput
                    style={styles.input}
                    placeholder="Tipo"
                    onChangeText={(text) => setTipoStr({text})}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descricao"
                    onChangeText={(text) => setDescricao({text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    onChangeText={(text) => setValor({text})}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Quantidade parcela"
                    onChangeText={(text) => setQuantidade({text})}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Data Vencimento"
                    onChangeText={(text) => setData({text})}
                />
            </View>
           
            <View style={styles.footer} >
                {/* <Botao nome={'Inserir'} onPress={pressHandler} />
                <Botao nome={'Cancelar'} onPress={pressCancelHandler} /> */}
            </View>
        </View>
    );
}
 
export default Novo;