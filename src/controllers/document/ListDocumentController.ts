import { Request, Response } from "express";
import { ListDocumentService } from "../../services/document/ListDocumentService";

export class ListDocumentController {
    async handle(req: Request, res: Response) {
        try {
            const listDocumentService = new ListDocumentService()

            const documents = await listDocumentService.execute()

            return res.status(200).json(documents)
        } catch (error) {
            return res.status(500).json({ message: "Erro na listagem de documentos ::::>> " + error })
        }
    }
}