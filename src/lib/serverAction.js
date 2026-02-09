// Création du serveur action avec "use server" --> un pont entre le client et le serveur
// comme ce n'est pas une page, cela ne va pas créer de problème d'architecture
"use server"

export async function getImg() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos/1")
    const imgObject = await res.json()
    return imgObject
}
// Une fois qu'on a cette structure, cette fonction juste et use server, on va pouvoir l'utiliser dans notre page, là où on a besoin de notre image.