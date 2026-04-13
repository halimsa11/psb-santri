import { Hono } from "hono";

const app = new Hono();

app.use('/*', serverstatic({root: './public'}));

app.get('./*', serverstatic({root: './public'}))

app.onError((err, c) => {
    console.error(`$(err)`);
    return c.json({error: 'internal server error'}, 500)
});

export default app;