import prismaClient from "../../prisma";

interface UpdateProtocolProps {
    id: string;
    name: string;
    initial_date: Date;
    final_date: Date;
    partial_answer: boolean;
    right: boolean;
    people_id: string;
    document_id: string;
}

export class UpdateProtocolService {
    async execute({ id, name, initial_date, final_date, partial_answer, right, people_id, document_id }: UpdateProtocolProps){

        const newUpdatedAt = new Date()

        const protocol = await prismaClient.protocol.update({
            where: {
                id: id
            },
            data: {
                name: name,
                initial_date: initial_date,
                final_date: final_date,
                document_id: document_id,
                people_id: people_id,
                partial_answer: partial_answer,
                right: right,
                updatedAt: newUpdatedAt 
            }
        })

        return protocol;
    }
}