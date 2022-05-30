import React, { StyleSheet } from 'react-native';

import Globais from '../config/Globais';

const cor_primaria = Globais.cor_primaria; 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 40,

        width: 250,
        height: 100,

        textAlign: 'center',
        margin: 10,

        backgroundColor: cor_primaria,
    },

    text: {
        fontSize: 25,
        color: "white",

        textAlign: 'center',
    }
});

export default styles;