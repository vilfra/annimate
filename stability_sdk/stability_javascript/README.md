## Get started

1. Fix the `token`-variable in `index.ts`.
2. Find out what variables we need to set in the `generation_pb.Request()`, read more here: https://github.com/Stability-AI/stability-sdk/blob/main/src/stability_sdk/client.py

## To get it running

Download Node and run:
```shell script
npm install
npx tsc
```

`npx tsc` compiles the TypeScript files to JavaScript and is put in the `build/`-folder. Run it by writing:
```shell script
node ./build/index.js
```