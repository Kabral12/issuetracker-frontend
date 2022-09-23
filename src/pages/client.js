import React from "react"
import { connect } from "react-redux"
import { Routes, Route } from "react-router-dom";

import HeaderComponent from "../components/headercomponent";
import SideBarComponent from "../components/sidebarcomponent";
import { logUser } from "../utils/reducers/usersSlice";
import { fetchData, persistUser } from "../utils/helperfunctions";
import SettingsComponent from "../components/settingscomponent";
import ClientIssues from "../components/issuescomponent";
import { addIssue } from "../utils/reducers/issuesSlice";
import { addIssueType } from "../utils/reducers/issuetypeSlice";


class ClientPage extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        persistUser(this.props);
        await this.handleDataFetch();
    }

    async handleDataFetch(){
        const newIssues = await fetchData("issue");
        const newIssueTypes = await fetchData("issue/type");

        newIssues.issues.forEach(issue => {
            this.props.addIssue({ _id: issue._id, title: issue.title, description: issue.description, screenshot: issue.screenshot })
        });

        newIssueTypes.issuetypes.forEach(issuetype =>{
            this.props.addIssueType(issuetype)
        })
    }

    render() {
        return (
            <div className="d-flex justify-content-between h-100">
                <SideBarComponent />
                <div className="h-100" style={{ backgroundColor: "#f5f6f7", width: "calc( 100% - 320px)" }}>
                    <HeaderComponent />
                    <Routes>
                        <Route index path="/" element={ <ClientIssues/> } />
                        <Route  path="issues" element={ <ClientIssues/> } />
                        <Route  path="settings" element={ <SettingsComponent/> } />
                    </Routes>
                    
                </div>
            </div>
        );
    }
}

const mapState = state => {
    return { issues: state.issues }
}

const mapDispatch = dispatch => {
    return {
        logUser: (data) => dispatch(logUser(data)),
        addIssue: (data) => dispatch(addIssue(data)),
        addIssueType: (data) => dispatch(addIssueType(data))
    }
}

export default connect(mapState, mapDispatch)(ClientPage);