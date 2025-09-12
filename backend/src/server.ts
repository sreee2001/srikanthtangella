import express from 'express';
import cors from 'cors';
import aboutRouter from './routes/aboutme.js';
import educationRouter from './routes/education.js';
import experienceRouter from './routes/experience.js';
import projectsRouter from './routes/projects.js';
import contactmeRouter from './routes/contactme.js';


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

// In-memory todo list
let todos: { id: number; text: string }[] = [];
let nextId = 1;

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });
  const todo = { id: nextId++, text };
  todos.push(todo);
  res.status(201).json(todo);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});