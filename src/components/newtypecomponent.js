import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function IssuetypeForm({ handleNewType }) {

    const [data, setData] = useState({name: "", description: "", type: "0"})
    
    async function handleSubmission(e){
        e.preventDefault();
        
        if (data.name && data.description && data.type ){
            const formdata = { name: data.name, description: data.description, type: Number(data.type) }
            const newissuetype = await axios.post('https://issuetracker2.herokuapp.com/api/v1/issue/type', formdata)
            if(newissuetype.status === 200){
                handleNewType();
            }
        }
    }

    function handleChange(e){
        if(e.target.name === "name"){
            setData({
                ...data,
                name: e.target.value
            })
        }else if (e.target.name === "description"){
            setData({
                ...data,
                description: e.target.value
            })
        }else if (e.target.name === "type"){
            setData({
                ...data,
                type: e.target.value
            })
        }
    }

    return (
        <div style={{ position: "absolute" }} className="w-100 h-100 p-3">
            <div style={{ width: "100%", height: "100%", paddingTop: "64px", backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="">
                <div className="mx-auto" style={{ position: 'relative', width: "80%", height: "100%", backgroundColor: "#fff", boxShadow: "2px 2px 6px #d9d9d9" }}>
                    <div className="w-100 px-5 py-3">
                        <h4 className="pb-3 ">Add An Issue Type</h4>
                        <form className="form w-100" onSubmit={ (e)=> { handleSubmission(e) }}>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#name">Name <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <input className="w-50" type="text" name="name" id="name" value={data.name} onChange={(e)=>{ handleChange(e) }} required/>
                            </div>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#mail">Description <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <textarea className="form-control" name="description" id="mail" cols="60" rows="3" value={data.description} onChange={(e)=>{ handleChange(e) }} ></textarea>
                                
                            </div>
                            <div className="form-group w-100 mb-3">
                                <label className="mb-2" htmlFor="#organ">type <span style={{ color: "#cb4e68" }}>*</span></label><br />
                                <select className="form-control" name="type" id="organ" value={data.type} onChange={(e)=>{ handleChange(e) }} >
                                    <option value="0" >Base</option>
                                    <option value="-1">Subtask</option>
                                </select>
                            </div>
                            
                            <div className="form-group mt-3 d-flex flex-column gap-3 align-items-end">
                                <input type="button" value="cancel" className="btn btn-outline-secondary px-5" onClick={ ()=> {handleNewType()}}  />
                                <input type="submit" value="proceed" className="btn px-5" style={{ backgroundColor: "#cb4e68", color: "#fff" }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}