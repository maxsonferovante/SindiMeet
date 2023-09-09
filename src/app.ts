import express from "express";

import { sindMeetRoutes } from './routes/sindMeetRoutes';

const app = express();

app.use(express.json());
app.use(sindMeetRoutes);

export { app };