import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

export class DeleteProtocolService {
    async execute(id: string) {
        if (!id) {
            throw new Error("O ID é necessário para essa ação!");
        }

        try {
            const protocol = await prismaClient.protocol.delete({
                where: {
                    id: id
                }
            });

            return protocol;
        } catch (error) {
            // Tratamento de erro do Prisma
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                // Verifique o código de erro específico
                if (error.code === 'P2025') {
                    throw new Error("Protocolo não encontrado");
                }
            }
            // Re-lançar o erro se não for do Prisma ou um código específico
            throw error;
        }
    }
}
