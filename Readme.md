## Complete JavaScript Backend Setup - Chai aur Code ☕

### Reference : <a href="https://www.youtube.com/@chaiaurcode" target="_blank">*Chai aur Code*</a>  💖<br/>

**YouTube**<br/>
<a href="https://youtu.be/7fjOw8ApZ1I?si=YvCPzVHbJr0-3KcZ" target="_blank">Complete Backend Developer course | Part 1</a> <br/>
<a href="https://youtu.be/8k-kK3tsJFY?si=BnhIulAJjI7XarBN" target="_blank">Complete Backend Developer course | Part 2</a>

**About**<br/>
This documentation is based on the *Complete JavaScript Backend Series* from the *Chai aur Code* YouTube Channel.<br/>
Thank you! **Hitesh Sir**, for providing us with such amazing content for free! 🙏✨

Checkout the videos for better explanation 👆

***
> [!NOTE]\
> **What is actually a Server? 🤔**<br/>
> Server is just a software to serve something.<br/>
> Server can be our phone or laptop.<br/>
> Server doesn't mean a big computer.
> 
> **Two major component in backend 🧩**</br>
> A Programming Language
> <div align="left">
> <img src="https://raw.githubusercontent.com/github/explore/master/topics/java/java.png" alt="Java Logo" height="40"> &nbsp;&nbsp;&nbsp;&nbsp;
> <img src="https://raw.githubusercontent.com/github/explore/master/topics/javascript/javascript.png" height="40px"> &nbsp;&nbsp;&nbsp;&nbsp;
> <img src="https://raw.githubusercontent.com/github/explore/master/topics/php/php.png" alt="PHP Logo" height="40"> &nbsp;&nbsp;&nbsp;&nbsp;
> <img src="https://raw.githubusercontent.com/github/explore/master/topics/cpp/cpp.png" alt="C++ Logo" height="40"> &nbsp;&nbsp;&nbsp;&nbsp;
> <img src="https://raw.githubusercontent.com/github/explore/master/topics/go/go.png" alt="Go Logo" height="40"> 
> </div>
> 
> <br/>
> A Database
> <div align="left">
> <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" alt="MongoDB Logo" height="40">
> <img src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" alt="MySQL Logo" height="40">
> <img src="https://raw.githubusercontent.com/github/explore/master/topics/postgresql/postgresql.png" alt="PostgreSQL Logo" height="40"> &nbsp;&nbsp;&nbsp;&nbsp;
> <img src="https://raw.githubusercontent.com/github/explore/master/topics/sqlite/sqlite.png" alt="SQLite Logo" height="40">
> </div>
> <br/>
> 
> **Use of backend** ⚒️\
> In backend we deals with either\
> `DATA` --> { `Array`, `String` & `Object` }\
> `FILE` --> { Image, Video & PDF }\
> `Third Party API`
>
>
> **Requirements** ⚙️\
> Code Editor 💻\
> **Visual Studio Code** (VS Code) is a free, open-source Integrated Development Environment (**IDE**) developed by **Microsoft**, offering features like **debugging**, **version control**, and extensions to support various programming languages.
>
> Download <a href="https://code.visualstudio.com/" target="_blank">**VS Code**</a> !
> 
> A JavaScript run time\
> `Node.js`, `Deno` or `Bun`\
> Install **`Node.js` in your machine.** Because without node js `npm` commands won't work.
> 
> Download <a href="" target="_blank">**Node.js**</a> !
>
> Confirm your installation
> ```bash
> node --version    # v20.15.0 or higher
> 
> npm --version     # 10.7.0 or higher
> ```

## Getting Started 🚀
Create a directory where you are going to set up your project.<br/>
For example `backend`

Drag it or open it using <a href="https://code.visualstudio.com/" target="_blank">**Visual Studio Code (VS Code)**</a><br/>


### Set up your backend environment with industry-level quality 🔥
**Initialize with npm**
```bash
npm init
```
It will ask some questions, answer them accordingly based upon your project.

**Create files in root directory**
```bash
touch .env .gitignore .prettierrc .prettierignore
```
**Create further directories and files**<br/>
Run the following commands one by one
```bash
mkdir public src

cd src

# Run the command for files
touch index.js app.js constants.js

# Run the command for directories
mkdir controllers db models middlewares routes utils
```

> [!IMPORTANT]
> ```bash
> mkdir folder1 folder2
> ```
> Won't work in Windows\
> For execute the command you can use `git-bash`\
> Or you can create them manually. 😁

