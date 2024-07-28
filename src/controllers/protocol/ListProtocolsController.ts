import { Request, Response } from "express";
import { ListProtocolsService } from "../../services/protocol/ListProtocolsService";

export class ListProtocolsController {
    async handle(req: Request, res: Response) {

        try {
            const listProtocolsService = new ListProtocolsService()

            const protocols = await listProtocolsService.execute()

            return res.status(200).json(protocols)
        } catch (error) {
            return res.status(500).json({ message: "Erro na listagem de protocolo" + error })
        }



    }
}