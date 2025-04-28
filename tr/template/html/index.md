# 🖼️ HTML Yapısı
AIMG, HTML şablonlarını kullanarak dinamik resimler oluşturmanıza olanak tanır. Şablon yapısı, HTML ve CSS ile tasarlanmış bir dosyadır. Aşağıda şablon yapısının detayları verilmiştir 👇.

- **HTML**: 📃 Şablonun temel yapısını oluşturur. HTML etiketleri ile görselin tasarımını yapabilirsiniz. Örnek olarak, `<div>`, `<img>`, `<span>` gibi etiketler kullanılabilir.
- **CSS**: 🎨 Şablonun stilini belirler. CSS ile görselin renklerini, boyutlarını ve diğer stil özelliklerini ayarlayabilirsiniz. Örnek olarak, `background-color`, `font-size`, `border-radius` gibi CSS özellikleri kullanılabilir.
- **EJS**: ⚙️ Şablon içerisinde dinamik içerikler oluşturmak için kullanılır. EJS benzeri bir şablon motoru ile verileri şablona entegre edebilirsiniz. Örnek olarak `<%= it.user.name %>` ifadesi ile `user` nesnesinin `name` özelliğini şablona ekleyebilirsiniz.

## 📄 HTML Şablon Yapısı
:::code source="./example.html" title="template.aimg.html":::

Motorun düzgün çalışabilmesi için şablon dosyasında aşağıdaki kurallara dikkat etmelisiniz:
- **`<!DOCTYPE html>`**: ✅ HTML5 belgesi olduğunu belirtir.
- **`<html>`**: ✅ HTML belgesinin başlangıcını belirtir. Bu etiket, tüm HTML içeriğini kapsar.
- **`<head>`**: 📃 Şablonun başlık kısmıdır. Burada stil dosyalarını ve diğer meta bilgileri tanımlayabilirsiniz.
- **`<style>`**: 💅 Şablonun stil kısmıdır. Burada CSS ile görselin stilini belirleyebilirsiniz.
- **`<body>`**: 📃 Şablonun içerik kısmıdır. Burada görselin tasarımını yapabilirsiniz.


TODO: Unovis elementlerini dökümana ekle