const entryPoint = (req: Request): Response => {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);

  const name = params.get("name") || "DoneSaaS";
  const responseText = `Hello, ${name}!`;

  return new Response(responseText, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

await Deno.serve(entryPoint);