**Install dev dependencies**
```bash
npm i -D nodemon

npm i -D prettier
```
> [!NOTE]\
> `Nodemon` used for hot reloading for every single change in files.\
> `Prettier` used to configure the formatting rules.\
> `-D` is a flag to save them as a dev dependency

Reference:  <a href="https://www.npmjs.com/package/prettier" target="_blank">**prettier**</a> | <a href="https://www.npmjs.com/package/nodemon" target="_blank">**nodemon**</a>


**Install dependencies**
```bash
npm i express dotenv mongoose
```

Reference: <a href="https://expressjs.com/" target="_blank">**express**</a> | <a href="https://www.npmjs.com/package/dotenv" target="_blank">**dotenv**</a> | <a href="https://www.npmjs.com/package/mongoose" target="_blank">**mongoose**</a>

***
### Code Updates 🤔
`package.json`
```json
"type": "module",
```
```json
"scripts": {
    "dev": "nodemon src/index.js"
},
```

`.gitignore` -> <a href="https://mrkandreev.name/snippets/gitignore-generator/#Node" target="_blank">gitignore builder</a>


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

`.env`
```js
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.cp5kxxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
CORS_ORIGIN=*
```
> [!IMPORTANT]\
> Don't include any special character in your password\
> eg. `@`, `&` etc

#### Config of environment variable
```js
import dotenv from "dotenv"

dotenv.config({
    path: "./env"
})
```
> [!WARNING]\
> This is not a valid method to use `import` syntax with `dotenv`
> 
> Let's config the `package.json` to use it as a experimental method
> ```json
> "scripts": {
>   "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
> },

***

### Code snippets
> [!IMPORTANT]\
> **Resolve errors**\
> By Providing the complete path in `import` method, which means with extensions. So then we can resolve errors
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
> [!NOTE]\
> `DB_NAME` is a constant variable
>
> `src/constants.js`
> ```js
> export const DB_NAME = "test"
> ```


`src/index.js`
```js
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

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

### Use of `middlewares`
`middlewares` are used modifying **request** and **response** objects, ending the request-response cycle and calling the next middleware function in the stack.<br/>

Remember this quotation: <pre>middleware be like "**kahin jane se phele mujhse mil kar jana**" 😁</pre>

Usually created with `use` keyword.
```js
app.use((err, req, res, next) => {
    // Some code to be executed  
});
```
> [!NOTE]\
> `middlewares` have 4 parameters
> 
> `err` The error object that was thrown or passed to the next function with an error argument.\
> `req` The request object.\
> `res` The response object.\
> `next` The next middleware function in the stack.

**Install dependencies**
```bash
npm i cookie-parser cors
```

Reference: <a href="https://www.npmjs.com/package/cookie-parser" target="_blank">**cookie-parser**</a> | <a href="https://www.npmjs.com/package/cors" target="_blank">**cors**</a>

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
***

#### `asyncHandler( )`
A utility is used for handling all requests and responses on every route<br/>
`src/utils/asyncHandler.js`
```js
const asyncHandler = (requestHandler)=> {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }
```
> [!IMPORTANT]\
> Save this utility\
> Reusuable method we will use it more often

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
> [!NOTE]\
> Custom API Error response is very useful for defining.\
> The error fields to appear.

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

export { ApiResponse }
```
HTTP statusCode Responses<br/>
Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank">**MDN**</a>

***

#### Data Modeling
`src/model/user.model.js`
```js
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({});

export const User = mongoose.model("User", userSchema);
```

> [!NOTE]\
> `user.model.js` helps to identify the file by its filename.\
> eg. the file is a model file. 🤓
>
> 
> In models we store data in the form of Schemas\
> For creating a **Schema** we use `new` keyword, Since Schema is a method which accepts an Object
> ```js
> import mongoose from "mongoose";
> 
> new mongoose.Schema({});
> ```
> Or we can import `Schema` object for creating Schema
> ```js
> import mongoose, { Schema } from "mongoose";
> 
> new Schema({});
> ```
> Store it in a variable and export it
> ```js
> import mongoose, { Schema } from "mongoose";
> 
> const userSchema = new Schema({});
> 
> export User = mongoose.model("User", userSchema);
> ```
> `mongoose.model("User", userSchema)` has two arguments: the **collection name** and the **schema type**.\
> In MongoDB, the collection name becomes lowercase and plural. For example, **User** becomes **users**.

#### How to create data fields?
We can simply create a data field as given.
```js
const userSchema = new Schema({
        username: String
})
```

But we will follow a best practice
```js
const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        }
})
```

Connection between two data models
```js
// User Data Model
const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }
})

