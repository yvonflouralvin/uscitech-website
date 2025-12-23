// app/api/inscription/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ⚠️ En prod, stocke ça dans des variables d'environnement (.env.local)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Ou ton serveur SMTP
  port: 587,
  secure: false,
  auth: {
    user: 'yvonflouralvin@gmail.com', 
    pass: 'ffmf vvas uitr pipt',
  },
});

// Liste temporaire en mémoire (⚠️ production => DB)
const inscriptions: any[] = [];

export async function POST(req: Request) {
  try {
    const data: any = await req.json();
    inscriptions.push(data);

    // --- Email confirmation Étudiant ---
    await transporter.sendMail({
      from: `"ASCITECH" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Confirmation de votre inscription",
      html: `
        <h2>Bonjour ${data.prenom} ${data.nom},</h2>
        <p>Votre inscription à <b>ASCITECH</b> pour l'année académique 2025-2026 a bien été reçue.</p>
        <p>Nous vous contacterons bientôt pour la suite du processus.</p>
        <br/>
        <p>Cordialement,<br/>ASCITECH</p>
      `,
    });

    // --- Email notification Admin ---
    await transporter.sendMail({
      from: `"ASCITECH Inscriptions" <${process.env.EMAIL_USER}>`,
      to: "laurent.mumposa@ascitech.ac.cd", // email principal admin
      cc: ["yvon.flour@ascitech.ac.cd", "junior.lubaki@uscitech.ac.cd", "gloria.makiese@ascitech.ac.cd"], // copie visible
    //   bcc: ["direction@ascitech.cd"], // copie cachée
      subject: `Nouvelle inscription - ${data.nom} ${data.postnom}`,
      html: `
        <h3>Nouvelle inscription reçue</h3>
        <p><b>Nom:</b> ${data.nom} ${data.postnom} ${data.prenom}</p>
        <p><b>Sexe:</b> ${data.sexe}</p>
        <p><b>Date de naissance:</b> ${data.naissance}</p>
        <p><b>Nationalité:</b> ${data.nationalite}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Téléphone:</b> ${data.contact}</p>
        <hr/>
        <p><b>École de provenance:</b> ${data.ecole} (${data.pourcentage}%)</p>
        <p><b>Email école:</b> ${data.emailEcole}, Tel: ${data.telEcole}</p>
        <hr/>
        <p><b>Nom du Père:</b> ${data.pereNom}, Tel: ${data.pereTel}, Email: ${data.pereEmail}</p>
        <p><b>Nom de la Mère:</b> ${data.mereNom}, Tel: ${data.mereTel}, Email: ${data.mereEmail}</p>
        <hr/>
        <p><b>Faculté (choix 1):</b> ${data.faculte1}, <b>Faculté (choix 2):</b> ${data.faculte2}</p>
        <p><b>Option (choix 1):</b> ${data.option1}, <b>Option (choix 2):</b> ${data.option2}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Inscription envoyée et emails transmis",
      total: inscriptions.length,
    });
  } catch (error: any) {
    console.error("Erreur API:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, inscriptions });
}