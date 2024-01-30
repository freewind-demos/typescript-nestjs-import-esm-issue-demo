Typescript NestJS Import ESM Issue Demo
======================

如果引用的某个库(`get-port`)是以esm格式发布的，则nestjs当前无法访问它。目前最好做法是避开这样的库，如果一定要用，就得另外用个bundler来处理。

https://stackoverflow.com/questions/74830166/unable-to-import-esm-module-in-nestjs

```
npm i
npm start
```
