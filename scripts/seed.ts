const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const category = await prisma.category.findMany();
    if (category.length === 0) {
        const resultCategory = await prisma.category.createMany({
            data: [
                { name: "Món ăn Nam Bộ" },
                { name: "Món ăn Bắc Bộ" },
                { name: "Món ăn Trung Bộ" },
                { name: "Món ăn Tây Nam Bộ" },
            ],
        });
        console.log(resultCategory);
    }

    const tag = await prisma.tag.findMany();
    if (tag.length === 0) {
        const resultTag = await prisma.tag.createMany({
            data: [{ name: "gà" }, { name: "chè" }, { name: "cơm" }],
        });
        console.log(resultTag);
    }
}

main()
    .catch((e) => {
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