export const User = mongoose.model("User", userSchema)
```
```js
// CartList Data Model
const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        default: 0
    }
})

const cartModel = Schema({
        username: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        products: [ productSchema ],
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"].
            default: "PENDING"
        }
}, { timestamps: true })

export const Cart = mongoose.model("Cart", cartModel)
```
> [!IMPORTANT]\
> When we connect two data models, we often use fields like type and ref to establish relationships between them
> ```js
> username: {
>     type: mongoose.Schema.Types.ObjectId,
>     ref: "User"
> },
> ```
> We want the **username** from the `User` model.\
> We need to use the `type` key to connect and the `ref` key\
> The `ref` key holds the value of the **collection name** of the parent data model.\
> Since the collection name of the parent is `User`, that is why we are referring to it in the child data model.
>
> ```js
> products: [ productSchema ],
> ```
> In products, we will use an `array` type because a user may purchase one or more products.
> ```js
> status: {
>     type: String,
>     enum: ["PENDING", "CANCELLED", "DELIVERED"].
>     default: "PENDING"
> }
> ```
> The `status` field has an `enum` key, which provides **constant** values to be chosen by users.
> ```js
> const cartModel = Schema({ }, { timestamps: true })
> ```
> In Mongoose, the schema constructor accepts a second object to enable `timestamps`\
> Which automatically adds `createdAt` and `updatedAt` fields to your schema to track document creation and modification times.

***

#### Mongoose Aggregation Pipelines
```bash
npm i mongoose-aggregate-paginate-v2
```

Reference: <a href="https://www.npmjs.com/package/mongoose-aggregate-paginate-v2" target="_blank">**mongoose-aggregate-paginate-v2**</a> | <a href="https://www.mongodb.com/docs/manual/core/aggregation-pipeline/" target="_blank">**mongoDB aggregation pipeline**</a>

`src/models/video.model.js`
```js
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// videoSchema code
// ...
// ...

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)
```
> [!NOTE]\
> `videoSchema.plugin(mongooseAggregatePaginate)` helps to write aggregation pipelines

#### Packages for encrypting data
```bash
npm i bcrypt jsonwebtoken
```
Reference: <a href="https://www.npmjs.com/package/bcrypt" target="_blank">**bcrypt**</a> | <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank">**jwt**</a>

`src/models/user.model.js`
```js
import bcrypt from "bcrypt";

// userSchema code
// ...
// ...

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)
```
> [!IMPORTANT]\
> `userSchema.pre("event", callbackfn())`\
> pre is a `hook` or `method` which accepts two values as: **Event** and a **CallBack_fn()**\
> Since bcrypting is a time consuming task. For safety we will use a **async** function in callback.\
> The callback function acts here as a middleware, So it must have `next()` flag to propagate to next node.\
> Similarly, we can create custom methods using the Schema
> ```js
> userSchema.methods.isPasswordCorrect = async function(){
>    // Custom method code...      
> }
> ```

> [!WARNING]\
> We can't use an arrow function here, because **arrow function doesn't have access of `this` keyword**.

#### JWT ( JsonWebTokens )
`generateAccessToken`
```js
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
```

`generateRefreshToken`
```js
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
```

> [!NOTE]\
> `jwt.sign({payload}, secret, {expiry})`\
> Refresh Token has less payload compare to Access Token.
> 
> Create environment variables for `ACCESS_TOKEN_SECRET`, `ACCESS_TOKEN_EXPIRY`, `REFRESH_TOKEN_SECRET` & `REFRESH_TOKEN_EXPIRY`

#### File Handling
We don't handle files in our local server instead we use third party services like **AWS** and **cloudinary**.

**Install dependencies**
```bash
npm i cloudinary multer
```

Reference: <a href="https://cloudinary.com/" target="_blank">**Cloudinary**</a> | <a href="https://www.npmjs.com/package/multer" target="_blank">**Multer**</a>

To upload files in cloudinary we use multer as a middleware.

`src/utils/cloudinary.js`
```js
import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=> {
    try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the uplaod operation got failed
        return null;
    }
}

