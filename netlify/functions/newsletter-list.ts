// netlify/functions/newsletter-list.ts

import path from 'path';
import fs from 'fs';

export const handler = async () => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'newsletter.json');

    let emails: string[] = [];

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      emails = JSON.parse(content);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ emails }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier newsletter:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: 'Erreur serveur.' }),
    };
  }
};
