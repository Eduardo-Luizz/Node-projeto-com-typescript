import express from 'express';
import { createCourse } from './routes';

const app = express();

// app.get("/", (request, response) => {
//   return response.json({ message: "Hello!" });
// })

app.get("/", createCourse); // Chamar rota sem ser pelo insomnia

app.listen(3333);