import React, { useState } from "react";
import { useSelector } from "react-redux";
import IssuetypeForm from "./newtypecomponent";

import ToolBarComponent from "./toolbarcomponent";

export default function ProjectDisplay() {

    const [form, setForm] = useState(false)
    const projects = useSelector(state=>state.projects)

    function handleNewType(){
        setForm(!form)
    }


    return (
        <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
            <ToolBarComponent handleNewType={ handleNewType } />
            <div className="w-100 px-3">
                <table className="w-100" style={{ borderCollapse: "separate", borderSpacing: "0 1rem" }}>
                    <thead className="w-100">
                        <tr style={{ backgroundColor: "#dfd9e2", color: "#4c3853" }} >
                            <th className="py-2" style={{ width: "10%", paddingLeft: "16px" }}>id</th>
                            <th className="py-2" style={{ width: "30%", textAlign: "center" }}>name</th>
                            <th className="py-2" style={{ width: "30%", textAlign: "center" }}>type</th>
                            <th className="py-2" style={{ width: "15%", textAlign: "center" }}>avatar</th>
                            <th className="py-2" style={{ width: "15%", textAlign: "right", paddingRight: "16px" }}>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.length > 0 ?
                            projects.map((project)=>{
                                return <tr className="py-2" key={project.id}>
                                    <td className="ps-2" >{project.id}</td>
                                    <td className="text-center">{project.name}</td>
                                    <td className="text-center">{project.type}</td>
                                    <td className="text-center">
                                        <img style={{ width: "32px", height: "32px" }} src={project.avatar} alt={project.name}/>
                                    </td>
                                    <td></td>
                                </tr>
                            }):
                            null
                        }
                    </tbody>
                </table>
            </div>
            { form === true ? <IssuetypeForm handleNewType={ handleNewType } /> : null }
        </div>
    )
}