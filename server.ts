import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// Vercel: MUST export function, not run a server
export default function handler(req: any, res: any) {
  const server = express();

  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('views', browserDistFolder);
  server.set('view engine', 'html');

  // Static browser assets
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // Angular SSR route handling
  server.get('*', (req2, res2, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req2;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }]
      })
      .then((html) => res2.send(html))
      .catch((err) => next(err));
  });

  return server(req, res); // Vercel handles the listener
}
