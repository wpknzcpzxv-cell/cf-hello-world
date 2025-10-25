export default {
  async fetch(request, env, ctx) {
    const info = {
      status: "online",
      who: "Hakîkır",
      timestamp: new Date().toISOString(),
      ua: request.headers.get("user-agent"),
    };
    return new Response(JSON.stringify(info, null, 2), {
      status: 200,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  },
};
