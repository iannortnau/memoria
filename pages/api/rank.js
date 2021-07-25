import {getSession} from "next-auth/client";
import {PrismaClient} from "@prisma/client";


export default async function handle(req, res) {
    const prisma = new PrismaClient();
    const session = await getSession({req});
    //console.log(session);

    if(!session){
        return  res.status(401).json("Não autorizado");
    }

    switch (req.method) {
        case 'GET':
            return getUsers();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function getUsers() {
        const user = await prisma.user.findMany({
            orderBy: [
                {
                    nivel: 'desc',
                },
                {
                    pontos: 'asc',
                },
            ],
        });

        return res.status(200).json(user);

    }
}
