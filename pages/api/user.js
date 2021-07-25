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
            return getUserByEmail();
        case 'PUT':
            return updateUser();
        case 'POST':
            return postUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

   async function getUserByEmail() {
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        if(user === null){
            return res.status(200).json(false);
        }else {
            return res.status(200).json(true);
        }

    }

    async function updateUser() {
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });
        if(req.body.nivel > user.nivel || user.nivel == null){
            const updateUser = await prisma.user.update({
                where: {
                    email: session.user.email,
                },
                data: {
                    nivel: req.body.nivel,
                    pontos: req.body.pontos,
                },
            })
            return res.status(200).json(updateUser);
        }else if(req.body.nivel === user.nivel){
            if(req.body.pontos < user.pontos){
                const updateUser = await prisma.user.update({
                    where: {
                        email: session.user.email,
                    },
                    data: {
                        nivel: req.body.nivel,
                        pontos: req.body.pontos,
                    },
                })
                return res.status(200).json(updateUser);
            }else {
                return res.status(200).json("resultado anterior melhor");
            }
        }else {
            return res.status(200).json("resultado anterior melhor");
        }
    }


    async function postUser() {
        const user = await prisma.user.create({
            data: {
                email: session.user.email,
                nome: session.user.name,
            },
        });
        console.log(user);
        return res.status(200).json(user);
    }


}
