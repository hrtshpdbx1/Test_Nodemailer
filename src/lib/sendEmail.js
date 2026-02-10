// * Server action avec la logique d'envoi

"use server"
import nodemailer from "nodemailer";


export async function sendEmail(formData) {
    // Récupération des données du formulaire
    const lastname = formData.get("lastname");
    const forname = formData.get("forname");
    const email = formData.get("from");
    const message = formData.get("message");

    // Configuration 
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            // Données issues de process.env
            // 💡 process.env = objet interne de Node en lien avec .env.local
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Envoi du mail
        await transporter.sendMail({
            from: email,
            to: "lmoraldy.dev@gmail.com", 
            subject: `Nouveau message de ${forname} ${lastname}`,
            text: message,
            html: `<p><strong>Nom:</strong> ${lastname} ${forname}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        });

        return { success: true };
    } catch (error) {
        console.error("Erreur Nodemailer:", error);
        return { success: false };
    }
}