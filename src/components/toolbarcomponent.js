import { useSelector } from "react-redux";
import { getLocation } from "../utils/helperfunctions";


export default function ToolBarComponent({ setComplain, setClient, handleNewType }) {

    const usertype = useSelector((state)=> state.user.userType)
    const projects = useSelector(state=> state.projects)
    const clients = useSelector(state=> state.client)
    const issues = useSelector(state=> state.issues.data)

    return (
        <div className="d-flex justify-content-between py-3 px-3">
            <div className="d-flex align-items-center py-1 mt-3">
                <span className="d-flex px-3 py-1" style={{ border: "1px solid #4c3853", color: "#4c3853" }}>
                    Total: 
                    <span className="ps-2">
                        {
                            usertype === "admin" ?
                            (getLocation('dashboard') === "" | getLocation() === "clients" ? 
                            clients.length : getLocation() === "issues" ? 
                            issues.length : getLocation() === "projects" ? 
                            projects.length : 0):
                            (getLocation('dashboard') === "" | getLocation() === "issues" ?
                            issues.length : 0)
                        }
                    </span>
                </span>
            </div>
            <div className="d-flex align-items-center py-1 mt-3">
                {
                    usertype === "client" ?
                    <input type="button" value="Add Issue" className="btn px-3" style={{ backgroundColor: "#cb4e68", color: "#fff" }} onClick={ ()=>{ setComplain() } } />:
                    
                    (
                        getLocation('dashboard') === "" | getLocation() === "clients" ? 
                            <input type="button" value="Add Client" className="btn px-3" style={{ backgroundColor: "#cb4e68", color: "#fff" }} onClick={ ()=>{ setClient() } } />
                        :
                        getLocation() === "projects" ? 
                            <input type="button" value="Add IssueType" className="btn px-3" style={{ backgroundColor: "#cb4e68", color: "#fff" }} onClick={ ()=>{ handleNewType() } } />
                        : null
                    )
                }
            </div>
        </div>
    )
}