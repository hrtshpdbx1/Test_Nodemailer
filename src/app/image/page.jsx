import React from 'react'
import { getImg } from '@/lib/serverAction'

// On fait une requête, on va récupérer des données
// on le transforme en JS
// On fait un await donc on met la fonction en async

async function Image() {
    
const imgObject = await getImg()
console.log(imgObject)

    return (
        <div>
            <h1> une image</h1>
            
        </div>
    )
}

export default Image