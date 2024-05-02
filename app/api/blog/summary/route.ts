export async function GET() {
  try {
    const res = await fetch(
      process.env.DATA_API_KEY_BE + "/api/blog/get-blog-summary",
      {
        next: { revalidate: 0 },
      }
    );
    if (res.ok) {
      const blogs = await res.json();
      return Response.json(blogs);
    } else {
      return Response.json(
        `Failed to fetch data: ${res.status} - ${res.statusText}`
      );
    }
  } catch (error: any) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
