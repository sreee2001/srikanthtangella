import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import aboutRouter from './routes/aboutme.js';
import educationRouter from './routes/education.js';
import experienceRouter from './routes/experience.js';
import projectsRouter from './routes/projects.js';
import contactmeRouter from './routes/contactme.js';
import todoRouter from './routes/todo.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON bodies

// Use the imported routers
app.use(aboutRouter);
app.use(educationRouter);+
app.use(experienceRouter);
app.use(projectsRouter);
app.use(contactmeRouter);
app.use(todoRouter);

app.get('/', (req, res) => {
  res.json({
    availableEndpoints: [
      '/api/aboutme',
      '/api/education',
      '/api/experience',
      '/api/projects',
      '/api/contactme',
      '/api/todos'
    ]
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));