import next, { NextApiResponse } from "next";

export async function POST(request: Request, res: NextApiResponse) {
  try {
    const data = await request.json();
    const response = await fetch(
      process.env.DATA_API_KEY_BE + "/api/auth/login-by-username",
      {
        cache: "no-store",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const jwtCookie = response.headers.get("Set-Cookie");
    if (response.ok) {
      return new Response(data, {
        status: 200,
        headers: {
          "Set-Cookie": jwtCookie || "", // Ensure "Set-Cookie" is not null
          "Content-Type": "application/json",
        },
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
