import express from 'express';
import postRoutes from '../Server/Routes/post.routes.js'

const app = express();

//middleware
app.use(express.json())

app.use(postRoutes);
export default app;