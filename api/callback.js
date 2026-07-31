export default async function handler(req, res) {
  const { code, error, error_description } = req.query;

  if (error) {
    res.status(400).send(`<p>GitHub OAuth error: ${error_description || error}</p>`);
    return;
  }

  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.status(500).send(
      "Missing OAUTH_CLIENT_ID / OAUTH_CLIENT_SECRET environment variables. Add them in the Vercel project's Environment Variables settings, then redeploy."
    );
    return;
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.error || !data.access_token) {
      res
        .status(400)
        .send(`<p>Could not get access token: ${data.error_description || data.error}</p>`);
      return;
    }

    const token = data.access_token;

    // Standard Decap/Netlify CMS OAuth popup handshake: the popup waits for
    // an acknowledgement message from the window that opened it, then
    // replies with the token so the CMS can log the user in.
    const html = `<!doctype html>
<html>
  <body>
    <script>
      var token = ${JSON.stringify(token)};
      function receiveMessage(e) {
        var message = "authorization:github:success:" + JSON.stringify({ token: token, provider: "github" });
        window.opener.postMessage(message, e.origin);
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
    <p>Authorized — you can close this window if it doesn't close automatically.</p>
  </body>
</html>`;

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("OAuth callback failed: " + err.message);
  }
}
