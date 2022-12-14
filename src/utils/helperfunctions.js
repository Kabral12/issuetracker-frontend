import axios from 'axios';

// keep user in store after a page reload
function persistUser(props){
    const user = JSON.parse(localStorage.getItem("user"));
    props.logUser({usertype: user.usertype, userId: user.userId, firstlogin: user.firstlogin});
}

// get the location of the current page
function getLocation(criteria){
    let parts;
    if(criteria){
        parts = window.location.href.split(criteria);
    }else{
        parts = window.location.href.split("/");
    }
    return parts[parts.length -1]
}

// upload file to cloudinary
async function uploader(file){
    let uploadfile;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)

    try {
        const upload = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
        uploadfile = await upload.data.secure_url;
    } catch (err) {
        console.log(err);
    }
    
    return uploadfile;
}

function isAuthenticated(){
    return window.localStorage.getItem("user") && document.cookie.split("; ").find(item => item.startsWith("user"));
}

async function fetchData(location){
    
    try {
        const fetching = await axios({ url: `https://issuetracker2.herokuapp.com/api/v1/${location}`, method: "get"})
        if (fetching.status === 200){
            const data = await fetching.data
            return data
        }
    } catch (error) {
        console.error(error);
    }
}

function generatePassword(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    
    return password;
}


export { persistUser, getLocation, uploader, fetchData , isAuthenticated, generatePassword }; 