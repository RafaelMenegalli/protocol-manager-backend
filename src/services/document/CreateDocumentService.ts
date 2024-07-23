import prismaClient from "../../prisma";

interface CreateDocumentProps {
    name: string;
}

export class CreateDocumentService {
    async execute({ name }: CreateDocumentProps) {
        if (!name) {
            throw new Error("Nome é um campo obrigatório!")
        }

        const document = await prismaClient.document.create({
            data: {
                name: name
            }
        })

        return document;
    }
}