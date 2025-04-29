# 🎬 Animasyon Yapısı

Animasyon yapısı, AIMG motorunun dinamik resim oluşturma yeteneklerini kullanarak görsel içeriklerinizi daha etkileyici hale getirmenizi sağlar ✨. Animasyon yapısı, JSON formatında tanımlanmış bir dizi animasyon ve stil bilgisi içerir. Bu yapı, görselin nasıl hareket edeceğini ve hangi efektlerin uygulanacağını belirler. Aşağıda animasyon yapısının detayları verilmiştir 👇.

- **frames**: (`number`, **gerekli**) 🔢 Animasyonun kaç kare uzunluğunda olduğunu belirtir. Her kare, animasyonun bir aşamasını temsil eder.
- **frameRate**: (`number`, **gerekli**) ⏱️ Animasyonun saniyede kaç kare gösterileceğini belirtir. Bu, animasyonun hızını kontrol eder.
- **loop**: (`boolean`, **gerekli**) 🔄 Animasyonun döngüsel olup olmadığını belirtir. `true` ise animasyon sürekli olarak tekrar eder, `false` ise animasyon sadece bir kez oynatılır.
- **list**: (`Array`, **gerekli**) 📜 Animasyon oturumlarının listesidir. Her oturum, animasyonun tamamını belirler. Tüm oturumlar aynı anda oynatılır.
  - **from**: (`Record<string, number | string>`, **gerekli**) 🏁 Bu obje, animasyonun ana objesidir ve animasyonun başlangıç değerlerini içerir. Bu değerler, animasyonun başlayacağı noktayı belirler. `GSAP` ile çalışmaktadır; bu sayede ister yazı, ister sayı, ister renk animasyonu yapabilirsiniz 🎨.
  - **to**: (`Record<string, number | string>`, **gerekli**) 🎯 Bu obje, animasyonun bitiş değerlerini içerir. Bu değerler, animasyonun sona ereceği noktayı belirler. `GSAP` ile çalışmaktadır; bu sayede ister yazı, ister sayı, ister renk animasyonu yapabilirsiniz 🎨.
  - **delay**: (`number`, İsteğe bağlı) ⏳ Bu değer, animasyonun başlamadan önce ne kadar bekleyeceğini belirtir (saniye cinsinden). Bu, animasyonun zamanlamasını kontrol eder.
  - **ease**: (`string`, İsteğe bağlı) 〰️ Bu değer, animasyonun hız eğrisini belirtir. Bu, animasyonun nasıl hızlanacağını ve yavaşlayacağını kontrol eder. `GSAP` ile çalışmaktadır; GSAP'de bulunan [easing fonksiyonları](https://gsap.com/docs/v3/Eases/) kullanılabilir. Eğer `GSAP` profili üzerinden **özel easingler** tanımladıysanız, onları burada kullanabilirsiniz.
  - **updaters**: (`Array`, **gerekli**) 🔄 Bu liste, animasyon sırasında güncellenmesi gereken değerleri belirtir. Bu, animasyonun dinamik olarak değişmesini sağlar.
    - **value**: ([`EvalObject`](#evalobject), İsteğe bağlı) 💡 Bu değer her değiştiğinde animasyonun güncellenmesini sağlar. Bu değer, animasyonun her karesinde güncellenir. Eval contexti aşağıda belirtilmiştir. Verilmemesi durumunda her frame güncellenir.
      - **`$`**: (`Record<string, number | string>`) 📊 Her frame güncellenen değerleri içerir. Bu değerler, animasyonun her karesinde güncellenir (`from` ve `to` değerleri arasında geçiş yapar).
    - **setters**: (`Array`, **gerekli**) ⚙️ Bu liste, animasyon sırasında güncellenmesi gereken değerleri ve nasıl güncelleneceğini belirtir. Bu, animasyonun dinamik olarak değişmesini sağlar.
      - **type**: (`string`, **gerekli**) 🏷️ Bu değer, güncellenen değerin türünü belirtir.
        - `Style`: 🎨 CSS stil güncellemesi yapar. Örnek: `background-color`, `color`, `width`, `--custom-value` gibi CSS özelliklerini güncelleyebilirsiniz.
        - `Attribute`: 🔗 HTML attribute güncellemesi yapar. Örnek: `src`, `custom-attr` gibi HTML attribute'lerini güncelleyebilirsiniz.
        - `Text`: ✍️ HTML içeriğini yazı olarak günceller. Otomatik olarak HTML escape işlemi yapar. Kullanıcıdan gelen verileri güvenli bir şekilde işler.
        - `Html`: 💻 HTML içeriğini günceller. Kullanıcıdan gelen verileri **işlemez**. HTML escape işlemi yapmaz. Dikkatli kullanın!
        - `Unovis:Components`: 🧩 Unovis bileşenlerini günceller.
        - `Unovis:Container`: 📦 Unovis konteynerini günceller.
        - `Unovis:Data`: 📈 Unovis veri güncellemelerini yapar.
      - **selector**: (`string`, **gerekli**) 👉 Bu değer, güncellenen değerin hangi öğeye uygulanacağını belirtir. CSS seçici kullanarak öğeyi seçebilirsiniz. Örnek: `#my-element`, `.my-class`, `div` gibi.
      - **key**: (`string`, Type'a bağlı) 🔑 Bu değer, güncellenen değerin hangi özelliğini (örneğin, stil adı veya attribute adı) belirtir. Örnek: `background-color`, `src` gibi.
      - **value**: ([`EvalObject`](#evalobject), **gerekli**) 💡 Bu değer, güncellenen değerin yeni değerini belirtir. Bu değer, animasyonun her karesinde hesaplanır. Eval contexti aşağıda belirtilmiştir.
        - **`$.value`**: (`number | string | undefined`) 🔢 Updater için tanımlamış olduğunuz `value` objesinin o anki hesaplanmış değerini içerir. Eğer `updater` için `value` tanımlamadıysanız `undefined` döner.
        - **`$.values`**: (`Record<string, number | string>`) 📊 Her frame güncellenen tüm animasyon değerlerini içerir (`from` ve `to` değerleri arasında geçiş yapar).
        - **`$.text`** : (`string`) 📄 Güncellenen öğenin metin içeriğini içerir.
        - **`$.html`** : (`string`) 🌐 Güncellenen öğenin HTML içeriğini içerir (HTML escape işlemi yapılmaz).
        - **`$.element`**: (`Element`) 🏛️ Güncellenen DOM öğesini içerir.
        - **`$.unovis`** : (`any`) 📊 Güncellenen öğenin Unovis bileşenini içerir (varsa). Unovis objesine erişim sağlar.
        - **`$.attribute(string)`**: (`string`) 🏷️ Güncellenen öğenin belirtilen attribute değerini döndürür. Örnek: `$.attribute('src')`.
        - **`$.style(string)`**: (`string`) 🎨 Güncellenen öğenin belirtilen stil değerini döndürür. Örnek: `$.style('background-color')`.
        - **`$.child(string)`**: (`Element`) 👶 Güncellenen öğenin belirtilen CSS seçiciye uyan ilk alt öğesini döndürür.
        - **`$.children(string)`**: (`Array<Element>`) 👨‍👩‍👧‍👦 Güncellenen öğenin belirtilen CSS seçiciye uyan tüm alt öğelerini içeren bir dizi döndürür.
      - **condition**: ([`EvalObject`](#evalobject), İsteğe bağlı) 🤔 Bu değer, güncellemenin yalnızca belirli bir koşul sağlandığında yapılmasını sağlar. Eval contexti `value` ile aynıdır. Dönen değer `boolean` olmalıdır.

## 🧠 EvalObject

EvalObject, animasyon sırasında dinamik değerler hesaplamak için kullanılan özel bir objedir. Bu değerler, animasyonun her karesinde yeniden hesaplanır. Kullanımı oldukça basittir: Yeni bir obje oluşturup içerisine `$$` anahtarıyla bir `string` değeri (JavaScript kodu) koyarak EvalObject tanımlayabilirsiniz.

⚠️ **Dikkat:** Obje içinde `$$` anahtarı **dışında** başka bir anahtar varsa, bu obje EvalObject olarak **çalışmaz**.

EvalObject, aşağıdaki örnekteki gibi kullanılır:

```json
{
  // Bu örnekte, $.values.progress değeri 0 ile 1 arasında bir değerdir.
  // Değeri 100 ile çarpıp, tam sayıya yuvarlayıp sonuna '%' ekleyerek bir yüzde string'i oluşturur.
  "$$": "`${Math.floor($.values.progress * 100)}%`"
}
```

## 📝 Örnek Animasyon Yapısı
:::code source="./example.json" title="animation.aimg.json":::