export { uploadOnCloudinary }
```
> [!NOTE]\
> The code snippet is **Reusable**\
> Make sure you have created environment variables or not.

`src/middlewares/multer.middleware.js`
```js
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

export const upload = multer({ storage })    // ES6 Module `multer({ storage: storage })`
```
> [!IMPORTANT]\
> Create some directories as `public/temp`\
> To hold temporary files.

### `Controllers` and `Routes`

We will see on scroll down. How can we write controller's code effectively.

`src/controllers/user.controller.js`
```js
import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async (req, res) => {
    await res.status(200).json({
        message: "OK! Response received"
    })
} )

export { registerUser }
```
`src/routes/user.routes.js`
```js
import { Router } from "express"
import { registerUser } from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(registerUser)

export default router
```
> [!NOTE]\
> We will use `{ Router }` from "express"

**Update `app.js` file**
```js
// ...
// All middlewares
// ... 

// routes

import userRouter from "./routes/user.routes.js"

// routes declaration

app.use("/api/v1/users", userRouter)


export { app }
```
> [!IMPORTANT]\
> We will write all routes below the already created middlewares\
> Because we are going to use the route as a middleware.
>
> Now, We can test the response using **Postman**\
> `http://localhost:8000/api/v1/users/register`
> 
> It will give a response as
> ```json
> {
>    message: "OK! Response received"
> }
> ```
> On a `POST` request at the given URL.

#### How to write effective code for controllers ? 😎
If you want to create a controller which will handle all the user related functions like **login** or **signup**.

Think and write the **ALGORITHMS** for the controller, What you need in your controller and what you are going to do there.<br/>
For example:
```js
// ALGORITHMS

// get user details from frontend
// validation - not empty
// check if user already exists: username, email
// check for images, check for avatar
// upload them to cloudinary, avatar
// create user object - create entry in db
// remove password and refresh token field from response
// check for user creation
// return res
```

> [!IMPORTANT]\
> **Algorithms are nothing just steps**. 😁
>
> Algorithm helps to write the code in a order\
> If we write all the steps before writing the code.\
> It saves our lots of time because we know what is the next step.\
> We don't need to worry about the next step, what should be.

#### How to use `middlewares` in `Router` ?
`src/routes/user.routes.js`
```js
/*
    imports ...
*/
import { upload } from "../middlewares/multer.middleware.js"

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)
```

> [!IMPORTANT]\
> We will inject a middleware before reaching the route as\
> `router.route("/register").post(upload.fields([])), registerUser)`
> 
> In this case we are using multer as a middleware for file uploading on cloudinary\
> We have multiple options for uploading a file like `upload.single`  `upload.any`  `upload.array`\
> We are using here `upload.fields`
>
> The `upload.fields` method allows you to define multiple file fields in a single request.\
> This is useful when you need to upload more than one file field, each with its own set of rules.\
> Each field can have its own name and maximum count of files that can be uploaded.\
> This provides fine-grained control over the file upload process.

#### Lets rewrite the `user.controller` file
We will follow the Algorithm already written

**1. Get data from frontend**
```js
import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async (req, res) => {

    const { fullName, email, username, password } = req.body;

})

export { registerUser }
```
> [!NOTE]\
> Obviously! We don't have any frontend\
> That is why we are using POSTMAN for sending data
>
> To access data in backend
> Use `req.body`\
> Also, We can extract the data as
> ```js
> const { fullName, email, username, password } = req.body;
> ```
> For safety purpose must console the data for the clarity what we are getting.

**2. Validation for not empty fields**
```js
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"

const registerUser = asyncHandler( async (req, res) => {

    const { fullName, email, username, password } = req.body;

    if (
        [fullName, email, username, password].some((field)=> field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

})

export { registerUser }
```
> [!NOTE]\
> In the second step, we are checking for empty fields\
> If any throw an Error
>
> ```js
> if (
>     [fullName, email, username, password].some((field)=> field?.trim() === "")
> )
> ```
> The `some` method is used to check if any field in the array is empty.\
> It will return `true`.\
> Sometimes we don't sure, we have the value or not in that situation it is better to use optional chaining.\
> `field?.trim() === ""`\
> `?.` is the optional chaining operator in JavaScript.\
> It allows you to safely access properties or call methods on an object that might be `null` or `undefined`.\
> If field is `null` or `undefined`, the expression `field?.trim()` will return `undefined` instead of throwing an error.\
> `trim()` removes whitespaces
>
> Since, We have a custom **ApiError** utility for handling errors\
> Therefore, Just simply `import` it and pass two arguments as the **StatusCode** and **CustomMessage**
> ```js
> throw new ApiError(400, "All fields are required")
> ```
> `ApiError` is a class. `new` keyword is used to create new class object.

