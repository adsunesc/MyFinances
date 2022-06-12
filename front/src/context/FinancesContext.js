// import moment from 'moment';
import React, { createContext, useReducer } from 'react';

import axios from '../services/api';

const initialLoad = { };
const FinancesContext = createContext({});

function getMesStr(data){
    data = moment(data, "YYYY-MM-DD");
    var mes = data.format('MM');
    var ano = data.format('YYYY');
    
    var mesStr = null;
    if(mes == "01") mesStr = "JANEIRO";
    if(mes == "02") mesStr = "FEVEREIRO";
    if(mes == "03") mesStr = "MARÇO";
    if(mes == "04") mesStr = "ABRIL";
    if(mes == "05") mesStr = "MAIO";
    if(mes == "06") mesStr = "JUNHO";
    if(mes == "07") mesStr = "JULHO";
    if(mes == "08") mesStr = "AGOSTO";
    if(mes == "09") mesStr = "SETEMBRO";
    if(mes == "10") mesStr = "OUTUBRO";
    if(mes == "11") mesStr = "NOVEMBRO";
    if(mes == "12") mesStr = "DEZEMBRO";
    
    mesStr = mesStr + " - " + ano;

    return mesStr;
}

const actions = {
    loadUser(state, action){
        const user = action.payload
        return{
            ...state,
            user: user
        }
    },  
    logoutUser(){
        return{
        }
    },   
    loadFinances(state, action){
        const finances = action.payload
        finances.map(fin => fin.show = false)
        return{
            ...state,
            finances: finances
        }
    },   
    createFinance(state, action){
        const finance = action.payload
        return{
            ...state,
            finances: [...state.finances, finance]
        }
    },
    updateFinance(state, action){
        const update = action.payload
        return{
            ...state,
            finances: state.finances.map(u => u.id == update.id ? update : u)
        }
    },
    deleteFinance(state, action){
        const id = action.payload
        return{
            ...state,
            finances: state.finances.filter(u => u.id !== id)
        }
    },
    showFinance(state, action){
        const finance = action.payload
        return{
            ...state,
            finances: state.finances.map(u => u.id == finance.id ? finance : u)
        }
    },
    loadMeses(state, action){
        const meses = action.payload
        
        return{
            ...state,
            mesAnterior: meses.mesAnterior,
            mesAtual: meses.mesAtual,
            mesPosterior: meses.mesPosterior
        }
    }
}

export const UsersProvider = props => {
    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state;
    }
    
    const [state, dispatch] = useReducer(reducer, initialLoad);
    
    function doData(){
        console.log(state.mesAtual);
        axios.post("/finances/usuario", {
            "id" : state.user.id,
            "dataVencimento" : state.mesAtual
        })
        .then((res) => {
            dispatch({
                type: 'loadFinances',
                payload: res.data
            });  
        })
        .catch((err) => 
          console.log(err.data)
        );
    }

    return(
        <FinancesContext.Provider value={{
            state,
            dispatch,
            getMesStr,
            doData
        }}>
            {props.children}
        </FinancesContext.Provider>
    )
}

export default FinancesContext;