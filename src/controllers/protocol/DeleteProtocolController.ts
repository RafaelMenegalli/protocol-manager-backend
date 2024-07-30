import { Request, Response } from "express";
import { DeleteProtocolService } from "../../services/protocol/DeleteProtocolService";

export class DeleteProtocolController {
    async handle(req: Request, res: Response) {
        try {
            const id = req.params.id as string;

            console.log({id})

            const deleteProtocolService = new DeleteProtocolService()

            const protocol = await deleteProtocolService.execute(id)

            return res.status(200).json(protocol)
        } catch (error) {
            return res.status(500).json({ message: "Erro ao deletar protocolo :::>> " + error })
        }

    }
}