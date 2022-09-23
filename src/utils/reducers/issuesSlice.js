import { createSlice } from "@reduxjs/toolkit";


export const issuesSlice = createSlice({
    name: 'issues',
    initialState : { data: [], formOn: false},
    reducers: {
        addIssue: (state, action) =>{
            const newissue = {
                id: action.payload._id,
                title: action.payload.title,
                description: action.payload.description,
                screenshot: action.payload.screenshot,
                project: action.payload.project,
                type: action.payload.type
            }
            state.data.push(newissue)
        },
        toggleFormOn: (state, action)=>{
            state.formOn = !state.formOn
        }
    }
})

export const { addIssue, toggleFormOn } = issuesSlice.actions;

export default issuesSlice.reducer;