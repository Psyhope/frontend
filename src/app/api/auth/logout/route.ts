import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    request.cookies.clear();
    return;
}
