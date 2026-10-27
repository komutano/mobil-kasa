# Mobil Kasa

iPhone ve iPad için hazırlanmış, **internetsiz çalışan** basit bir satış kasası.
Mağazadaki bilgisayar kullanılamadığında satışları telefondan almak için yapıldı.
Günün sonunda tüm satışlar fiş fiş Excel'e aktarılır ve ana programa girilir.

**Adres:** https://komutano.github.io/mobil-kasa/

Güncel sürüm: **v2.4.0**

---

## Nasıl çalışır?

Bu site yalnızca programın kendisini (ekranlar ve hesaplama kodu) barındırır.
Program telefona bir kez yüklendikten sonra her şey **telefonun içinde** çalışır:

- Stok listesi (Excel) telefonda okunur ve telefonun hafızasında saklanır. **Hiçbir yere gönderilmez.**
- Satışlar, iadeler ve fişler yalnızca o telefonda tutulur.
- Gün sonu Excel'i telefonda oluşturulur.
- İnternet yokken de çalışır. İnternet varken açılışta programın yeni sürümü varsa kendiliğinden alınır. Bu sırada veriler silinmez.

> Bu depoda stok, fiyat ya da satış bilgisi **yoktur**. Yalnızca program kodu vardır.

---

## Telefona kurulum

1. Yukarıdaki adresi iPhone'da **Safari** ile açın. (Ana ekrana ekleme Safari'den yapılır.)
2. Alttaki **Paylaş** butonuna (yukarı oklu kare) basın, ardından **Ana Ekrana Ekle → Ekle** seçin.
3. Ana ekranda çıkan **Kasa** ikonundan açın.
4. İlk açılışta adınızı sorar. Fişlerde satışı kimin yaptığı bu isimle görünür. Sağ üstteki isme dokunarak değiştirebilirsiniz.
5. **Stok** sekmesinden stok listesini (.xlsx) yükleyin.

> ⚠️ Programı her zaman **ana ekrandaki ikondan** açın. Safari'den açılan sayfa ayrı bir hafıza kullanır ve aynı satışları görmez.

---

## Barkod okuyucu bağlama

Üç yolla barkod okutulabilir:

| Yol | Nasıl |
|---|---|
| **Bluetooth okuyucu** | iPhone/iPad'in Bluetooth ayarlarından eşleştirin. Okuyucu klavye gibi çalışır. |
| **Kablolu (USB) okuyucu** | Bir **çevirici** ile takın: Lightning girişli cihazlarda *Lightning – USB 3 Kamera Adaptörü*, USB-C girişli cihazlarda *USB-C – USB adaptörü*. Okuyucu yine klavye gibi çalışır, ek ayar gerekmez. |
| **Kamera** | Barkod kutusunun yanındaki **barkod simgeli** buton. Okuyucu gerekmez. |

