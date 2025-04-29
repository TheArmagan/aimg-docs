# 🖼️ HTML Yapısı
AIMG, HTML şablonlarını kullanarak dinamik resimler oluşturmanıza olanak tanır. Şablon yapısı, HTML ve CSS ile tasarlanmış bir dosyadır. Aşağıda şablon yapısının detayları verilmiştir 👇.

- **HTML**: 📃 Şablonun temel yapısını oluşturur. HTML etiketleri ile görselin tasarımını yapabilirsiniz. Örnek olarak, `<div>`, `<img>`, `<span>` gibi etiketler kullanılabilir.
- **CSS**: 🎨 Şablonun stilini belirler. CSS ile görselin renklerini, boyutlarını ve diğer stil özelliklerini ayarlayabilirsiniz. Örnek olarak, `background-color`, `font-size`, `border-radius` gibi CSS özellikleri kullanılabilir.
- **EJS**: ⚙️ Şablon içerisinde dinamik içerikler oluşturmak için kullanılır. EJS benzeri bir şablon motoru ile verileri şablona entegre edebilirsiniz. Örneğin, `<%= it.user.name %>` ifadesi ile `user` nesnesinin `name` özelliğini şablona ekleyebilirsiniz.

## 📄 HTML Şablon Yapısı
:::code source="./example.html" title="template.aimg.html":::

Motorun düzgün çalışabilmesi için şablon dosyasında aşağıdaki kurallara dikkat etmelisiniz:
- **`<!DOCTYPE html>`**: ✅ HTML5 belgesi olduğunu belirtir.
- **`<html>`**: 🌐 HTML belgesinin kök öğesidir. Bu etiket, tüm HTML içeriğini kapsar.
- **`<head>`**: 🧠 Şablonun başlık kısmıdır. Burada stil dosyalarını (`<style>` veya `<link>`), meta bilgileri (`<meta>`) ve sayfa başlığını (`<title>`) tanımlayabilirsiniz.
- **`<style>`**: 🎨 Şablonun stil kısmıdır. Burada CSS ile görselin görünümünü (renkler, boyutlar, yazı tipleri vb.) belirleyebilirsiniz.
- **`<body>`**: 🖼️ Şablonun görünen içerik kısmıdır. Görselin asıl tasarımını (metinler, resimler, diğer elementler) burada yaparsınız.

## 📊 Unovis Elementleri
Unovis elementleri sayesinde HTML kodunuzun içerisine dinamik olarak veri görselleştirmeleri (grafikler, çizelgeler vb.) ekleyebilirsiniz. Unovis elementleri, AIMG ile birlikte kullanılabilir ve Unovis `1.5` 🔢 versiyonu desteklenmektedir. Aşağıda basit örnekler verilmiştir. Daha ayrıntılı bilgi ve kullanım senaryoları için [Veri Yapısı](../data) sayfasına göz atabilirsiniz.

:::code source="./unovis_example.html" title="template.aimg.html":::