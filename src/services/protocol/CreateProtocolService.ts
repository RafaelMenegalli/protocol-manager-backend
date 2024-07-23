import prismaClient from "../../prisma";

interface CreateProtocolProps {
    name: string;
    initial_date: Date;
    final_date: Date;
    partial_answer: boolean;
    right: boolean;
    people_id: string;
    document_id: string;
}

export class CreateProtocolService {
    async execute({ name, initial_date, final_date, partial_answer, right, people_id, document_id }: CreateProtocolProps) {
        const protocolAlreadyExists = await prismaClient.protocol.findFirst({
            where: {
                name: name
            }
        })

        if (protocolAlreadyExists) {
            throw new Error("Esse protocolo já existe!")
        }


        const protocol = await prismaClient.protocol.create({
            data: {
                name: name,
                initial_date: initial_date,
                final_date: final_date,
                partial_answer: partial_answer,
                right: right,
                people_id: people_id,
                document_id: document_id
            }
        })

        return protocol
    }
}