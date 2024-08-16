import { Router  } from "express";

const           router = Router()

//importers controllers
import { register,getall,registerevento ,registerparticipante,registerfeedback,getmaispopular,deleteevento,editarevento} from "../controllers/eventosrotas.js"

//localhost::3333/usuarios/register


router.post("/palestrantes", register)
router.get("/palestrantes", getall)

router.post("/criar", registerevento)
router.post("/participantes/registrar", registerparticipante)
// router.get("/agenda", getallgambiara   ) //carlos , sinto informar esssa merda é impossivel , namoral , isso aq ta impossivel!!!
//router.get("/eventos/inscrever", loginparticipante) 


router.post("/feedback", registerfeedback)
router.get("/mais-popular", getmaispopular)
router.delete("/cancelar/:id", deleteevento)
router.put("/editar", editarevento)

export default router;
