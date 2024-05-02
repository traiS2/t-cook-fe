import { cookies } from "next/headers";
interface category {
  id: number;
  name: string;
}
// Handles GET requests to /api

export async function GET() {
  try {
    const cookieStore = cookies();
    const jwtCookie = cookieStore.get("t-cook");
    const res = await fetch(
      process.env.DATA_API_KEY_BE +
        "/api/category/get-all-category-by-show-status",
      {
        cache: "no-store",
        headers: {
          Cookie: `t-cook=${jwtCookie?.value}`,
        },
      }
    );
    if (res.ok) {
      const categories: category[] = await res.json();
      return Response.json(categories);
    } else {
      return Response.json(
        `Failed to fetch data: ${res.status} - ${res.statusText}`
      );
    }
  } catch (error: any) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
