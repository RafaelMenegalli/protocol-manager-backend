import { Request, Response } from "express";
import { CreateDocumentService } from "../../services/document/CreateDocumentService";

export class CreateDocumentController {
    async handle(req: Request, res: Response) {
        try {
            const { name } = req.body;

            const createDocumentService = new CreateDocumentService()

            const document = await createDocumentService.execute({ name })

            return res.status(200).json(document)
        } catch (error) {
            return res.status(500).json({message: "Erro no cadastro de do documento ::::>> " + error})
        }
    }
}