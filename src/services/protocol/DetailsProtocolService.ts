import prismaClient from "../../prisma";

interface DetailsProtocolProps {
    id: string;
}

export class DetailsProtocolService {
    async execute({ id }: DetailsProtocolProps) {
        if(!id) {
            throw new Error("O ID é obrigatório para esta ação!")
        }

        console.log({ id })

        const protocol = await prismaClient.protocol.findFirst({
            where: {
                id: id
            }
        })

        console.log({protocol})

        return protocol;
    }
}