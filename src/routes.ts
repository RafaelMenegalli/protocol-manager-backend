import { Router } from "express";

//CONTROLLERS
import { CreatePeopleController } from "./controllers/people/CreatePeopleController";
import { ListPeopleController } from "./controllers/people/ListPeopleController";
import { CreateDocumentController } from "./controllers/document/CreateDocumentController";
import { ListDocumentController } from "./controllers/document/ListDocumentController";
import { CreateProtocolController } from "./controllers/protocol/CreateProtocolController";

const router = Router()

//PEOPLE
router.post("/people", new CreatePeopleController().handle)
router.get("/peoples", new ListPeopleController().handle)

//DOCUMENT
router.post("/document", new CreateDocumentController().handle)
router.get("/documents", new ListDocumentController().handle)


//PROTOCOL
router.post("/protocol", new CreateProtocolController().handle)


export {
    router
}