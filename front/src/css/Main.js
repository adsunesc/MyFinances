import React, { StyleSheet } from 'react-native';

import Globais from '../config/Globais';

const cor_primaria = Globais.cor_primaria; 
const cor_secundaria = Globais.cor_secundaria; 
const cor_tercearia = Globais.cor_tercearia; 

const border_width = Globais.border_width;
const border_color = Globais.border_color;

const styles = StyleSheet.create({
    container: {
        flex: 8,
        flexDirection: 'column',
        
        backgroundColor: cor_primaria,
    }
  });

  export default styles;