# ⚙️ Oturum Yapısı
Oturum yapısı, AIMG'nin işleme sürecini ve ayarlarını belirleyen bir JSON dosyasıdır 📄. Bu yapı, şablonun nasıl işleneceğini ve hangi profillerin kullanılacağını tanımlar. Aşağıda oturum yapısının detayları verilmiştir 👇.

- **type**: İşleme türünü belirtir ⚙️. İki seçenek vardır:
  - `NoScriptStatic`: Statik bir görsel oluşturur 🖼️.
  - `NoScriptAnimated`: Animasyonlu bir görsel oluşturur 🎬.
- **profiles**: Kullanılacak profilleri belirtir 🎨. Bu, şablonun nasıl işleneceğini ve hangi stil veya animasyonların uygulanacağını belirler. Örneğin, `TailwindCSS`, `Unovis`, `GSAP` gibi profiller kullanılabilir.
  - `TailwindCSS` ile stil uygulamak için kullanılır 💅.
    - **name**: `TailwindCSS` (`string`, **gerekli**): TailwindCSS profilinin adı. Bu profil, şablonun TailwindCSS ile işlenmesini sağlar ✅.
    - **config**: (`Record<string, any>`, İsteğe bağlı): TailwindCSS profiline özel ayarlar 🔧. Direkt olarak `tailwind.config.js` dosyasını kullanır. Bu ayarlar, TailwindCSS'in nasıl uygulanacağını belirler.
  - `Unovis` ile veri görselleştirmeleri oluşturmak için kullanılır 📊.
    - **name**: `Unovis` (`string`, **gerekli**): Unovis profilinin adı. Bu profil, şablonun Unovis ile işlenmesini sağlar ✅.
  - `GSAP` ile oluşturulan animasyonları özelleştirmke için kullanılır ✨.
    - **name**: `GSAP` (`string`, **gerekli**): GSAP profilinin adı. Bu profil, şablona özel GSAP animasyonları ekleyebilmenizi sağlar ✅.
    - **config**: (`Record<string, any>`, İsteğe bağlı): GSAP profiline özel ayarlar 🔧. Bu ayarlar, GSAP animasyonlarının nasıl uygulanacağını belirler.
      - **customEases**: (`Array<{ name: string, ease: string }>`, İsteğe bağlı): GSAP animasyonları için özel kolaylaştırıcılar (easing functions) 🎢. Bu, animasyonların daha akıcı ve özelleştirilmiş bir şekilde çalışmasını sağlar.
  - `GoogleFonts` ile özel yazı tipleri kullanmak için kullanılır 🖋️.
    - **name**: `GoogleFonts` (`string`, **gerekli**): Google Fonts profilinin adı. Bu profil, şablonun Google Fonts ile işlenmesini sağlar ✅.
    - **config**: (`Array<string>`, **gerekli**): Kullanılacak yazı tiplerinin listesi 📝. Bu, şablonun hangi yazı tiplerini kullanacağını belirler.

## 📄 JSON Oturum Yapısı
:::code source="./example.json" title="session.aimg.json":::