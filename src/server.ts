import {app} from './app.js';
const port=Number(process.env.PORT??3000);const server=app.listen(port,()=>console.log(`AI features API at http://localhost:${port}`));
for(const signal of ['SIGINT','SIGTERM'] as const)process.on(signal,()=>server.close(()=>process.exit(0)));
