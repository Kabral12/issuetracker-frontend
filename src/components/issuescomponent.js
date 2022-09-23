import React, {useState} from "react";
import { useSelector } from "react-redux";
import IssueForm from "./issuesformcomponent";
import ToolBarComponent from "./toolbarcomponent";
import IssuesDisplay from "./clientissuescomponent";
import PasswordComponent from "./passwordcomponent";


export default function ClientIssues() {
    const [complain, setComplain] = useState(false);
    const firstlogin = useSelector(state => state.user.firstlogin)

    function toggleComplain(){
        setComplain(!complain)
    }
    
    return (
        <>
        {
            firstlogin ?
            <PasswordComponent/> :
            <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
                <ToolBarComponent setComplain={toggleComplain} />
                <div className="w-100 px-3">
                    <IssuesDisplay/>
                </div>
                {complain === true ? <IssueForm setComplain={toggleComplain} /> : null}
            </div>
        }
        </>
    )
}