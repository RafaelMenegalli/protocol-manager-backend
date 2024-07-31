import { Request, Response } from "express";
import { DetailsProtocolService } from "../../services/protocol/DetailsProtocolService";

export class DetailsProtocolController {
    async handle(req: Request, res: Response) {

        try {
            const id = req.params.id as string;

            console.log({ id })

            const detailsProtocolService = new DetailsProtocolService()

            const protocol = await detailsProtocolService.execute({ id })

            console.log({ protocol })

            return res.status(200).json(protocol)

        } catch (error) {
            return res.status(500).json({ message: "Erro ao buscar detalhes do protocolo ::::>> ", error })
        }
    }
}