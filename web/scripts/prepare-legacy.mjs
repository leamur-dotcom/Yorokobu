import { mkdirSync, copyFileSync } from 'node:fs';

mkdirSync('public/antigua', { recursive: true });
copyFileSync('../public/index.html', 'public/antigua/index.html');
