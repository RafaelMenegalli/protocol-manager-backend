"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
//CONTROLLERS
const CreatePeopleController_1 = require("./controllers/people/CreatePeopleController");
const ListPeopleController_1 = require("./controllers/people/ListPeopleController");
const CreateDocumentController_1 = require("./controllers/document/CreateDocumentController");
const ListDocumentController_1 = require("./controllers/document/ListDocumentController");
const CreateProtocolController_1 = require("./controllers/protocol/CreateProtocolController");
const ListProtocolsController_1 = require("./controllers/protocol/ListProtocolsController");
const DeleteProtocolController_1 = require("./controllers/protocol/DeleteProtocolController");
const DetailsProtocolController_1 = require("./controllers/protocol/DetailsProtocolController");
const UpdateProtocolController_1 = require("./controllers/protocol/UpdateProtocolController");
const router = (0, express_1.Router)();
exports.router = router;
//PEOPLE
router.post("/people", new CreatePeopleController_1.CreatePeopleController().handle);
router.get("/peoples", new ListPeopleController_1.ListPeopleController().handle);
//DOCUMENT
router.post("/document", new CreateDocumentController_1.CreateDocumentController().handle);
router.get("/documents", new ListDocumentController_1.ListDocumentController().handle);
//PROTOCOL
router.post("/protocol", new CreateProtocolController_1.CreateProtocolController().handle);
router.get("/protocols", new ListProtocolsController_1.ListProtocolsController().handle);
router.delete("/protocol/:id", new DeleteProtocolController_1.DeleteProtocolController().handle);
router.get("/protocol/details/:id", new DetailsProtocolController_1.DetailsProtocolController().handle);
router.put("/protocol", new UpdateProtocolController_1.UpdateProtocolController().handle);
