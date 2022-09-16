import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ToolBarComponent from "./toolbarcomponent";
import { fetchData } from "../utils/helperfunctions";
import {addProject} from "../utils/reducers/projectSlice";

export default function ProjectDisplay() {

    const projects = useSelector(state=>state.projects)
    const dispatch = useDispatch();

    useEffect(()=>{
        handleDataFetch().then().catch(err=>{
            console.log(err);
        })
    })

    async function handleDataFetch(){
        const projects = await fetchData('project');
        projects.forEach(project => {
            dispatch(addProject(project))
        });

    }

    return (
        <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
            <ToolBarComponent />
            <div className="w-100 px-3">
                <table className="w-100">
                    <thead className="w-100">
                        <tr style={{ backgroundColor: "#dfd9e2", color: "#4c3853" }} >
                            <th className="py-2" style={{ width: "10%", paddingLeft: "16px" }}>id</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "center" }}>name</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "center" }}>type</th>
                            <th className="py-2" style={{ width: "30%", textAlign: "center" }}>avatar</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "right", paddingRight: "16px" }}>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project)=>{
                                return <tr key={project.id}>
                                    <td>{project.id}</td>
                                    <td>{project.name}</td>
                                    <td>{project.type}</td>
                                    <td>{project.avatar}</td>
                                    <td></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}