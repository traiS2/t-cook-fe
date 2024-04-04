import { NextResponse } from "next/server";

interface Tag {
  id: number;
  name: string;
}

export async function GET() {
  try {
    const res = await fetch(process.env.DATA_API_KEY_BE + "/tag/get-all-tags");
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
