import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import HeaderComponent from "../components/headercomponent";
import SideBarComponent from "../components/sidebarcomponent";
import SettingsComponent from "../components/settingscomponent";
import IssuesDisplay from "../components/issuesdisplaycomponent";
import ClientDisplay from "../components/clientsdisplaycomponent";
import { fetchData, persistUser } from "../utils/helperfunctions";
import ProjectDisplay from "../components/projectsdisplaycomponent";
import { addProject } from "../utils/reducers/projectSlice";
import { addClient } from "../utils/reducers/clientsSlice";
import { addIssue } from "../utils/reducers/issuesSlice";
import { logUser } from "../utils/reducers/usersSlice";


class AdminPage extends React.Component {

    constructor(props){
        super(props);
    }

    async componentDidMount(){
        persistUser(this.props);
        await this.handleDataFetch();
;    }

    async handleDataFetch(){
        const newProjects = await fetchData("project");
        const newClients = await fetchData("client");
        const newIssues = await fetchData("issue");

        console.log(newClients);

        newIssues.issues.forEach(issue => {
            this.props.addIssue(issue)
        });
        newClients.clients.forEach(client =>{
            this.props.addClient(client)
        })
        newProjects.projects.forEach(project => {
            this.props.addProject(project);
        })
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
        addProject: (data)=> dispatch(addProject(data)),
        addClient: (data)=> dispatch(addClient(data)),
        addIssue: (data)=> dispatch(addIssue(data)),
    }
}

export default connect(null, mapDispatch)(AdminPage);