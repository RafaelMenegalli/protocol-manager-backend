import { Request, Response } from "express";
import { UpdateProtocolService } from "../../services/protocol/UpdateProtocolService";

export class UpdateProtocolController {
    async handle(req: Request, res: Response) {

        try {
            const { id, name, initial_date, final_date, partial_answer, right, people_id, document_id } = req.body;

            // console.log({id})
            // console.log({name})
            // console.log({initial_date})
            // console.log({final_date})
            // console.log({partial_answer})
            // console.log({right})
            // console.log({people_id})
            // console.log({document_id})

            if (!id || !name || !initial_date || !final_date || !people_id || !document_id) {
                throw new Error("Todas as informações são obrigatórias!")
            }

            const updateProtocolService = new UpdateProtocolService()

            const protocol = await updateProtocolService.execute({ id, name, initial_date, final_date, partial_answer, right, people_id, document_id })

            return res.status(200).json(protocol)
        } catch (error) {
            return res.status(200).json({ message: "Erro na atualização de protocolo ::::>> " + error })
        }
    }
}