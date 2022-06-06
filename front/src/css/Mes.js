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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: cor_secundaria,

        borderTopWidth: border_width,
        borderTopColor: border_color
    },
    text: {
        color: font_color,
        fontSize: font_size
    }
});

export default styles;