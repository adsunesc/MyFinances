import React, { StyleSheet } from 'react-native';

import Globais from '../config/Globais';

const cor_primaria = Globais.cor_primaria; 
const cor_secundaria = Globais.cor_secundaria; 
const cor_tercearia = Globais.cor_tercearia; 

const border_width = Globais.border_width;
const border_color = Globais.border_color;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: cor_secundaria,

        borderBottomWidth: border_width,
        borderBottomColor: border_color
    }
});

export default styles;