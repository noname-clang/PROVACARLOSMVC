import { Router  } from "express";

const           router = Router()

//importers controllers
import { register,getall,registerevento ,registerparticipante,loginparticipante} from "../controllers/eventosrotas.js"

//localhost::3333/usuarios/register


router.post("/palestrantes", register)
router.get("/palestrantes", getall)

router.post("/criar", registerevento)
router.post("/participantes/registrar", registerparticipante)
// router.get("/agenda", getallgambiara   ) //carlos , sinto informar esssa merda é impossivel , namoral , isso aq ta impossivel!!!
router.get("/eventos/inscrever", loginparticipante) 

export default router;
