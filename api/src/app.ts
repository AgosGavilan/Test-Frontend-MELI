import cookieParser from "cookie-parser";
import cors from "cors";
import express, {Application, NextFunction, Request, Response} from "express";
import morgan from "morgan";
import config from "../lib/config";
import router from "./routes/index";

const app: Application = express()
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'))

app.use(cors({
    origin: config.cors,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}))

app.use('/', router)

interface error {
    status: number;
    message: string
}

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || err
    console.error(err);
    res.status(status).send(message)
})

// app.get('/', (req: Request, res: Response) => {
//     res.send('las configuraciones funcionaron')
// })








export default app