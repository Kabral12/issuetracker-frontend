import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { logUser } from "../utils/reducers/usersSlice";
import HeaderComponent from "../components/headercomponent";
import SideBarComponent from "../components/sidebarcomponent";
import SettingsComponent from "../components/settingscomponent";
import IssuesDisplay from "../components/issuesdisplaycomponent";
import { persistUser, fetchData } from "../utils/helperfunctions";
import ClientDisplay from "../components/clientsdisplaycomponent";
import ProjectDisplay from "../components/projectsdisplaycomponent";
import { addProject } from "../utils/reducers/projectSlice";


class AdminPage extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        persistUser(this.props)
    }

    async handleDataFetch(){
        const projects = await fetchData('project');
        projects.values.forEach(project => {
            this.props.addProject(project)
        });

    }

    render() {
        return (
            <div className="d-flex justify-content-between h-100">
                <SideBarComponent />
                <div className="h-100" style={{ backgroundColor: "#f5f6f7", width: "calc( 100% - 320px)" }}>
                    <HeaderComponent />
                    <Routes>
                        <Route index element={ <ClientDisplay/> } />
                        <Route path="clients" element={ <ClientDisplay/> } />
                        <Route path="projects" element={ <ProjectDisplay/> } />
                        <Route path="issues" element={ <IssuesDisplay/> } />
                        <Route path="settings" element={ <SettingsComponent/> } />
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        logUser: (data)=> dispatch(logUser(data)),
        addProject: (data)=> dispatch(addProject(data))
    }
}

export default connect(null, mapDispatch)(AdminPage);