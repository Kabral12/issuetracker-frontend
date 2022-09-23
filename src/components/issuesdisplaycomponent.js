import React, { useState } from "react";
import { useSelector } from "react-redux";
import client from "../pages/client";

import ToolBarComponent from "./toolbarcomponent";


export default function ClientIssuesDisplay() {

    const clientIssues = useSelector(state => state.issues.data );

    return (
        <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
            <ToolBarComponent />
            <div className="w-100 px-3">
                <table className="w-100">
                    <thead className="w-100">
                        <tr style={{ backgroundColor: "#dfd9e2", color: "#4c3853" }} >
                            <th className="py-2" style={{ width: "10%", paddingLeft: "16px" }}>id</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "center" }}>project</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "center" }}>status</th>
                            <th className="py-2" style={{ width: "15%", textAlign: "center" }}>reporter</th>
                            <th className="py-2" style={{ width: "15%", textAlign: "center" }}>issue type</th>
                            <th className="py-2" style={{ width: "20%", textAlign: "right", paddingRight: "16px" }}>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientIssues.length > 0 ?
                            clientIssues.map(issue => {
                                return <tr className="py-2" style={{ borderBottom: "1px solid #dccc" }} key={issue.id}>
                                        <td className="ps-2" ><p style={{ textAlign: "left", padding: "4px 0" }}>{issue.id}</p></td>
                                        <td className="ps-2" ><p style={{ textAlign: "center", padding: "4px 0" }}>{issue.project}</p></td>
                                        <td className="text-center"><p style={{ textAlign: "left", padding: "4px 0" }}>{issue.status}</p></td>
                                        <td className="text-center"><p style={{ textAlign: "left", padding: "4px 0" }}>{issue.reporter}</p></td>
                                        <td className="text-center"><p style={{ textAlign: "left", padding: "4px 0" }}>{issue.type}</p></td>
                                        <td></td>
                                        </tr>
                                
                            }): null
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}