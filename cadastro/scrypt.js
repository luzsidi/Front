const myHeaders = {
    "Content-Type": "application/json",
};
const nome = document.querySelector("form")
nome.addEventListener("submit",(event)=>{
    event.preventDefault()
    cadastrar()
})

async function cadastrar() {
    const inputProdutos = document.querySelector("#produtos").value
    const inputValorInicial = document.querySelector("#valorInicial").value
    const inputValorFinal = document.querySelector("#valorFinal").value

    const info= {
        produtos:inputProdutos,
        valorInicial:inputValorInicial,
        valorFinal:inputValorFinal
    }
    console.log(info)
    const bodyJson = JSON.stringify(info)
    const res = await fetch("https://loja-doces.onrender.com/produtos", {

    headers: myHeaders,
    method: "POST",
    body:bodyJson
})
console.log(res)
console.log("jjhsu")


if (res.status == 201) {
    const resJson = await res.json()
    
    console.log(resJson)   
    if(resJson){
        window.location.replace("/home")
     }
} 



}

 




    
    

