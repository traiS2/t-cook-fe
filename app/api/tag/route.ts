import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface Tag {
  id: number;
  name: string;
}

export async function GET() {
  try {
    const cookieStore = cookies();
    const jwtCookie = cookieStore.get("t-cook");
    const res = await fetch(process.env.DATA_API_KEY_BE + "/api/tag/get-all-tags", {
      cache: "no-store",
      headers: {
        Cookie: `t-cook=${jwtCookie?.value}`,
      },
    });
    if (res.ok) {
      const tags: Tag[] = await res.json();
      return NextResponse.json(tags);
    } else {
      return NextResponse.json(
        { message: `Failed to fetch data: ${res.status} - ${res.statusText}` },
        { status: res.status }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
