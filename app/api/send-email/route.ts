
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email, registrationId, qrCodeDataUrl } = await req.json();

  if (!email || !registrationId || !qrCodeDataUrl) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Configure the email transporter. 
  // IMPORTANT: Replace with your own email service provider's SMTP details.
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'hotmail', etc.
    auth: {
      user: 'easy.web.project.007@gmail.com', // Your email address
      pass: 'easyWebMorocco@007' // Your email password or an app-specific password
    }
  });

  const mailOptions = {
    from: 'easy.web.project.007@gmail.com', // Sender address
    to: email, // List of recipients
    subject: 'Your Event Registration QR Code', // Subject line
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h1 style="color: #5F0030;">Thank You for Registering!</h1>
        <p>We are excited to have you at our event. Please find your unique QR code below, which you will need for entry.</p>
        <img src="${qrCodeDataUrl}" alt="Your QR Code" style="width: 200px; height: 200px; margin-top: 20px;"/>
        <p style="margin-top: 20px;"><strong>Registration ID:</strong> ${registrationId}</p>
        <p style="font-size: 0.8em; color: #888; margin-top: 30px;">If you did not register for this event, please disregard this email.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
