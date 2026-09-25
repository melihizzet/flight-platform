import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const departureAt = searchParams.get("departure_at");
    const returnAt = searchParams.get("return_at");

    if (!origin || !destination || !departureAt) {
      return NextResponse.json(
        {
          success: false,
          error:
            "origin, destination ve departure_at parametreleri gereklidir.",
        },
        { status: 400 }
      );
    }

    const token = process.env.TRAVELPAYOUTS_API_TOKEN;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          error: "Travelpayouts API token bulunamadı.",
        },
        { status: 500 }
      );
    }

    const apiUrl = new URL(
      "https://api.travelpayouts.com/aviasales/v3/prices_for_dates"
    );

    apiUrl.searchParams.set("origin", origin.toUpperCase());
    apiUrl.searchParams.set("destination", destination.toUpperCase());
    apiUrl.searchParams.set("departure_at", departureAt);
    apiUrl.searchParams.set("currency", "try");
    apiUrl.searchParams.set("market", "tr");
    apiUrl.searchParams.set("sorting", "price");
    apiUrl.searchParams.set("limit", "10");
    apiUrl.searchParams.set("page", "1");
    apiUrl.searchParams.set("one_way", returnAt ? "false" : "true");

    if (returnAt) {
      apiUrl.searchParams.set("return_at", returnAt);
    }

    const response = await fetch(apiUrl.toString(), {
      method: "GET",
      headers: {
        "X-Access-Token": token,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data?.error || "Travelpayouts API hatası.",
          details: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      origin,
      destination,
      departure_at: departureAt,
      return_at: returnAt || null,
      currency: data.currency || "try",
      data: data.data || [],
    });
  } catch (error) {
    console.error("Flight price API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Fiyat bilgisi alınırken bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}
