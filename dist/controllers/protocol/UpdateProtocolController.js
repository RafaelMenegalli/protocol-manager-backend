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
exports.UpdateProtocolController = void 0;
const UpdateProtocolService_1 = require("../../services/protocol/UpdateProtocolService");
class UpdateProtocolController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, initial_date, final_date, partial_answer, right, people_id, document_id } = req.body;
                // console.log({id})
                // console.log({name})
                // console.log({initial_date})
                // console.log({final_date})
                // console.log({partial_answer})
                // console.log({right})
                // console.log({people_id})
                // console.log({document_id})
                if (!id || !name || !initial_date || !final_date || !people_id || !document_id) {
                    throw new Error("Todas as informações são obrigatórias!");
                }
                const updateProtocolService = new UpdateProtocolService_1.UpdateProtocolService();
                const protocol = yield updateProtocolService.execute({ id, name, initial_date, final_date, partial_answer, right, people_id, document_id });
                return res.status(200).json(protocol);
            }
            catch (error) {
                return res.status(200).json({ message: "Erro na atualização de protocolo ::::>> " + error });
            }
        });
    }
}
exports.UpdateProtocolController = UpdateProtocolController;
