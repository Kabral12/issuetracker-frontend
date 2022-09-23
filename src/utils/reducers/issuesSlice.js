import { createSlice } from "@reduxjs/toolkit";


export const issuesSlice = createSlice({
    name: 'issues',
    initialState : { data: [], formOn: false},
    reducers: {
        addIssue: (state, action) =>{
            const newissue = {
                id: action.payload.fields.id,
                project: action.payload.fields.project.name,
                status: action.payload.fields.status.name,
                reporter: action.payload.fields.displayName,
                progress: action.payload.fields.progress,
                type: action.payload.fields.issuetype.name
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