import * as Koa from 'koa';
import * as Router from 'koa-router';
import bodyParser = require("koa-bodyparser");
import { sayHello, calculatePrice } from './calc';

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.get('/*', async (ctx) => {
    ctx.body = sayHello();
});

router.post('/feedback', async (ctx) => {
    console.log('Feedback received', ctx.request.body);
});

router.post('/order', async (ctx) => {
    if (ctx.request.body["prices"] || !ctx.request.body["quantities"]
        || !ctx.request.body["country"] || !ctx.request.body["reduction"]){
        ctx.throw(400);
    }

    if (ctx.request.body["quantities"] > 1) {
        ctx.throw(404);
    }


    return calculatePrice(ctx.request.body);
});

app.use(router.routes());

app.listen(8081);

console.log('Server running on port 8081');

