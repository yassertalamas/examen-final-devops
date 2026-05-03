const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Este log lo leerá el Stack ELK más tarde
  console.log(`[INFO] Solicitud exitosa recibida en: ${new Date().toISOString()}`);
  res.send('<h1>Hola Mundo - Proyecto Final DevOps</h1><p>Estado: Funcionando en Kubernetes local</p>');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});
