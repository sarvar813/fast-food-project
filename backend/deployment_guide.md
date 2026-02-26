# 🚀 Fast Food Backend Deployment Guide (24/7)

Sizning backend va Telegram botingiz har doim (24/7) ishlab turishi uchun eng yaxshi 2 ta yo'l bor:

---

## 🏗️ 1-Yo'l: Render.com (Eski/Oson usul)

Render - bu bulutli platforma bo'lib, loyihani GitHub'dan to'g'ridan-to'g'ri olib ishga tushiradi.

### 📝 Qadamlar:
1.  **Dashboard**'ga kiring va "New Web Service" yarating.
2.  **GitHub**'dan loyihangizni tanlang.
3.  **Environment Variables**: Dashboard'da `.env` faylingizdagi barcha kalitlarni (BOT_TOKEN va b.) qo'shishni unutmang.
4.  **Start Command**: 
    *   API uchun: `gunicorn backend.core_backend.wsgi:application`
    *   Bot uchun: `python backend/main.py` (Render'da bot uchun alohida "Background Worker" xizmati kerak bo'lishi mumkin).

---

## 🖥️ 2-Yo'l: Linux VPS (Eng barqaror/Professional usul)

Agar sizda haqiqiy server (VPS) bo'lsa, uni **systemd** bilan sozlash kerak.

### 📝 Konfiguratsiya (Systemd Service):

Bot 24/7 ishlab turishi uchun serverda `/etc/systemd/system/bsb_bot.service` faylini yarating:

```ini
[Unit]
Description=Fast Food Telegram Bot Service
After=network.target

[Service]
User=root
WorkingDirectory=/path/to/your/project/backend
ExecStart=/usr/bin/python3 main.py
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Keyin buyruqlarni bering:
*   `sudo systemctl daemon-reload`
*   `sudo systemctl start bsb_bot`
*   **`sudo systemctl enable bsb_bot`** (Server restart bo'lsa ham bot avtomatik yoqiladi)

---

## 🔒 Muhim eslatmalar:

1.  **Environment**: Serverda hech qachon `.env` faylini GitHub'ga push qilmang! Ularni serverda qo'lda yoki hosting dashboard'da sozlang.
2.  **HTTPS**: Tashqaridan access bo'lishi uchun Django profilida `ALLOWED_HOSTS` ro'yxatiga serveringiz IP-manzilini yoki domenini yozishingiz shart.
3.  **Bot Offset**: `main.py` dagi polling har doim ishga tushganda oxirgi xabarlar bilan ishlaydi, shuning uchun xabarlar yo'qolib qolmaydi.

💡 **Tavsiya**: Agar imkon bo'lsa, **Render.com** ning pullik tarifidan yoki arzon **VPS** (masalan, Hetzner yoki DigitalOcean) dan foydalaning. Shunda botingiz haqiqatdan ham 24/7 ishlaydi.
