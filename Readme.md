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

# RUn the command for files
touch index.js app.js constants.js

# Run the command for directories
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

`.gitignore` -> <a href="https://mrkandreev.name/snippets/gitignore-generator/" target="_blank">gitignore builder</a>


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

***

### Code snippets
> [!IMPORTANT]\
> **Error Resolving**\
> By Providing the complete path in `import` method we can solve errors
> ```js
> import connectDB from "./db/index.js";
> //...
> 
> import { DB_NAME } from "../constants.js";
> //...
> ```

`src/db/index.js`
```js
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB connect FAILED ", error)
        process.exit(0)
    }
}

export default connectDB;
```

`src/index.js`
```js
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`\n Server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB Connection failed !!! ", err )
})
```

**Install dependencies**
```bash
npm i cookie-parser cors
```

`src/app.js`
```js
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


export { app }
```

`src/utils/ApiError.js`
```js
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }
```

`src/utils/ApiResponse.js`
```js
class ApiResponse {
    constructor(statusCode, data, message="success"){
        this.statusCode = statusCode,
        this.data = data,
        this.message = message,
        this.success = statusCode < 400
    }
}
```
> [!NOTE]\
> HTTP Responses\
> Check here for more information: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)