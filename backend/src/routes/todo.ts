import { Router } from 'express';

const router = Router();

// In-memory todo list
let todos: { id: number; text: string }[] = [];
let nextId = 1;

// Get all todos

/**
 * @openapi
 * /api/todos:
 *   get:
 *     description: Get todos info
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo

/**
 * @openapi
 * /api/addtodos:
 *   post:
 *     description: Post todos info
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/api/addtodos', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });
  const todo = { id: nextId++, text };
  todos.push(todo);
  res.status(201).json(todo);
});

// Delete a todo
/**
 * @openapi
 * /api/deletetodos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     description: Delete a todo by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the todo to delete
 *     responses:
 *       204:
 *         description: Todo deleted successfully (no content)
 *       404:
 *         description: Todo not found
 */
router.delete('/api/deletetodos/:id', (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

export default router;