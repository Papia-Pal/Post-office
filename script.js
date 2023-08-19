let IP = "";
const URL = `https://ipinfo.io/${IP}?token=dc8f7c91c2dc17`;

async function getInfo(){
    try{
        const response = await fetch(URL);
        const result = await response.json();
        console.log(result);
        document.getElementById("address").innerText= result.ip;
    }
    catch(err){
        console.log("Fetching failed..!",err);
    }
}

getInfo();

document.getElementById('start-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "./user-Page/index1.html"
})
