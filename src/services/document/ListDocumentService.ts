import prismaClient from "../../prisma";

export class ListDocumentService {
    async execute() {
        const documents = await prismaClient.document.findMany()

        return documents;
    }
}