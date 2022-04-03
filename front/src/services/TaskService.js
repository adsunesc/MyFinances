import React from 'react';

export const getTasks = async (token) => {
    const response = await ApiAxios.get('/tasks', {
        Headers: {authorization: `Bearer ${token}`}
    })
    return response.data
};

export const postTasks = async ({token, title, descricao}) => {
    const status = 1
    const response = await ApiAxios.post('/tasks', {
        title, descricao, status
    }, {
        headers: {authorization: `Bearer ${token}`}
    })
    return response.data    
};
