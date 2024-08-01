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
exports.DetailsProtocolController = void 0;
const DetailsProtocolService_1 = require("../../services/protocol/DetailsProtocolService");
class DetailsProtocolController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                console.log({ id });
                const detailsProtocolService = new DetailsProtocolService_1.DetailsProtocolService();
                const protocol = yield detailsProtocolService.execute({ id });
                console.log({ protocol });
                return res.status(200).json(protocol);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro ao buscar detalhes do protocolo ::::>> ", error });
            }
        });
    }
}
exports.DetailsProtocolController = DetailsProtocolController;
