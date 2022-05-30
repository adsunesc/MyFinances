import React, { StyleSheet } from 'react-native';

import Globais from '../config/Globais';

const cor_primaria = Globais.cor_primaria; 
const cor_secundaria = Globais.cor_secundaria; 
const cor_tercearia = Globais.cor_tercearia; 

const font_size = Globais.font_size;
const font_color = Globais.font_color;

const border_width = Globais.border_width;
const border_color = Globais.border_color;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        margin: 2,
        
        borderWidth: border_width,
        borderColor: border_color,
        backgroundColor: cor_secundaria,
    },

    statusEntrada: {
        flex: 1,
        height: 80,
        backgroundColor: 'green'
    },

    statusSaida: {
        flex: 1,
        height: 80,
        backgroundColor: 'red'
    },

    descricao: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    descricaoText: {
        color: font_color,
        fontSize: font_size
    },

    valor: {
        flex: 4,
        alignItems: 'center'
    },
    
    valorText: {
        color: font_color,
        fontSize: font_size
    },
});

export default styles;