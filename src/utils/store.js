import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./reducers/usersSlice";
import issuesSlice from "./reducers/issuesSlice";
import clientsSlice from "./reducers/clientsSlice";
import projectSlice from "./reducers/projectSlice";
import issuetypeSlice from "./reducers/issuetypeSlice";


export default configureStore({
    reducer: {
        client: clientsSlice,
        issues: issuesSlice,
        projects: projectSlice,
        user: usersSlice,
        issuetype: issuetypeSlice,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())