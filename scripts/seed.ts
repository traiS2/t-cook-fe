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

    console.log({ status });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
