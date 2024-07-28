import prismaClient from "../../prisma";

export class ListProtocolsService {
    async execute() {
        const response = await prismaClient.protocol.findMany()

        return response;
    }
}