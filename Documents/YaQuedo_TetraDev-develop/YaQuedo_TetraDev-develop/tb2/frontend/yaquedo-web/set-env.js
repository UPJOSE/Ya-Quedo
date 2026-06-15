const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src', 'environments', 'environment.ts');

const apiBaseUrl = process.env.API_BASE_URL || 'https://yaquedotetradev-production.up.railway.app';

const envFileContent = `export const environment = {
  production: true,
  apiBaseUrl: '${apiBaseUrl}'
};
`;

fs.writeFileSync(targetPath, envFileContent, 'utf8');
console.log('✅ Environment file generated with API_BASE_URL:', apiBaseUrl);
