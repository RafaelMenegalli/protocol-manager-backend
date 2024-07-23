import prismaClient from "../../prisma";

interface CreatePeopleProps {
    name: string;
}

export class CreatePeopleService {
    async execute({ name }: CreatePeopleProps) {
        if (!name) {
            throw new Error("Nome é obrigatório")
        }

        const people = await prismaClient.people.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })

        return people;
    }
}