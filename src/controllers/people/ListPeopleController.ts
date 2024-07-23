import { Request, Response } from "express";
import { ListPeopleService } from "../../services/people/ListPeopleService";

export class ListPeopleController {
    async handle(req: Request, res: Response) {
        try {
            const listPeople = new ListPeopleService()

            const peoples = await listPeople.execute()

            return res.status(200).json(peoples)
        } catch (error) {
            return res.status(500).json({ message: "Erro na listagem de usuário ::::>> " + error })
        }
    }
}