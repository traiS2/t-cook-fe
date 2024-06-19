import { GetServerSidePropsContext } from "next";
import prisma from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: GetServerSidePropsContext) {
    try {
        const status = await prisma.status.findMany();
        return NextResponse.json(status);
    } catch (error) {
        console.error("Error retrieving roles:", error);
        return NextResponse.error();
    }
}
