import { Request, Response } from "express";
import { CreateProtocolService } from "../../services/protocol/CreateProtocolService";

export class CreateProtocolController {
    async handle(req: Request, res: Response) {
        try {
            const { name, initial_date, final_date, partial_answer, right, people_id, document_id } = req.body;

            const createProtocolService = new CreateProtocolService()

            const protocol = await createProtocolService.execute({
                name,
                initial_date,
                final_date,
                partial_answer,
                right,
                people_id,
                document_id
            })

            return res.status(200).json(protocol)
        } catch (error) {
            return res.status(500).json({ message: "Erro no cadastro de protocolo ::::>> " + error })
        }
    }
}