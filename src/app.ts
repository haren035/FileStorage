import express, { Request, Response } from 'express';
import dotenv from 'dotenv';





const app = express();


app.use('/', (req:Request, res:Response) => {
          res.send("Hello!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
          console.log(`The Server is running on port ${port}`);
})