export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;

  if (!clientId) {
    res.status(500).send(
      "Missing OAUTH_CLIENT_ID environment variable. Add it in the Vercel project's Environment Variables settings, then redeploy."
    );
    return;
  }

  const host = req.headers.host;
  const protocol = host.includes("localhost") ? "http" : "https";
  const redirectUri = `${protocol}://${host}/api/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo,user",
  });

  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
  });
  res.end();
}
