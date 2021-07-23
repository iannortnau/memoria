import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
    switch (req.method) {
        case 'GET':
            return getUserByEmail();
        case 'PUT':
            return updateUser();
        case 'DELETE':
            return deleteUser();
        case 'SET':
            return setUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

   async function getUserByEmail() {
        const user = await prisma.user.findUnique({
            where: {
                email: req.query.email,
            },
        });
        console.log(user);
        return res.status(200).json(user);
    }

    function updateUser() {
        try {
            usersRepo.update(req.query.id, req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function deleteUser() {
        usersRepo.delete(req.query.id);
        return res.status(200).json({});
    }

    function setUser() {
        usersRepo.delete(req.query.id);
        return res.status(200).json({});
    }


}
