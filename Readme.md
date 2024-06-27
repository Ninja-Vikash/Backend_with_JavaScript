## BACKEND SETUP 🚀

Welcome to this repo.<br/>
It will help to setup your backend in less time.

Reference : *Chai aur Code*

### Process
**Initialize as npm project**
```bash
npm init
```
**Create files for root**
```bash
touch .env .gitignore .prettierrc .prettierignore
```
**Create directory structure**<br/>
Run the commands one by one
```bash
mkdir public src

cd src

# directories for src
mkdir controllers db models middlewares routes utils
```

**Install dev dependencies**
```bash
npm i -D nodemon

npm i -D prettier
```

**Install dependencies**
```bash
npm i express dotenv mongoose
```

***
### File contents
`package.json`
```json
"type": "module",
```
```json
  "scripts": {
    "dev": "nodemon src/index.js"
  },
```

`.gitignore` -> 
[gitignore builder](https://mrkandreev.name/snippets/gitignore-generator/)


`.prettierrc`
```json
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
}
```

`.prettierignore`
```
/.vscode
/node_modules
./dist

*.env
.env
.env.*
```

### Config of environment variable
```js
import dotenv from "dotenv"

dotenv.config({
    path: "./env"
})
```
> [!WARNING]\
> This is not a valid method to use `import` syntax with `dotenv`
> 
> Let's config the `package.json` to use it as a experimental method\
> ```json
> "scripts": {
>   "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
> },
