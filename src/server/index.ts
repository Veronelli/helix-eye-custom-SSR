import express from 'express';
import type { Express, Request, Response } from 'express';
import {config} from './config/index';
import axios from 'axios';
import { template } from './render/template';
import { render } from './render';
import { Galaxies } from '../app/pages/Galaxies';

const app: Express = express();

app.use(express.static('dist'));

app.get("/galaxias", async(req: Request,res:Response)=>{
    try{
        const {data} = await axios.get("https://images-api.nasa.gov/search?q=galaxies")
        const initialProps = {
            galaxies: data.collection.items
        }
        res.send(render(req.url, initialProps));
    }
    catch(error){
        throw new Error("An error ocurred in /galaxies", error)
    }
})

app.get("/",(req: Request,res: Response)=>{
    res.send(render(req.url))
})

app.listen(config.PORT,()=>{
    console.log("Listening on Port ", config.PORT )
})