import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { toggleFirstLogin } from "../utils/reducers/usersSlice";


export default function PasswordComponent(){

    const [data, setData] = useState({password: "", confirm: ""})
    const dispatch = useDispatch();

    function handleData(e){
        if (e.target.name === "userpass"){
            setData({
                ...data,
                password: e.target.value
            })
        }else if(e.target.name === "newpass") {
            setData({
                ...data,
                confirm: e.target.value
            })
        }
    }

    async function onFormSubmit(e){
        e.preventDefault();

        try{
            const changepass = await axios.put("https://issuetracker2.herokuapp.com/auth/change-password", {newpassword: data.password})
            if(changepass.status === 200){
                let newuser = JSON.parse(localStorage.getItem('user'))
                newuser.firstlogin = false
                localStorage.removeItem('user')
                localStorage.setItem("user", JSON.stringify(newuser))
                dispatch(toggleFirstLogin())
            }
        }catch(error){
            console.error(error)
        }
        

    }

    return(
        <div style={{ position: "relative", height: "calc( 100% - 64px )", overflow: "hidden" }} className="w-100 d-flex flex-column">
            <div className="w-100">
                <div className="d-flex flex-column align-items-center">
                    <h4>Change Password</h4>
                    <form onSubmit={(e)=>{ onFormSubmit(e) }}>
                        <div className="w-100 d-flex flex-column">
                            <div className="my-3">
                            </div>
                            <div className="my-3">
                                <div className="d-flex justify-content-start mb-1">
                                    <label htmlFor="#userpass">New Password</label> <br />
                                </div>
                                <input style={{ border: "none", width: "320px", padding: " 7px 0 7px 4px" }} type="password" name="userpass" id="userpass" value={data.password} onChange={(e)=>{ handleData(e) }} />
                            </div>
                            <div className="my-3">
                                <div className="d-flex justify-content-start mb-1">
                                    <label htmlFor="#newpass">Confirm Password</label> <br />
                                </div>
                                <input style={{ border: "none", width: "320px", padding: " 7px 0 7px 4px" }} type="password" name="newpass" id="newpass" value={data.confirm} onChange={(e)=>{ handleData(e) }} />
                            </div>
                            <div className="text-center">
                                <p style={{ fontSize: "10px", color: "#57405f" }}> passwords must be the same and at least 6 characters long </p>
                            </div>
                            
                            <div className="d-flex align-items-center gap-3 mt-3 pt-5">
                                {
                                    (data.password !== '' || data.confirm !== '') && (data.password.length > 5 || data.confirm.length > 5) && (data.password === data.confirm) ?
                                    <input className="py-2 px-5" style={{ border: "none", color: "#fff", backgroundColor: "#cb4e68", width: "320px", borderRadius: "8px" }} type="submit" name="submission" value="change password" />
                                    :
                                    <input className="py-2 px-5" style={{ border: "none", color: "#fff", backgroundColor: "#DEB8B7", width: "320px", borderRadius: "8px" }} type="submit" name="submission" value="change password" disabled />
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}