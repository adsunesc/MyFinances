import React, { StyleSheet } from 'react-native';

import Globais from '../config/Globais';

const cor_primaria = Globais.cor_primaria; 
const cor_secundaria = Globais.cor_secundaria; 
const cor_tercearia = Globais.cor_tercearia; 

const font_size = Globais.font_size;
const font_color = Globais.font_color;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        margin: 10,
    },

    text: {
        fontSize: font_size,
        color: font_color,

        textAlign: 'center',
    }
});

export default styles;