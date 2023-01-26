import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(cors({
  origin: [process.env.CLIENT_URL],
  methods: ["GET", "POST", "DELETE", "PATCH"],
  credentials: true,
}));
app.get("/main", (req, res, next) => {
  res.status(200).send('Hello i am work')
});

const start = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(PORT, () => {
    console.log('i am work');
  });
}

start();