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
exports.DeleteProtocolController = void 0;
const DeleteProtocolService_1 = require("../../services/protocol/DeleteProtocolService");
class DeleteProtocolController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                console.log({ id });
                const deleteProtocolService = new DeleteProtocolService_1.DeleteProtocolService();
                const protocol = yield deleteProtocolService.execute(id);
                return res.status(200).json(protocol);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro ao deletar protocolo :::>> " + error });
            }
        });
    }
}
exports.DeleteProtocolController = DeleteProtocolController;
