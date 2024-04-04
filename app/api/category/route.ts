import { NextResponse } from "next/server";

interface category {
  id: number;
  name: string;
}

// Handles GET requests to /api
export async function GET() {
  try {
    const res = await fetch(
      process.env.DATA_API_KEY_BE +
        "/category/get-all-category-by-active-status"
    );
    if (res.ok) {
      const categories: category[] = await res.json();
      return NextResponse.json(categories);
    } else {
      return NextResponse.json(
        `Failed to fetch data: ${res.status} - ${res.statusText}`
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
