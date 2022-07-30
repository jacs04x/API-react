import express from 'express';
import postRoutes from '../Server/Routes/post.routes.js'
import fileUpload from 'express-fileupload';
const app = express();

//middleware
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

app.use(postRoutes);


export default app;