import React, { createContext, useReducer } from 'react';

const initialLoad = { };
const FinancesContext = createContext({});

const actions = {
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
    }
}

export const UsersProvider = props => {
    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state;
    }
    
    const [state, dispatch] = useReducer(reducer, initialLoad);
    
    return(
        <FinancesContext.Provider value={{
            state,
            dispatch
        }}>
            {props.children}
        </FinancesContext.Provider>
    )
}

export default FinancesContext;