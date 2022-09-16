import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./reducers/usersSlice";
import issuesSlice from "./reducers/issuesSlice";
import clientsSlice from "./reducers/clientsSlice";
import projectSlice from "./reducers/projectSlice";


export default configureStore({
    reducer: {
        client: clientsSlice,
        issues: issuesSlice,
        projects: projectSlice,
        user: usersSlice,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())