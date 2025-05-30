import express, { Request, Response } from "express";

const app = express();

app.get("/", async (request: Request, response: Response) => {
  response.json({ message: "Hello World" });
});

app.listen(3333, () => console.log(`Server running on port 3333`));
