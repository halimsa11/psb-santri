import { Hono } from "hono";

const app = new Hono();

app.use('/*', serverstatic({root: './public'}));