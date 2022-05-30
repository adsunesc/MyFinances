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
        flex: 3,
        flexDirection: 'column',

        backgroundColor: cor_primaria,
    },
    
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor_secundaria,

        borderBottomWidth: border_width,
        borderBottomColor: border_color
    },

    form: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor: cor_tercearia,

    },

    input: {
        height: 80,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,

        margin: 10,

        textAlign: 'center',
        fontSize: 40,
    
        placeholderTextColor: 'black',
    },

    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor_secundaria,

        height: 400,

        borderTopWidth: border_width,
        borderTopColor: border_color
    },

    text: {
        fontSize: 60,
        color: font_color,

        textAlign: 'center',
    },
});

export default styles;