// async function getUsers(){
//     const res = await fetch("http://localhost:3001/users")
//     const resJson = await res.json()
//     console.log(resJson)
// }
// getUsers()
//import { toastify } from "./toastify.js"
const myHeaders = {
    "Content-Type": "application/json",
};

async function login() {
    const inputEmail = document.querySelector("#input-email")
    const inputPassword = document.querySelector("#input-password")
    const user = {
        email: inputEmail.value,
        password: inputPassword.value
    }
    console.log(user)
    const bodyJson = JSON.stringify(user)
    const res = await fetch(
        "http://localhost:3001/login",
        {

            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )
    if (res.status == 200) {
        const resJson = await res.json()
        //toastify("Ok, login efetuado com sucesso!", "ok")
        console.log(resJson)
    } else {
       // toastify("Email ou senha incorretos", "error")
    }
    console.log(res)
    console.log("judas")
    btnLogin.innerHTML = ""
    btnLogin.innerText = "Logar"

    if(resJson.accessToken){

     }
     window.location.replace("./cadastro")


}
const nome = document.querySelector("form")
nome.addEventListener("submit",(event)=>{
    event.preventDefault()
    login()
})
    
