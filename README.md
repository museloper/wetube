## 시작

```bash
$ git init
$ git remote add origin https://github.com/museloper/wetube.git

$ npm init

$ npm i express

$ npm i @babel/core -D
$ npm i @babel/preset-env -D
$ npm i @babel/node -D

$ npm i nodemon -D
```

<br />

## `package.json`

> 작성

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

<br />

> 사용

```bash
$ npm run start
```

<br />

## `babel.config.json`

> 작성

```json
{
  "presets": ["@babel/preset-env"]
}
```
