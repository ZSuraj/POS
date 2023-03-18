import express  from "express";

import { getFullMenu } from "../controllers/menu.js";

const router = express.Router();

router.get('/get', getFullMenu)

export default router