import { Router } from "express";

//CONTROLLERS
import { CreatePeopleController } from "./controllers/people/CreatePeopleController";
import { ListPeopleController } from "./controllers/people/ListPeopleController";

const router = Router()

router.post("/people", new CreatePeopleController().handle)
router.get("/peoples", new ListPeopleController().handle)

export {
    router
}