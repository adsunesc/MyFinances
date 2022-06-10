import React, { useRef, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';

import axios from '../services/api';

import FabBack from '../components/FabBack';

import style from '../css/Main';

export default function LoginForm({ navigation }){
    const login = useRef("");
    const email = useRef("");
    const senha = useRef("");
    const reSenha = useRef("");

    function setLogin(loginStr){
        console.log(loginStr);
        login.current = loginStr
    }
    
    function setEmail(emailStr){
        email.current = emailStr
    }
    
    function setSenha(senhaStr){
        senha.current = senhaStr
    }
    
    function setReSenha(reSenhaStr){
        reSenha.current = reSenhaStr
    }

    const [erro, setErro] = useState([]);
    function cadastrarUsuario(){
        var x = senha.current; 
        var y = reSenha.current; 

        if(x == y){
            axios.post('/usuario/cadastro', {
                "login" : login.current, 
                "email" : email.current,
                "senha" : senha.current
            }).then((response) => {
                navigation.navigate("Login");
            }).catch((response) => {
                console.log(response);
                setErro("Login ou Email já cadastrado!");
            });
        } else {
            setErro("Senhas não correspondem!");
        }
    }

    return(
        <View style={style.form}>
            <FabBack navigation={navigation}/>

            <Text style={style.text}>Login</Text>
            <TextInput 
                style={style.input}            
                onChangeText={loginStr => setLogin(loginStr)}
                placeHolder="... Login"
            />

            <Text style={style.text}>Email</Text>
            <TextInput 
                style={style.input}            
                onChangeText={emailStr => setEmail(emailStr)}
                placeHolder="... Email"
            />

            <Text style={style.text}>Senha</Text>
            <TextInput 
                style={style.input}         
                secureTextEntry={true}   
                onChangeText={senhaStr => setSenha(senhaStr)}
                placeHolder="... Senha"
            />
            
            <Text style={style.text}>Confirme a Senha</Text>
            <TextInput 
                style={style.input}   
                secureTextEntry={true}         
                onChangeText={reSenhaStr => setReSenha(reSenhaStr)}
                placeHolder="... Re-Senha"
            />

            <TouchableOpacity style={style.buttonContainer}
                onPress={() => cadastrarUsuario()}
            >
                <IconButton 
                    icon="check-circle-outline"
                    color={Colors.lightGreen500}
                    size={60}
                />
                <Text style={style.buttonText}>Registrar-se</Text>
            </TouchableOpacity>
            
            <Text style={style.buttonText}>{erro}</Text>
        </View>
    );
};