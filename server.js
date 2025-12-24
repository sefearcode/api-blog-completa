const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRoutes = require('./src/routes/auth');
const postsRoutes = require('./src/routes/posts');
const commentsRoutes = require('./src/routes/comments');
const categoriesRoutes = require('./src/routes/categories');
const dashboardRoutes = require('./src/routes/dashboard');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', postsRoutes);
app.use('/api', commentsRoutes);
app.use('/api', categoriesRoutes);
app.use('/api', dashboardRoutes);

app.listen(3000, () => {
  console.log('🚀 API Blog corriendo en http://localhost:3000');
});
