// Express
import express from 'express';
const app = express();
import 'express-async-errors';

// Database
import connectDB from './db/connect.js';

//Routes
import authRoutes from './routes/authRoutes.js';
import jobsRoutes from  './routes/jobsRoutes.js';

// Middleware
import notFound from './middleware/not-found.js';
import errorHandler from './middleware/error-handler.js';

// Dotenv
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;



//routes
app.get('/', (req,res)=>{
console.log("ben er wel");
res.send("WELCOME");
});
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', jobsRoutes);



// middleware
app.use(notFound);
app.use(errorHandler);
app.use(express.json);

//port

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, ()=>{
            console.log(`Server listening on port ${port}`);
        });
    } catch (err) {
        console.log(err+ `  This is an error!`);
    }
};
start();