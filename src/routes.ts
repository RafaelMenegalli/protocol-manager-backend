import { Router } from "express";

//CONTROLLERS
import { CreatePeopleController } from "./controllers/people/CreatePeopleController";
import { ListPeopleController } from "./controllers/people/ListPeopleController";
import { CreateDocumentController } from "./controllers/document/CreateDocumentController";
import { ListDocumentController } from "./controllers/document/ListDocumentController";
import { CreateProtocolController } from "./controllers/protocol/CreateProtocolController";
import { ListProtocolsController } from "./controllers/protocol/ListProtocolsController";
import { DeleteProtocolController } from "./controllers/protocol/DeleteProtocolController";

const router = Router()

//PEOPLE
router.post("/people", new CreatePeopleController().handle)
router.get("/peoples", new ListPeopleController().handle)

//DOCUMENT
router.post("/document", new CreateDocumentController().handle)
router.get("/documents", new ListDocumentController().handle)


//PROTOCOL
router.post("/protocol", new CreateProtocolController().handle)
router.get("/protocols",  new ListProtocolsController().handle)
router.delete("/protocol/:id", new DeleteProtocolController().handle)

export {
    router
}