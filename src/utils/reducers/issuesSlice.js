import { createSlice } from "@reduxjs/toolkit";


export const issuesSlice = createSlice({
    name: 'issues',
    initialState : { data: [], formOn: false},
    reducers: {
        addIssue: (state, action) =>{
            [...state, ...{
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                screenshot: action.payload.screenshot,
                project: action.payload.project,
                type: action.payload.type
            }]
        },
        toggleFormOn: (state, action)=>{
            state.formOn = !state.formOn
        },
        filterIssues: (state, action)=>{
            
        }
    }
})

export const { addIssue, toggleFormOn, filterIssues } = issuesSlice.actions;

export default issuesSlice.reducer;