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
exports.CreatePeopleController = void 0;
const CreatePeopleService_1 = require("../../services/people/CreatePeopleService");
class CreatePeopleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const createPeople = new CreatePeopleService_1.CreatePeopleService();
                const people = yield createPeople.execute({ name });
                return res.status(200).json(people);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro no cadastro de people ::::>> " + error });
            }
        });
    }
}
exports.CreatePeopleController = CreatePeopleController;
