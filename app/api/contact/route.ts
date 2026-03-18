import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: `Les Clés Vibratoires <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.CONTACT_EMAIL || "lesclesvibratoires@gmail.com"],
      replyTo: email,
      subject: `[Site Web] ${subject || "Nouveau message"} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #8B6F47; border-bottom: 2px solid #E8E0D6; padding-bottom: 12px;">
            Nouveau message depuis le site
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #3A2F25; width: 120px;">Nom</td>
              <td style="padding: 8px 12px; color: #7D7068;">${name}</td>
            </tr>
            <tr style="background: #FDFBF8;">
              <td style="padding: 8px 12px; font-weight: bold; color: #3A2F25;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}" style="color: #8B6F47;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #3A2F25;">Téléphone</td>
              <td style="padding: 8px 12px; color: #7D7068;">${phone}</td>
            </tr>` : ""}
            <tr style="background: #FDFBF8;">
              <td style="padding: 8px 12px; font-weight: bold; color: #3A2F25;">Sujet</td>
              <td style="padding: 8px 12px; color: #7D7068;">${subject || "Non précisé"}</td>
            </tr>
          </table>
          <div style="background: #FDFBF8; border-left: 3px solid #8B6F47; padding: 16px; margin-top: 16px; border-radius: 4px;">
            <p style="color: #3A2F25; font-weight: bold; margin: 0 0 8px;">Message :</p>
            <p style="color: #7D7068; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="color: #b0a89e; font-size: 12px; margin-top: 24px; text-align: center;">
            Ce message a été envoyé depuis le formulaire de contact du site Les Clés Vibratoires.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Erreur lors de l'envoi." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
