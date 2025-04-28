# 🚀 aimg.js

Node.js için resmi AIMG API istemcisi. HTML şablonlarını kullanarak dinamik görseller (PNG/GIF) oluşturmanıza olanak tanır. ✨

## 📦 Kurulum

```bash
npm install aimg.js
# veya
pnpm install aimg.js
# veya
yarn add aimg.js
```

## 🛠️ Kullanım

Öncelikle, istemciyi içe aktarın ve API anahtarınızla başlatın:

```javascript
// filepath: example.js
const { AIMGClient } = require("aimg.js");
// veya ES Modülleri ile:
// import { AIMGClient } from "aimg.js";

const client = new AIMGClient({
  apiKey: "API_ANAHTARINIZ", // API Anahtarınızı buraya girin
  templatesPath: "./templates" // (İsteğe bağlı) Şablon klasörünüzün yolu, varsayılan: process.cwd()/templates
});
```

### 🖼️ Bir Şablonu İşleme (`renderTemplate`)

Belirtilen şablon adını kullanarak bir görsel işler. Şablon klasöründen dosyaları (`template.aimg.html`, `session.aimg.json`, `data.aimg.json`, `animation.aimg.json`) okur ve bunları AIMG API'sine gönderir.

Örnek şablonları [templates](https://github.com/TheArmagan/aimg-client/tree/main/templates) klasöründe görebilirsiniz.

```javascript
// filepath: exampleRenderTemplate.js
const { AIMGClient } = require("aimg.js");
const fs = require("fs");

const client = new AIMGClient({ apiKey: "API_ANAHTARINIZ" });

async function renderMyTemplate() {
  try {
    // 'level' şablonunu varsayılan data.aimg.json ile işle
    const result = await client.renderTemplate("level");

    // Veya özel verilerle işle
    const customData = {
      user: {
        name: "Özel Kullanıcı",
        displayName: "Özel Kullanıcı | 99",
        avatarUrl: "https://example.com/avatar.png",
        avatarColor: "#ff0000"
      },
      levels: [ /* ... seviye verileri ... */ ]
    };
    const resultWithData = await client.renderTemplate("level", customData);

    console.log("İşleme başarılı!", result.filename);
    // Örnek: Görseli bir dosyaya kaydet
    fs.writeFileSync(result.filename, result.buffer);
    console.log(`Görsel ${result.filename} olarak kaydedildi.`);

  } catch (error) {
    console.error("İşleme hatası:", error);
  }
}

renderMyTemplate();
```

### ⚙️ Özel HTML İşleme (`render`)

Doğrudan HTML içeriği, yapılandırma ve oturum ayarları sağlayarak bir görsel işler.

```javascript
// filepath: exampleRenderCustom.js
const { AIMGClient } = require("aimg.js");
const fs = require("fs");

const client = new AIMGClient({ apiKey: "API_ANAHTARINIZ" });

async function renderCustomHtml() {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head><title>Özel</title></head>
    <body><h1>Merhaba, <%= it.name %>!</h1></body>
    </html>
  `;

  const config = {
    data: { name: "Dünya" },
    // Gerekirse animasyon ayarları
    // animation: { ... }
  };

  const sessionConfig = {
    type: "NoScriptStatic", // veya "NoScriptAnimated"
    // Gerekirse profiller
    profiles: []
    // profiles: [{ name: "TailwindCSS" }]
  };

  try {
    const result = await client.render(htmlContent, config, sessionConfig);
    console.log("Özel işleme başarılı!", result.filename);
    // Örnek: Görseli bir dosyaya kaydet
    fs.writeFileSync(result.filename, result.buffer);
    console.log(`Görsel ${result.filename} olarak kaydedildi.`);
  } catch (error) {
    console.error("Özel işleme hatası:", error);
  }
}

renderCustomHtml();
```

## 📂 Şablon Yapısı

`templatesPath` içindeki her alt klasör bir şablonu temsil eder:

*   `template.aimg.html`: Görselin HTML yapısı. EJS benzeri `<%= ... %>` sözdizimi (`it` değişkeni aracılığıyla) kullanarak veri enjeksiyonunu destekler.
*   `session.aimg.json`: İşleme oturumu ayarları ([`RestSessionInstance`](https://github.com/TheArmagan/aimg-client/blob/HEAD/src/classes/Rest/Sessions.ts#L3)). `type` (`NoScriptStatic` veya `NoScriptAnimated`) ve kullanılacak `profiles` (örneğin, `TailwindCSS`, `Unovis`, `GSAP`) belirtir.
*   `data.aimg.json` (İsteğe bağlı): Şablonda kullanılacak varsayılan veriler. Bu dosya, `renderTemplate` çağrısında `data` parametresi sağlanmazsa kullanılır.
*   `animation.aimg.json` (İsteğe bağlı): `session.aimg.json` dosyasında `type` `NoScriptAnimated` olarak ayarlanmışsa animasyon tanımlarını içerir.

Örnek şablonlar için [templates](templates) klasörünü kontrol edin.

## 📚 API Referansı

### `new AIMGClient(options)`

Yeni bir istemci örneği oluşturur.

*   `options`: [`AIMGClientOptions`](https://github.com/TheArmagan/aimg-client/blob/HEAD/src/classes/AIMGClient.ts)
    *   `apiKey` (string, **gerekli**): AIMG API anahtarınız.
    *   `rest?`: [`RestOptions`](https://github.com/TheArmagan/aimg-client/blob/HEAD/src/classes/Rest/index.ts) (İsteğe bağlı) REST istemcisi için ek ayarlar (örneğin, `baseUrl`, `timeout`, `headers`).
    *   `templatesPath?`: (string, İsteğe bağlı) Şablonları içeren klasörün yolu. Varsayılan: `path.join(process.cwd(), "templates")`.

### `async renderTemplate(name, data?)`

Bir şablonu işler.

*   `name` (string): `templatesPath` içindeki şablon klasörünün adı.
*   `data?` (Record<string, any>, İsteğe bağlı): Şablona gönderilecek özel veriler. Belirtilmezse, şablonun `data.aimg.json` dosyası kullanılır.
*   **Dönüş:** `Promise<{ buffer: Buffer, filename: string, content_type: "image/png" | "image/gif", statistics: any }>`

### `async render(html, config, sessionConfig)`

Özel HTML içeriğini işler.

*   `html` (string): İşlenecek HTML içeriği.
*   `config`: [`RestRenderSessionOptions['config']`](https://github.com/TheArmagan/aimg-client/blob/HEAD/src/classes/Rest/Sessions.ts)
    *   `data` (Record<string, any>): HTML'ye enjekte edilecek veriler.
    *   `animation?`: Animasyon ayarları (`sessionConfig.type` animasyonlu ise).
*   `sessionConfig`: [`RestSessionInstance`](https://github.com/TheArmagan/aimg-client/blob/HEAD/src/classes/Rest/Sessions.ts) Oturum türünü ve profilleri belirtir.
*   **Dönüş:** `Promise<{ buffer: Buffer, filename: string, content_type: "image/png" | "image/gif", statistics: any }>`