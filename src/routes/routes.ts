import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', (context) => {
  context.response.status = 200;
  context.response.body = "Teste API"
});

export default router