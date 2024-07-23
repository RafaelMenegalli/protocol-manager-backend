import { Request, Response } from "express";
import { CreatePeopleService } from "../../services/people/CreatePeopleService";

export class CreatePeopleController {
    async handle(req: Request, res: Response) {
        try {
            const { name } = req.body;

            const createPeople = new CreatePeopleService()

            const people = await createPeople.execute({ name })

            return res.status(200).json(people)
        } catch (error) {
            return res.status(500).json({ message: "Erro no cadastro de people ::::>> " + error })
        }
    }
}