import { cookies } from "next/headers";
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const cookieStore = cookies();
    const jwtCookie = cookieStore.get("t-cook");
    const response = await fetch(
      process.env.DATA_API_KEY_BE + "/api/blog/create-blog",
      {
        cache: "no-store",
        method: "POST",
        headers: {
          Cookie: `t-cook=${jwtCookie?.value}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      return new Response(data, {
        status: 201,
      });
    } else {
      return Response.json(
        `Failed to fetch data: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error: any) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
