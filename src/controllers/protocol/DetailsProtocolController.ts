import { Request, Response } from "express";
import { DetailsProtocolService } from "../../services/protocol/DetailsProtocolService";

export class DetailsProtocolController {
    async handle(req: Request, res: Response) {

        try {
            const id = req.params.id as string;

            const detailsProtocolService = new DetailsProtocolService()

        }
    }
}