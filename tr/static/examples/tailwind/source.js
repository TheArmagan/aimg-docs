const { AIMGClient } = require("aimg.js");

// Her seferinde yeni bir istemci oluşturmak yerine, tek bir istemci oluşturup onu kullanmak daha iyi bir yaklaşımdır.
const client = new AIMGClient({ apiKey: "API_ANAHTARINIZ" });

// Render alın.
const result = await client.renderTemplate("tailwind");