**3. Check user exist on not**
```js
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"

const registerUser = asyncHandler( async (req, res) => {

    const { fullName, email, username, password } = req.body;

    if (
        [fullName, email, username, password].some((field)=> field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exist")
    }

})

export { registerUser }
```
> [!NOTE]\
> For checking the user already exist or not in the database. We need a database call.\
> We have `user.model.js` file which is talking with database.\
> `import` it.\
> Remember our database is on another continent.\
> It will take time to connect, must use `await`\
> ```js
> const existedUser = await User.findOne({
>     $or: [{ username }, { email }]
> })
> ```
> `User.findOne()` is a method to find a document inside the collection.\
> To apply filters `$or: [{ username }, { email }]`\
> Checks if a user available with the username or email
>
> ```js
> if (existedUser) {
>     throw new ApiError(409, "User with email or username already exist")
> }
> ```
> Throwing custom error.

**4. Check images: Avatar is uploaded or not**
```js
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"

const registerUser = asyncHandler( async (req, res) => {

    const { fullName, email, username, password } = req.body;

    if (
        [fullName, email, username, password].some((field)=> field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

})

export { registerUser }
```
> [!NOTE]\
> Since, We are using multer as middleware.\
> Therefore, We get files from `req.files` as
> ```js
> const avatarLocalPath = req.files?.avatar[0]?.path;
> ```
> We are assuming that file path is stored in first element.\
> And for safety purpose, we will try to access it using optional chaining. `?.`\
> Similarly we are getting the local path of cover image.
> 
> ```js
> if (!avatarLocalPath) {
>     throw new ApiError(400, "Avatar file is required")
> }
> ```
> Lets check for avatar is uploaded or not. If avatar is not uploaded throw an error.

**5. Upload images on Cloudinary: Check avatar is uploaded or not**
```js
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler( async (req, res) => {

    const { fullName, email, username, password } = req.body;

    if (
        [fullName, email, username, password].some((field)=> field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

})

export { registerUser }
```
> [!NOTE]\
> For uploading images on **Cloudinary** we have already created utility file for this.\
> Uploading images may take time. Must `await` the method
> ```js
> const avatar = await uploadOnCloudinary(avatarLocalPath)
> ```
> And pass the local path of the images to the method
>
> Again check the avatar is uploaded or not in Cloudinary, If not uploaded throw an error.

**6. Create a user object in database**
```js
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler( async (req, res) => {

    const { fullName, email, username, password } = req.body;

    if (
        [fullName, email, username, password].some((field)=> field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

})

export { registerUser }
```
> [!NOTE]\
> Since, We are dealing with database.\
> We know that database is in another continent.\
> Then it will definitely take time to process so use `await`.
> `User.create({})` will create a new object in database.
> ```js
> const user = await User.create({
>     fullName,
>     avatar: avatar.url,
>     coverImage: coverImage?.url || "",
>     email,
>     password,
>     username: username.toLowerCase()
> })
> ```
> We are storing the avatar url given by **Cloudinary**\
> Similarly we are storing the cover image url but we will take it optionally because not required\
> Instead of use a blank string\
> We want to store **username** in lowercase that is why `username.toLowerCase()`

**7. Remove password and Refresh Token fields**
```js
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler( async (req, res) => {

    const { fullName, email, username, password } = req.body;

    if (
        [fullName, email, username, password].some((field)=> field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

})

export { registerUser }
```
> [!NOTE]\
> To check the user we again call the database
> `User.findById(user._id)` will look for the match\
> ```js
> const createdUser = await User.findById(user._id).select(
>     "-password -refreshToken"
> )
> ```
> We can chain it to select the object then we can remove password and refreshToken from the response object.\
> `select()` method uses a weird syntax I mean a string\
> Pass the name of fleids to remove from the response object using (-) sign as prefix.\
> 
> Now check again registered user is available or not?\
> If not available throw error response with status code 500 because this is server response error\

**8. Return response**

```js
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler( async (req, res) => {

    const { fullName, email, username, password } = req.body;

    if (
        [fullName, email, username, password].some((field)=> field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )

} )

export { registerUser }
```