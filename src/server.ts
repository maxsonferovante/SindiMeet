import { app } from './app';

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});     // start listening on port 3000