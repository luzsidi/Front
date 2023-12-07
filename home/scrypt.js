getProdutos()

async function getProdutos(){
    
    const res = await fetch(
        "http://localhost:3001/produtos"
       
    )
    const produtos = await res.json()
    console.log(produtos)
    produtos.forEach((item)=>{
        const ul = document.querySelector("ul")
        ul.insertAdjacentHTML("beforeend",`
        <li>${item.produtos}</li>`)
        

    })  
    const id1 = await res.json()
    produtos.forEach((item)=>{
        const ul = document.querySelector("ul")
        ul.insertAdjacentHTML("beforeend",`
        <li>${id1}</li>`)

    })  
    const Valor = await res.json()
    produtos.forEach((item)=>{
        const ul = document.querySelector("ul")
        ul.insertAdjacentHTML("beforeend",`
        <li>${"210,00"}</li>`)

    })

}       
        
    
         
    

         
            
            
    
            
          

        
        

        
        
       
    
   
