const myHeaders = {
    "Content-Type": "application/json",
};
const nome = document.querySelector("form")
nome.addEventListener("submit",(event)=>{
    event.preventDefault()
    cadastrar()
})

async function cadastrar() {
    const inputProdutos = document.querySelector("#produtos")
    const inputValor = document.querySelector("#valor")
    const user = {
        produtos:inputProdutos.value,
        valor:inputValor.value
    }
    console.log(user)
    const bodyJson = JSON.stringify(user)
    const res = await fetch("http://localhost:3001/produtos", {

    headers: myHeaders,
    method: "POST",
    body: bodyJson
})
const produto=await res.json()
console.log(produto)

if (res.status == 201) {
    const resJson = await res.json()
    
    console.log(resJson)   
    if(resJson){
        window.location.replace("./home")
     }
} else {
   
}
console.log(res)
console.log("jjhsu")

const nome = document.querySelector("form")
nome.addEventListener("submit",(event)=>{
event.preventDefault()
cadastro()
})
}

 




    
    

