const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const status = await prisma.status.createMany({
        data: [
            { name: "active" },
            { name: "inactive" },
            { name: "suspended" },
            { name: "pending" },
            { name: "banned" },
            { name: "closed" },
        ],
    });

    const roles = await prisma.role.createMany({
        data: [{ name: "admin" }, { name: "mod" }, { name: "user" }],
    });

    console.log({ status, roles });
}

main()
    .catch((e) => {
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
