import express from "express";
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js';
const app = express();

app.listen(3000);
app.use(express.json());


app.use('/api',employeesRoutes);
app.use(indexRoutes);
console.log('server running on port 3000');