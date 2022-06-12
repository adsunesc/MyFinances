import { StyleSheet } from 'react-native';

import Globais from '../config/Globais';

const cor_primaria = Globais.cor_primaria; 
const cor_secundaria = Globais.cor_secundaria; 
const cor_tercearia = Globais.cor_tercearia; 

const border_width = Globais.border_width;
const border_color = Globais.border_color;

const font_color = Globais.font_color;
const font_size = Globais.font_size;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 20,
        backgroundColor: cor_primaria,

        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 70,
        width: '100%',

        borderColor: cor_secundaria,
        borderWidth: 5,
        marginBottom: 10,
        borderRadius: 80,

        backgroundColor: cor_primaria,
        paddingLeft: 40,

        color: font_color,
        fontSize: font_size
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        backgroundColor: cor_secundaria,
        borderRadius: 50,
        
        height: 70,
        width: "80%",

        margin: 8
    },
    buttonText:{
        color: cor_tercearia,
        fontSize: 20
    },
    buttonBack:{
        position: 'absolute',
        margin: 16,
        left: 20,
        top: 10
    },
    text:{
        color: font_color,
        fontSize: font_size
    },
    textStatus:{
        color: font_color,
        fontSize: 55
    },
    viewStatus:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    viewStatusEntrada:{
        backgroundColor: "green",
        height: 20,
        width:600
    },
    viewStatusSaida:{
        backgroundColor: "red",
        height: 20,
        width: 600
    }
  });

  export default styles;