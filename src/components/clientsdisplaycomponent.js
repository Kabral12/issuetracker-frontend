import React, { useState } from "react";
import { useSelector } from "react-redux";

import NewClientForm from "./newclientformcomponent";
import PasswordComponent from "./passwordcomponent";
import ToolBarComponent from "./toolbarcomponent";


export default function ClientDisplay() {

    const [form, setForm] = useState(false);
    const clients = useSelector(state=>state.client)
    const firstlogin = useSelector(state=>state.user.firstlogin)

    function  handleNewClient( ){
        setForm(!form)
    }

    return (
        <>
        { 
            firstlogin ?
            <PasswordComponent /> :
            <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
                <ToolBarComponent setClient={handleNewClient} />
                <div className="w-100 px-3">
                    <table className="w-100">
                        <thead className="w-100">
                            <tr style={{ backgroundColor: "#dfd9e2", color: "#4c3853" }} >
                                <th className="py-2" style={{ width: "10%", paddingLeft: "16px" }}>id</th>
                                <th className="py-2" style={{ width: "15%", textAlign: "center" }}>name</th>
                                <th className="py-2" style={{ width: "15%", textAlign: "center" }}>assigned project</th>
                                <th className="py-2" style={{ width: "20%", textAlign: "center" }}>email</th>
                                <th className="py-2" style={{ width: "20%", textAlign: "center" }}>organisation</th>
                                <th className="py-2" style={{ width: "20%", textAlign: "right", paddingRight: "16px" }}>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clients.length > 0 ?
                                clients.map((client)=>{
                                    return <tr className="py-2" key={client.id}>
                                        <td className="ps-2" >{client.id}</td>
                                        <td className="ps-2" >{client.name}</td>
                                        <td className="text-center">{client.project}</td>
                                        <td className="text-center">{client.email}</td>
                                        <td className="text-center">
                                            {client.organisation}
                                        </td>
                                        <td></td>
                                    </tr>
                                }):
                                null
                            }
                        </tbody>
                    </table>
                </div>
                { form === true ? <NewClientForm setClient={ handleNewClient } /> : null }
            </div>
        }
        </>
    )
}