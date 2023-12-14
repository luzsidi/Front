getProdutos()

async function getProdutos(){
    
    const res = await fetch(
        "https://loja-doces.onrender.com/produtos"
       
    )
    const produtos = await res.json()
    console.log(produtos)
      
    // const id = await res.json()
    produtos.forEach((item)=>{
        console.log(item)
        const ul = document.querySelector("ul")
        ul.insertAdjacentHTML("beforeend",`
        <li>${item.produtos}
            <p> Valor inicial: R$ ${item.valorInicial}</p>
            
            </li>`)
        console.log(item)
        ul.insertAdjacentHTML("beforeend",`
        <li>${item.produtos}
            <p> Valor final: R$ ${item.valorFinal}</p>
            
        </li>`)
        
        

    })  
    // const Valor = await res.json()
    // produtos.forEach((item)=>{
    //     const ul = document.querySelector("ul")
    //     ul.insertAdjacentHTML("beforeend",`
    //     <li>${"210,00"}</li>`)
    // })
    //     // const ValorInicial = await res.json()
    //     produtos.forEach((item)=>{
    //         const ul = document.querySelector("ul")
    //         ul.insertAdjacentHTML("beforeend",`
    //         <li>${"80,00"}</li>`)
    //     })
    //         // const ValorFinal = await res.json()
    //         produtos.forEach((item)=>{
    //             const ul = document.querySelector("ul")
    //             ul.insertAdjacentHTML("beforeend",`
    //             <li>${"210,00"}</li>`)
    //        })
        }        
    
    

      
        
    
         
    

         
            
            
    
            
          

        
        

        
        
       
    
   
