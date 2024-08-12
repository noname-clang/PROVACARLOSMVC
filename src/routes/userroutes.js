import { Router  } from "express";

const router = Router()

//importers controllers
import { register,getall } from "../controllers/eventosrotas.js"

//localhost::3333/usuarios/register


router.post("/palestrantes", register)
router.get("/palestrantes", getall)

export default router;
