import { useState } from "react"

export default function paginaArticulo(){
    const [numeroArticulo, setNumeroArticulo] =useState(1)
    
    return <>
        <head></head>
        <button onClick={()=>setNumeroArticulo(1)}>Articulo 1</button>
        <button>Articulo 2</button>
        <button>Articulo 3</button>
        <Article numberoArticulo={numeroArticulo}></Article>
    </>
}