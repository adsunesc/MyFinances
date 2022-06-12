import React, { useRef, useState, useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';

import FinancesContext from '../context/FinancesContext';

import axios from '../services/api'

import style from '../css/Main';

export default function LoginForm({ navigation }){
    const { dispatch } = useContext(FinancesContext);
    
    const login = useRef("fabiopb");
    const senha = useRef("1234");

    function setLogin(loginStr){
        login.current = loginStr
    }
    
    function setSenha(senhaStr){
        senha.current = senhaStr
    }

    const [erro, setErro] = useState([]);
    function loadLogin(){
        axios.post('/usuario/login', {
            "login" : login.current, 
            "senha" : senha.current
        }).then((response) => {
            dispatch({
                type: 'loadUser',
                payload: response.data,
            });
            navigation.navigate('Main')
        }).catch((response) => {
            console.log(response);
            setErro("Login ou Senha incorretos!");
        });
    }

    return(
        <View style={style.form}>
            <Text style={style.text}>Login</Text>
            <TextInput 
                style={style.input}            
                onChangeText={loginStr => setLogin(loginStr)}
                placeHolder="... Login"
            />

            <Text style={style.text}>Senha</Text>
            <TextInput 
                style={style.input}     
                secureTextEntry={true}       
                onChangeText={senhaStr => setSenha(senhaStr)}
                placeHolder="... Senha"
            />

            <TouchableOpacity style={style.buttonContainer}
                onPress={() => loadLogin()}
            >
                <IconButton 
                    icon="check-circle-outline"
                    color={Colors.lightGreen500}
                    size={60}
                />
                <Text style={style.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonContainer}
                onPress={() => {
                    navigation.navigate("Cadastro");
                }}
            >
                <IconButton 
                    icon="playlist-plus"
                    color={Colors.amber400}
                    size={60}
                />
                <Text style={style.buttonText}>Não tem acesso?</Text>
            </TouchableOpacity>

            <Text style={style.buttonText}>{erro}</Text>
        </View>
    );
};