import { Tag, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const prisma = new PrismaClient();
    try {
        const tag: Tag[] = await prisma.tag.findMany();
        if (tag.length === 0) {
            return NextResponse.json(
                { message: "No category found" },
                { status: 404 }
            );
        }
        return Response.json(tag, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    } finally {
        prisma.$disconnect;
    }
}
