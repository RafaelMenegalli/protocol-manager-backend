import prismaClient from "../../prisma";

export class ListProtocolsService {
    async execute() {
        const response = await prismaClient.protocol.findMany({
            select: {
                id: true,
                name: true,
                document_id: true,
                initial_date: true,
                final_date: true,
                partial_answer: true,
                people_id: true,
                right: true
            }
        })

        return response;
    }
}