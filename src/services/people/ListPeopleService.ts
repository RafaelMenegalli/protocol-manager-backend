import prismaClient from "../../prisma";

export class ListPeopleService {
    async execute(){
        const peoples = await prismaClient.people.findMany()

        return peoples;
    }
}