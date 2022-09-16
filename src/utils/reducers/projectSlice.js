import { createSlice } from "@reduxjs/toolkit";


export const projectsSlice = createSlice({
    name: 'projects',
    initialState : [],
    reducers: {
        addProject: (state, action) =>{
            const newProject = [{
                id: action.payload.id,
                name: action.payload.name,
                type: action.payload.projectTypeKey,
                avatar: Object.values(action.payload.avatarUrls)[0]
            }]
            state.concat(newProject);
        }
    }
})

export const { addProject } = projectsSlice.actions;

export default projectsSlice.reducer;