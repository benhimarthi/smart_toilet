// netlify/functions/newsletter.ts

import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';

export const handler = async (event: any) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ status: 'error', message: 'Méthode non autorisée' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const email = body.email;

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ status: 'error', message: 'Email manquant.' }),
      };
    }

    const dirPath = path.join(process.cwd(), 'data');
    const filePath = path.join(dirPath, 'newsletter.json');

    try {
      await mkdir(dirPath, { recursive: true }); // Crée le dossier s’il n’existe pas
    } catch (e) {}

    let existingData: string[] = [];

    try {
      const content = await readFile(filePath, 'utf8');
      existingData = JSON.parse(content);
    } catch (e) {
      // Si le fichier n’existe pas encore, on continue avec []
    }

    if (existingData.includes(email)) {
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'error', message: 'Email déjà inscrit.' }),
      };
    }

    existingData.push(email);
    await writeFile(filePath, JSON.stringify(existingData, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success', message: 'Inscription réussie !' }),
    };
  } catch (error) {
    console.error('Erreur API newsletter:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: 'Erreur interne serveur.' }),
    };
  }
};
