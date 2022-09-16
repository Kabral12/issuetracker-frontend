import { createSlice } from "@reduxjs/toolkit";


export const clientsSlice = createSlice({
    name: 'clients',
    initialState : [],
    reducers: {
        addClient: (state, action) =>{
            const newclient = { id: action.payload.id, name: action.payload, 
                project: action.payload.project, email: action.payload.email, 
                organisation: action.payload.organisation, archived: action.payload.archived } 
            state.push(newclient);
        }
    }
})

export const { addClient } = clientsSlice.actions;

export default clientsSlice.reducer;