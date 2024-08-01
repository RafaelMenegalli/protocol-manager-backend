"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocumentController = void 0;
const CreateDocumentService_1 = require("../../services/document/CreateDocumentService");
class CreateDocumentController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const createDocumentService = new CreateDocumentService_1.CreateDocumentService();
                const document = yield createDocumentService.execute({ name });
                return res.status(200).json(document);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro no cadastro de do documento ::::>> " + error });
            }
        });
    }
}
exports.CreateDocumentController = CreateDocumentController;
