import { createSlice } from "@reduxjs/toolkit";


export const issuetypeSlice = createSlice({
    name: 'issuetypes',
    initialState : [],
    reducers: {
        addIssueType: (state, action) =>{
            const newtype = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                type: action.payload.hierarchyLevel
            }
            state.data.push(newtype)
        }
    }
})

export const { addIssueType } = issuetypeSlice.actions;

export default issuetypeSlice.reducer;