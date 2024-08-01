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
exports.CreateProtocolController = void 0;
const CreateProtocolService_1 = require("../../services/protocol/CreateProtocolService");
class CreateProtocolController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, initial_date, final_date, partial_answer, right, people_id, document_id } = req.body;
                const createProtocolService = new CreateProtocolService_1.CreateProtocolService();
                const protocol = yield createProtocolService.execute({
                    name,
                    initial_date,
                    final_date,
                    partial_answer,
                    right,
                    people_id,
                    document_id
                });
                return res.status(200).json(protocol);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro no cadastro de protocolo ::::>> " + error });
            }
        });
    }
}
exports.CreateProtocolController = CreateProtocolController;
