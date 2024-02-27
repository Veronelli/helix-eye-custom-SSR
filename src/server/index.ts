import express from 'express';
import type { Express, Request, Response } from 'express';
import {config} from './config/index';

import { template } from './render/template';
import { render } from './render';

const app: Express = express();

app.use(express.static('dist'));

app.get("/",(req: Request,res: Response)=>{
    res.send(render(req.url))
})

app.listen(config.PORT,()=>{
    console.log("Listening on Port ", config.PORT )
})