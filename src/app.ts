import express from "express"
import userRoutes from "./routes/user.routes"

const app = express()
app.use(express.json())
app.use(userRoutes)
export default app