> ⚠️ **Okuyucu bağlıyken ekran klavyesi açılmaz.** iPhone/iPad, kablolu ya da Bluetooth okuyucuyu gerçek bir klavye sayar ve ekran klavyesini gizler. Tutar, indirim, kur ya da ürün adı yazmanız gerekirse:
> - Kablolu okuyucuyu çıkarın ya da Bluetooth okuyucuyu kapatın, klavye geri gelir.
> - iPad'de ekranın altında çıkan küçük çubuktaki klavye simgesiyle ekran klavyesi açılabilir.
> - Bazı Bluetooth okuyucuların kılavuzunda ekran klavyesini açıp kapatan özel bir barkod ya da tuş vardır.
>
> Kamera butonunun bundan etkilenmemesi beklenir: okuyucu bağlıyken de kamera butonuyla okutulabilmelidir. *(Henüz test edilmedi: kablolu okuyucu takılıyken iPhone/iPad'de kameranın açıldığı denenmedi.)*

> Lightning girişli bazı iPhone'larda kablolu okuyucu takılınca *"Bu aksesuar çok fazla güç gerektiriyor"* uyarısı çıkabilir. Bu durumda şarj girişi olan *USB 3 Kamera Adaptörü* kullanın ve adaptöre şarj kablosu takın.

---

## Stok listesi biçimi (.xlsx)

| Sütun | İçerik |
|---|---|
| **A** | Barkod |
| **C** | Ürün adı |
| **K** | Stok adedi |
| **L** | Satış fiyatı |

- İlk satır başlık sayılır ve atlanır.
- 13 haneden kısa sayısal barkodların başına sıfır eklenerek 13 haneye tamamlanır.
- Yeni liste yüklendiğinde eski stok listesinin yerine geçer. **Satış kayıtları silinmez.**

---

## Ekranlar

### Satış
- Barkod okutun (Bluetooth okuyucu ya da klavye ile). Ürün sepete eklenir.
- Okuyucu yoksa barkod kutusunun yanındaki **barkod simgeli** butona basın. Kamera açılır; barkodu çerçevenin içine getirip telefonu 15–20 cm uzakta tutun. Okununca **bip** sesi gelir, çerçeve yeşil yanar ve ürün sepete eklenir. 13 haneden kısa barkodların başına sıfır eklenir. (İlk kullanımda kamera izni istenir.)
  - Telefon destekliyorsa sağ altta **1× / 2×** düğmesi çıkar. Kamera 2× yakınlaştırmayla açılır; barkod küçükse ya da odak tutmuyorsa düğmeyle değiştirin.
  - iPhone sessiz moddaysa bip sesi duyulmayabilir; yeşil çerçeve yine görünür.
- Adedi **– / +** ile değiştirin. Fiyata dokunarak birim fiyatı değiştirebilirsiniz.
- **Nakit** veya **Kredi kartı** ile tahsil edin. Barkod kutusuna bir tutar yazıp butona basarsanız parçalı ödeme yapılır (örneğin 200 nakit, kalanı kart).
- **Döviz (USD/EUR):** Kur elle girilir (aynı gün içinde hatırlanır). Müşterinin dövizi **kur ÷ 1,03** ile alınır (%3 komisyon).
  - *Müşterinin verdiği döviz* kutusuna verilen miktarı yazın (örneğin 100). Program **TL para üstünü** büyük olarak gösterir.
  - Kutu boş bırakılırsa tam tutar kadar döviz alındığı varsayılır.
  - Verilen döviz yetmezse kalanı nakit ya da kartla tamamlanır.
  - Komisyon kârı (alınan döviz × kur − müşteriye sayılan TL) ekranda ve Excel'de ayrıca gösterilir.
- **İndirim TL / %:** Fişin tamamına uygulanır.
- Listede olmayan bir barkod okutulursa fiyat ve ad sorulur. Bu ürün Excel'de "listede yok" olarak işaretlenir.

### İade
- **Hesap Kapat** altındaki **↩ İade al** butonuna basın, iade edilen ürünlerin barkodunu okutun.
- Para nakit, karta ya da ikisine bölünerek iade edilir. Döviz ile iade yapılmaz.
- Ürünler stoğa geri girer.
- **Değişim** için önce iade, sonra normal satış yapın.

### Ürünler (fiyat sorgu)
- Barkod okutun ya da **barkod simgeli** butonla kameradan okutun. Ürünün fiyatı ve stoğu büyük olarak gösterilir.
- Bir sonraki barkod okutulduğunda eskisinin yerine yazılır, silmeye gerek yoktur.
- Ürün adıyla da arama yapılabilir.

### Günlük
- Günün nakit, kart, dövizle ödenen, indirim, iade ve döviz komisyon kârı toplamları ile fiş listesi.
- Döviz kutusu: alınan döviz, verilen para üstü, komisyon kârı ve çekmeceye net giren TL ve döviz.
- Dövizli fişlerin altında döviz satırı görünür (miktar, kur, para üstü, kâr).
- Bugünün fişlerinde **Düzelt** (fişi sepete geri yükler) ve **Sil** (ürünleri stoğa geri koyar, fiş "SİLİNDİ" olarak listede kalır) butonları vardır.
- **⬇ Gün Sonu Excel** ile günün dökümü indirilir.

---

## Gün devri

Gün **gece 04:00'te** döner. 00:00 ile 03:59 arasında yapılan işlemler bir önceki güne yazılır.
Saat 04:00'ü geçince önceki günün fişleri **kilitlenir**, yalnızca görüntülenebilir.
Telefon saatinin otomatik ayarlı olması gerekir.

---

## Gün sonu Excel'i

Her telefondan ayrı bir dosya çıkar (`Kasa_GG-AA-YYYY_İsim.xls`). İçindeki sayfalar:

| Sayfa | İçerik |
|---|---|
| **Özet** | Nakit, kart, dövizle ödenen, toplam satış, indirim, iade, döviz komisyon kârı, para üstü, çekmeceye giren TL ve döviz |
| **Fişler** | Her fiş bir satır: saat, tür, satan kişi, brüt, indirim, net, nakit, kart, döviz (TL), alınan döviz, para üstü, komisyon kârı |
| **Fiş Detayı** | Fiş fiş gruplu: üstte ödeme özeti, altında ürünler ve varsa döviz satırı |
| **Ürün Bazlı** | Ürün başına net satış adedi ve kalan stok (sıfıra ya da eksiye düşenler renkli) |
| **Döviz** | Her döviz işlemi: fiş, ürünler, kur, alış kuru, gereken ve alınan döviz, para üstü, komisyon kârı |
| **Silinen Fişler** | Silinen fişler, silinme saati ve silen kişi |

İadeler kırmızı ve eksi tutarla gösterilir.

---

## Önemli uyarılar

- **Telefonlar birbirinin verisini görmez.** Her telefonun kendi stok listesi ve kendi satışları vardır. Akşam her telefondan ayrı gün sonu Excel'i alınmalıdır.
- **Yedek yoktur.** Ana ekrandaki uygulama silinirse ya da Safari verileri temizlenirse o telefondaki satışlar kaybolur. **Gün sonu Excel'ini her akşam alın.**
- Stok listesi telefonda yalnızca okunur. Ana programdaki stok, gün sonu Excel'i girilene kadar güncellenmez.

---

## Dosyalar

| Dosya | Görevi |
|---|---|
| `index.html` | Programın tamamı (ekranlar ve kod) |
| `zxing-reader.js`, `zxing_reader.wasm` | Kamera ile barkod okuma motoru ([zxing-wasm](https://github.com/Sec-ant/zxing-wasm) 3.1.6, ZXing-C++ tabanlı, MIT lisansı: `zxing-wasm.LICENSE`) |
| `sw.js` | İnternetsiz çalışma ve otomatik güncelleme |
| `manifest.json` | Ana ekran ikonu ve uygulama adı |
| `icon-*.png` | Uygulama ikonları |

## Güncelleme

Yeni sürüm için `index.html` değiştirilip bu depoya yüklenir. GitHub Pages birkaç dakika içinde yayına alır.
Telefonlar internete bağlıyken bir sonraki açılışta yeni sürümü kendiliğinden alır.
Çalışan sürüm sağ üst köşede görünür.

## Sürüm geçmişi

- **v2.4.0:** Kamera ile okuma baştan yazıldı: iPhone'da çalışmayan eski okuyucu yerine ZXing-C++ tabanlı zxing-wasm kullanılıyor. Kamera yüksek çözünürlükte, sürekli odakla ve destekleniyorsa 2× yakınlaştırmayla açılır. Okununca bip sesi ve yeşil çerçeve. Yanlış okumaya karşı oylama: stok listesindeki barkod 2 karede aynı okununca, listede olmayan barkod en az 1 saniye ve 4 karede aynı okununca kabul edilir. Kamera butonu barkod simgeli ve açık renkli yapıldı.
- **v2.3.2:** Dövizde müşterinin verdiği miktar girilir ve TL para üstü hesaplanır. Döviz işlemleri ve komisyon kârı fişte, Günlük ekranında ve Excel'de (yeni *Döviz* sayfası) ayrıca gösterilir. Barkod kutusunun yanına kamera ile okuma butonu eklendi.
- **v2.3.1:** Fiyat sorguda yeni okutulan barkod eskisinin yerine yazılır (iPhone uyumu). Açılışta her zaman en yeni sürüm yüklenir.
- **v2.3:** İade, fiş silme ve düzeltme, çok sayfalı gün sonu Excel'i, satan kişi bilgisi, 04:00 gün devri, döviz kaydı, ana ekrana ekleme ve internetsiz çalışma.
- **v2.2:** İlk mobil sürüm.
