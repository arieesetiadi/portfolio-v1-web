import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ accessible: false }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      method: "HEAD",
      // cache: "no-store" to ensure we get real-time status,
      // but Railway deployments shouldn't be aggressively cached by Next.js if we use query params
    });

    if (response.ok) {
      return NextResponse.json({ accessible: true });
    }

    if (response.status === 405) {
      const getResponse = await fetch(url, { method: "GET" });
      return NextResponse.json({ accessible: getResponse.ok });
    }

    return NextResponse.json({ accessible: false });
  } catch (error) {
    return NextResponse.json({ accessible: false });
  }
}
