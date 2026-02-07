export default {
  async fetch(request, env) {
    const { BOT_TOKEN, CHAT_ID, ALLOWED_ORIGIN } = env;

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const origin = request.headers.get("Origin") || "";
    if (ALLOWED_ORIGIN && origin && origin !== ALLOWED_ORIGIN) {
      return new Response("Forbidden", { status: 403 });
    }

    const contentType = request.headers.get("Content-Type") || "";
    let data = {};

    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const form = await request.formData();
      for (const [key, value] of form.entries()) {
        data[key] = value;
      }
    }

    if (data.website) {
      return new Response("OK", { status: 200 });
    }

    const name = String(data.name || "").trim();
    const contact = String(data.email || data.contact || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !contact || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const text = [
      "New Portfolio Message",
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Message: ${message}`,
    ].join("\n");

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const res = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    if (!res.ok) {
      return new Response("Failed to send", { status: 500 });
    }

    return new Response("OK", {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN || "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });
  },
};
