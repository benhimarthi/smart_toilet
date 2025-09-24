import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const {
      fullName,
      email,
      phone,
      message,
    }: {
      fullName: string;
      email: string;
      phone?: string;
      message: string;
    } = body;

    const emailToBoss = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;padding:20px;background:#ffffff;color:#333;font-size:16px;line-height:1.6;">
        <h2 style="color:#222;margin-bottom:10px;">📥 New Contact Request</h2>
        <p>You have received a new message from the website <strong>Dreamaker Productions</strong>:</p>
        <table style="margin-top:15px;margin-bottom:15px;">
          <tr><td style="padding:4px 8px;"><strong>Full Name:</strong></td><td>${fullName}</td></tr>
          <tr><td style="padding:4px 8px;"><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td style="padding:4px 8px;"><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
        </table>
        <p><strong>Message:</strong></p>
        <blockquote style="margin:10px 0;padding:15px;background:#f8f8f8;border-left:4px solid #0070f3;">
          ${message}
        </blockquote>
        <p style="font-size:13px;color:#999;">This message was sent automatically from the contact form on the website.</p>
      </div>
    `;

    const emailToClient = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;padding:20px;background:#ffffff;color:#333;font-size:16px;line-height:1.6;">
        <h2 style="color:#0070f3;margin-bottom:10px;">Thank You for Reaching Out!</h2>
        <p>Dear ${fullName},</p>
        <p>Thank you for contacting <strong>Dreamaker Productions</strong>. We’ve received your message and will get back to you as soon as possible.</p>
        <p>Here’s a copy of your message:</p>
        <blockquote style="margin:10px 0;padding:15px;background:#f4f4f4;border-left:4px solid #0070f3;">
          ${message}
        </blockquote>
        <p>We appreciate your interest and look forward to speaking with you soon.</p>
        <p style="margin-top:25px;">Warm regards,<br/><strong>The Dreamaker Productions Team</strong></p>
      </div>
    `;

    // Email to boss
    await resend.emails.send({
      from: 'Dreamaker Productions <contact@dreamakerproductions.com>',
      to: ['dreamakerproductions@gmail.com'],
      subject: `📨 New Contact Request from ${fullName}`,
      html: emailToBoss,
      replyTo: email // ✅ correction ici
    });

    // Email to client (confirmation)
    await resend.emails.send({
      from: 'Dreamaker Productions <contact@dreamakerproductions.com>',
      to: [email],
      subject: '📩 Thank You for Contacting Dreamaker Productions',
      html: emailToClient
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    };
  }
};
