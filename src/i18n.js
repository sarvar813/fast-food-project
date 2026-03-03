import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: {
                translation: {
                    "common": {
                        "thanks": "Rahmat!",
                        "sending": "YUBORILMOQDA...",
                        "error_occurred": "Xatolik yuz berdi.",
                        "server_error": "Server xatoligi.",
                        "success": "Muvaffaqiyatli!",
                        "yes": "Ha",
                        "no": "Yo'q",
                        "save": "Saqlash",
                        "cancel": "Bekor qilish",
                        "delete": "O'chirish",
                        "edit": "Tahrirlash",
                        "loading": "Yuklanmoqda...",
                        "add": "Qo'shish",
                        "search": "Qidirish"
                    },
                    "navbar": {
                        "home": "ASOSIY",
                        "blog": "BLOG",
                        "about": "BIZ HAQIMIZDA",
                        "gallery": "GALEREYA",
                        "menu": "MENYU",
                        "shopping": "+ XARID QILISH",
                        "reservation": "BAND QILISH",
                        "constructor": "KONSTRUKTOR",
                        "my_orders": "Mening buyurtmalarim",
                        "no_orders": "Sizda hali buyurtmalar yo'q",
                        "wishlist": "Saralanganlar",
                        "wishlist_empty": "Saralangan mahsulotlar hozircha yo'q",
                        "search_placeholder": "Mahsulotlarni qidirish...",
                        "logout": "Chiqish",
                        "logout_confirm": "Haqiqatan ham chiqmoqchimisiz?",
                        "my_profile": "Mening profilim",
                        "toggle_theme": "Mavzuni o'zgartirish",
                        "statuses": {
                            "pending": "TUSHDI",
                            "preparing": "PISHMOQDA",
                            "shipping": "YO'LDA",
                            "completed": "BAJARILDI",
                            "cancelled": "BEKOR QILINDI"
                        }
                    },
                    "hero": {
                        "order_now": "BUYURTMA BERISH",
                        "view_menu": "MENYU KO'RISH",
                        "out_of_stock": "SOTUVDA YO'Q",
                        "buy_now": "Sotib olish",
                        "slides": {
                            "slide1": {
                                "subtitle": "PREMIUM SIFAT",
                                "title": "BLACK STAR MAXSUS",
                                "desc": "Haqiqiy 100% mol go'shti, maxsus qora bulka va bizning sirlangan sousimiz bilan unutilmas ta'm.",
                                "ing1": "100% Halol Go'sht",
                                "ing2": "Yangi Pishirilgan Bulka",
                                "ing3": "Maxsus Siri-Sous",
                                "ing4": "Qora bulka"
                            },
                            "slide2": {
                                "subtitle": "MAZALI TANLOV",
                                "title": "CHICKEN CHEESE BURGER",
                                "desc": "Yumshoq tovuq go'shti, erigan pishloq va yangi sabzavotlar uyg'unligi.",
                                "ing1": "Tovuq Go'shti",
                                "ing2": "Pishloq",
                                "ing3": "Pomidor",
                                "ing4": "Maxsus Sous"
                            },
                            "slide3": {
                                "subtitle": "ACHCHIQ TA'M",
                                "title": "SPICY MEXICAN BURGER",
                                "desc": "Achchiq qalampir va maxsus ziravorlar bilan tayyorlangan olovli burger.",
                                "ing1": "Mol Go'shti",
                                "ing2": "Xalapenyo",
                                "ing3": "Achchiq Sous",
                                "ing4": "Pishloq"
                            },
                            "slide4": {
                                "subtitle": "KLASSIK SIFAT",
                                "title": "DOUBLE BEEF BURGER",
                                "desc": "Ikki barobar ko'p go'sht va ikki barobar ko'p lazzat.",
                                "ing1": "2x Mol Go'shti",
                                "ing2": "Klassik Bulka",
                                "ing3": "Salat Bargi",
                                "ing4": "Piyoz"
                            }
                        }
                    },
                    "home": {
                        "store_closed": "Hozircha do'konimiz yopiq. Tez orada xizmatingizda bo'lamiz!"
                    },
                    "menu": {
                        "title": "BIZNING MAXSUS MENYU",
                        "subtitle": "Shahardagi eng mazali fast-food taomlari",
                        "add_to_cart": "SAVATCHAGA QO'SHISH",
                        "out_of_stock": "TUGAGAN",
                        "ingredients_title": "Tarkibi:",
                        "categories": {
                            "all": "HAMMASI",
                            "burgers": "BURGERLAR",
                            "pizza": "PITSSA",
                            "sides": "YONDAKLAR",
                            "drinks": "ICHIMLIKLAR"
                        }
                    },
                    "flash_deals": {
                        "badge": "QAYNOQ TAKLIF"
                    },
                    "cart": {
                        "title": "Savatchangiz",
                        "info_title": "Ma'lumotlar",
                        "verify_title": "Tasdiqlash",
                        "payment_title": "To'lov",
                        "empty": "Savatchangiz bo'sh",
                        "checkout_btn": "BUYURTMA BERISH",
                        "back_to_cart": "Savatchaga qaytish",
                        "back_to_info": "Ma'lumotlarga qaytish",
                        "coupon_placeholder": "PROMOKOD",
                        "coupon_success": "Promokod qo'llanildi",
                        "coupon_error": "Noto'g'ri promokod",
                        "use_bonuses": "Bonuslardan foydalanish",
                        "bonus_available": "bor",
                        "upsell_title": "TAOMINGIZNI BOYITING",
                        "combo_title": "COMBO QILING!",
                        "combo_desc": "Shu burgerga <b>Kola</b> va <b>Fri</b> qo'shib 30% tejang!",
                        "add_btn": "QO'SHISH",
                        "send_code": "KODNI YUBORISH",
                        "verify_desc": "Biz +{{phone}} raqamiga tasdiqlash kodini yubordik.",
                        "bot_fallback": "Kod kelmadimi? Botimizga o'ting:",
                        "bot_btn": "BOTGA O'TISH",
                        "enter_code": "Kodni kiriting",
                        "verify_btn": "TASDIQLASH",
                        "resend_code": "Kodni qayta yuborish",
                        "payment_method": "To'lov usuli",
                        "cash_terminal": "Naqd yoki Terminal",
                        "payme": "Payme",
                        "click": "CLICK",
                        "confirm_payment": "To'lovni tasdiqlaysizmi?",
                        "pay_yes": "HA",
                        "pay_no": "YO'Q",
                        "loyalty_title": "SODIQLIK DARAJASI",
                        "cashback_text": "keshbek",
                        "marathon_title": "BURGER MARAFONI",
                        "claim_reward": "SOVG'ANI OLISH",
                        "next_level": "Keyingi darajagacha",
                        "next_level_suffix": "TA",
                        "surge_title": "YUQORI TALAB",
                        "surge_desc": "Hozirda buyurtmalar juda ko'p, yetkazib berish narxi oshishi mumkin",
                        "form": {
                            "name": "Ism",
                            "surname": "Familiya",
                            "phone": "Telefon",
                            "address": "Manzil",
                            "time": "Vaqt",
                            "asap": "Tezroq",
                            "name_placeholder": "Ismingiz",
                            "surname_placeholder": "Familiyangiz",
                            "address_placeholder": "Manzilni kiriting",
                            "map_btn": "XARITA"
                        },
                        "summary": {
                            "subtotal": "Subtotal",
                            "discount": "Chegirma",
                            "bonus": "Bonus",
                            "delivery": "Yetkazib berish",
                            "free": "Bepul",
                            "total": "Jami"
                        }
                    },
                    "loyalty_levels": {
                        "badge": "VIP PRIVILEGIYALAR",
                        "title": "SIZNING <span>DARAFANGIZNI</span> ANIQLANG",
                        "desc": "Qancha ko'p buyurtma bersangiz, shuncha ko'p imtiyoz va keshbeklarga ega bo'lasiz.",
                        "current_level": "HOZIRGI DARAJA",
                        "cashback": "KESHBEK",
                        "orders_remaining": "Yana {{count}} ta buyurtma qoldi",
                        "reached": "Erishilgan daraja ✨",
                        "join_btn": "BUYURTMA BERISH",
                        "continue_btn": "DAVOM ETISH",
                        "bronze": "BRONZA",
                        "silver": "KUMUSH",
                        "gold": "OLTIN"
                    },
                    "careers": {
                        "title": "BIZNING <span>JAMOA</span>GA QO'SHILING!",
                        "desc": "O'z ustingizda ishlashni xohlaysizmi?",
                        "apply_btn": "ANKETA TO'LDIRISH +",
                        "modal_title": "uchun ariza",
                        "submit": "YUBORISH +",
                        "success_title": "Anketangiz qabul qilindi!",
                        "success_desc": "Tez orada menejerlarimiz siz bilan bog'lanishadi.",
                        "benefits": {
                            "lunch": "Bepul tushlik",
                            "salary": "Haftalik maosh",
                            "growth": "Karyera o'sishi"
                        },
                        "jobs": {
                            "chef": "Shef-povar",
                            "courier": "Kuryer",
                            "manager": "Menejer"
                        }
                    },
                    "mood_food": {
                        "trigger": "Sehrli Quti",
                        "title": "Hozirgi kayfiyatingiz qanday?",
                        "pref_title": "Nima xohlaysiz?",
                        "thinking": "AI siz uchun eng yaxshisini tanlayapti...",
                        "result_title": "Siz uchun tanlovimiz:",
                        "retry": "Boshqa tanlov",
                        "moods": {
                            "happy": "Baxtiyor",
                            "angry": "Jahldor",
                            "lazy": "Dangasa",
                            "hungry": "Juda och"
                        },
                        "prefs": {
                            "spicy": "Achchiq",
                            "healthy": "Sog'lom",
                            "popular": "Klassik"
                        }
                    },
                    "wheel_of_fortune": {
                        "trigger": "BONUS!",
                        "title": "BAXT G'ILDIRAGI",
                        "desc": "Har 10 sekundda bir marta aylantiring va sovg'alarga ega bo'ling!",
                        "spin_btn": "AYLANTIRISH",
                        "spinning": "AYLANYAPTI...",
                        "limit_msg": "Muzlatildi. {{count}} sekund kuting.",
                        "win_title": "TABRIKLAYMIZ!",
                        "lose_title": "Afsus...",
                        "win_msg": "Siz {{prize}} yutib oldingiz!",
                        "lose_msg": "Omadingizni keyinroq sinab ko'ring.",
                        "continue_btn": "DAVOM ETISH"
                    },
                    "support_chat": {
                        "trigger": "Admin bilan aloqa",
                        "online": "Online",
                        "placeholder": "Xabarni yozing...",
                        "system_msg": "Salom! Savolingiz bormi? Admin panelga to'g'ridan-to'g'ri yozishingiz mumkin.",
                        "auto_reply": "Xabaringiz admin panelga yuborildi. Tez orada javob qaytaramiz! 😊"
                    },
                    "home_sections": {
                        "reservation": {
                            "title": "STOL BAND QILISH",
                            "submit": "BAND QILISHNI TASDIQLASH"
                        },
                        "apps": {
                            "badge": "MOBIL ILOVA"
                        },
                        "stats": {
                            "delivered": "Sotilgan Burgerlar"
                        }
                    },
                    "admin": {
                        "access_denied": "Kirishga ruxsat yo'q",
                        "dashboard": {
                            "daily_goal": "KUNLIK SAVDO MAQSADI",
                            "store_status": "Do'kon holati",
                            "store_open": "Ochiq",
                            "store_closed": "Yopiq",
                            "store_open_desc": "Hozirda do'kon ochiq va buyurtmalar qabul qilinmoqda.",
                            "store_closed_desc": "Hozirda do'kon yopiq va buyurtmalar qabul qilinmaydi.",
                            "quick_actions": "Tezkor amallar",
                            "new_product": "Yangi mahsulot",
                            "sort_orders": "Buyurtmalar",
                            "print_report": "Chop etish"
                        },
                        "menu": { "title": "Menyuni boshqarish" }
                    },
                    "footer": {
                        "admin_access": "ADMIN PANEL"
                    },
                    "courier": {
                        "title": "Kuryer Paneli",
                        "my_orders": "Mening buyurtmalarim",
                        "available_orders": "Mavjud buyurtmalar",
                        "no_active_orders": "Sizda hozircha yetkazilayotgan buyurtmalar yo'q.",
                        "no_available_orders": "Hozircha yangi buyurtmalar mavjud emas.",
                        "delivered_success": "Buyurtma muvaffaqiyatli yetkazildi! ✅",
                        "delivered_btn": "YETKAZDIM"
                    },
                    "profile": {
                        "welcome": "Xush kelibsiz!",
                        "bonus_balance": "Bonus balansi",
                        "save_btn": "SAQLASH",
                        "save_success": "Raqamingiz muvaffaqiyatli saqlandi! ✅",
                        "status": "STATUS",
                        "level_progress": "Daraja ko'rsatkichi",
                        "next_level_hint": "Yana {{count}} ta buyurtma keyingi daraja uchun",
                        "tg_linked": "Telegram Ulangan",
                        "tg_bot": "Telegram Bot",
                        "tg_success": "Sizning hisobingiz Telegram botimiz bilan muvaffaqiyatli bog'langan! ✅",
                        "tg_hint": "Buyurtma holatini kuzatish uchun botimizni ulashni unutmang!",
                        "linked": "ULANGAN",
                        "order_history": "Buyurtmalar tarixi",
                        "reorder_btn": "Qayta buyurtma"
                    },
                    "order_status": {
                        "total": "Jami",
                        "steps": {
                            "accepted": "Tushdi",
                            "preparing": "Pishmoqda",
                            "shipping": "Yo'lda",
                            "delivered": "Bajarildi"
                        }
                    },
                    "specials": {
                        "title": "MAXSUS TAKLIFLAR",
                        "subtitle": "ENG MAZALI KOMBOLAR",
                        "items": {
                            "c1": {
                                "title": "Family Pizza Combo",
                                "desc": "Katta pitssa, 4ta kola va fri. Butun oila uchun ajoyib tanlov.",
                                "ing1": "Katta Pitssa", "ing2": "4x Coca-Cola", "ing3": "Katta Fri", "ing4": "Souslar"
                            },
                            "c2": {
                                "title": "Double Cheese Combo",
                                "desc": "Ikki barobar pishloqli burger, fri va salqin ichimlik.",
                                "ing1": "Cheese Burger", "ing2": "O'rta Fri", "ing3": "Coca-Cola", "ing4": "Pishloqli Sous"
                            },
                            "c3": {
                                "title": "Black Star Mega",
                                "desc": "Eng mashhur burgerimiz kombo ko'rinishida. 30% chegirma bilan!",
                                "ing1": "Black Star Special", "ing2": "Qishloqcha Fri", "ing3": "Milkshake", "ing4": "Piyozli xalqalar"
                            },
                            "c4": {
                                "title": "Classic Burger Set",
                                "desc": "An'anaviy ta'm sevuvchilar uchun klassik burger va yon taomlar.",
                                "ing1": "Beef Burger", "ing2": "Fri", "ing3": "Fanta", "ing4": "Ketçup"
                            }
                        }
                    }
                }
            },
            ru: {
                translation: {
                    "common": {
                        "thanks": "Спасибо!",
                        "sending": "ОТПРАВКА...",
                        "error_occurred": "Ошибка.",
                        "success": "Успешно!",
                        "yes": "Да",
                        "no": "Нет",
                        "save": "Сохранить",
                        "cancel": "Отмена"
                    },
                    "navbar": {
                        "home": "ГЛАВНАЯ",
                        "menu": "МЕНЮ",
                        "about": "О НАС",
                        "logout": "Выйти"
                    },
                    "hero": {
                        "order_now": "ЗАКАЗАТЬ",
                        "view_menu": "ПОСМОТРЕТЬ МЕНЮ",
                        "out_of_stock": "НЕТ В НАЛИЧИИ",
                        "buy_now": "Купить",
                        "slides": {
                            "slide1": {
                                "subtitle": "ПРЕМИУМ КАЧЕСТВО",
                                "title": "BLACK STAR СПЕЦИАЛ",
                                "desc": "Настоящая 100% говядина, фирменная черная булка и наш секретный соус.",
                                "ing1": "100% Халяльное Мясо",
                                "ing2": "Свежая Булка",
                                "ing3": "Секретный Соус",
                                "ing4": "Черная булка"
                            },
                            "slide2": {
                                "subtitle": "ВКУСНЫЙ ВЫБОР",
                                "title": "ЧИКЕН ЧИЗ БУРГЕР",
                                "desc": "Сочетание нежного куриного мяса, плавленого сыра и свежих овощей.",
                                "ing1": "Куриное Мясо",
                                "ing2": "Сыр",
                                "ing3": "Помидор",
                                "ing4": "Специальный Соус"
                            },
                            "slide3": {
                                "subtitle": "ОСТРЫЙ ВКУС",
                                "title": "МЕКСИКАНСКИЙ БУРГЕР",
                                "desc": "Огненный бургер с острым перцем и специальными специями.",
                                "ing1": "Говядина",
                                "ing2": "Халапеньо",
                                "ing3": "Острый Соус",
                                "ing4": "Сыр"
                            },
                            "slide4": {
                                "subtitle": "КЛАССИЧЕСКОЕ КАЧЕСТВО",
                                "title": "ДАБЛ БИФ БУРГЕР",
                                "desc": "В два раза больше мяса и в два раза больше вкуса.",
                                "ing1": "2x Говядина",
                                "ing2": "Классическая Булка",
                                "ing3": "Листья Салата",
                                "ing4": "Лук"
                            }
                        }
                    },
                    "home": {
                        "store_closed": "В данный момент магазин закрыт. Мы скоро вернемся!"
                    },
                    "loyalty_levels": {
                        "badge": "VIP ПРИВИЛЕГИИ",
                        "title": "ОПРЕДЕЛИТЕ ВАШ <span>УРОВЕНЬ</span>",
                        "desc": "Больше заказов - больше бонусов.",
                        "current_level": "ТЕКУЩИЙ УРОВЕНЬ",
                        "cashback": "КЭШБЭК",
                        "orders_remaining": "Еще {{count}} заказов",
                        "reached": "Уровень достигнут ✨",
                        "join_btn": "ЗАКАЗАТЬ",
                        "continue_btn": "ПРОДОЛЖИТЬ"
                    },
                    "mood_food": {
                        "trigger": "Магия",
                        "title": "Как ваше настроение?",
                        "pref_title": "Что желаете?",
                        "thinking": "ИИ выбирает лучшее для вас...",
                        "result_title": "Наш выбор для вас:",
                        "retry": "Попробовать снова"
                    },
                    "wheel_of_fortune": {
                        "trigger": "БОНУС!",
                        "title": "КОЛЕСО ФОРТУНЫ",
                        "desc": "Крутите колесо каждые 10 секунд и выигрывайте призы!",
                        "spin_btn": "КРУТИТЬ",
                        "spinning": "КРУТИТСЯ...",
                        "win_title": "ПОЗДРАВЛЯЕМ!",
                        "win_msg": "Вы выиграли {{prize}}!",
                        "continue_btn": "ПРОДОЛЖИТЬ"
                    },
                    "support_chat": {
                        "trigger": "Связь с админом",
                        "placeholder": "Напишите сообщение...",
                        "auto_reply": "Ваше сообщение отправлено админу. Скоро ответим! 😊"
                    },
                    "admin": {
                        "dashboard": {
                            "store_status": "Статус магазина",
                            "store_open": "Открыто",
                            "store_closed": "Закрыто"
                        }
                    },
                    "flash_deals": {
                        "badge": "ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ"
                    },
                    "cart": {
                        "title": "Корзина",
                        "info_title": "Информация",
                        "verify_title": "Верификация",
                        "payment_title": "Оплата",
                        "empty": "Ваша корзина пуста",
                        "checkout_btn": "ОФОРМИТЬ ЗАКАЗ",
                        "back_to_cart": "Вернуться в корзину",
                        "back_to_info": "Назад к информации",
                        "coupon_placeholder": "ПРОМОКОД",
                        "coupon_success": "Промокод применен",
                        "coupon_error": "Неверный промокод",
                        "use_bonuses": "Использовать бонусы",
                        "bonus_available": "есть",
                        "upsell_title": "ДОПОЛНИТЕ ВАШ ЗАКАЗ",
                        "combo_title": "СДЕЛАЙТЕ КОМБО!",
                        "combo_desc": "Добавьте <b>Колу</b> и <b>Фри</b> к этому бургеру и сэкономьте 30%!",
                        "add_btn": "ДОБАВИТЬ",
                        "send_code": "ОТПРАВИТЬ КОД",
                        "verify_desc": "Мы отправили код на номер +{{phone}}.",
                        "bot_fallback": "Код не пришел? Перейдите в бот:",
                        "bot_btn": "ПЕРЕЙТИ В БОТ",
                        "enter_code": "Введите код",
                        "verify_btn": "ПОДТВЕРДИТЬ",
                        "resend_code": "Отправить повторно",
                        "payment_method": "Способ оплаты",
                        "cash_terminal": "Наличные или Терминал",
                        "payme": "Payme",
                        "click": "CLICK",
                        "confirm_payment": "Подтверждаете оплату?",
                        "pay_yes": "ДА",
                        "pay_no": "НЕТ",
                        "loyalty_title": "УРОВЕНЬ ЛОЯЛЬНОСТИ",
                        "cashback_text": "кэшбэк",
                        "marathon_title": "БУРГЕР МАРАФОН",
                        "claim_reward": "ПОЛУЧИТЬ ПРИЗ",
                        "next_level": "До следующего уровня",
                        "next_level_suffix": "ШТ",
                        "surge_title": "ВЫСОКИЙ СПРОС",
                        "surge_desc": "Сейчас много заказов, стоимость доставки может быть выше",
                        "form": {
                            "name": "Имя",
                            "surname": "Фамилия",
                            "phone": "Телефон",
                            "address": "Адрес",
                            "time": "Время",
                            "asap": "Как можно быстрее",
                            "name_placeholder": "Ваше имя",
                            "surname_placeholder": "Ваша фамилия",
                            "address_placeholder": "Введите адрес",
                            "map_btn": "КАРТА"
                        },
                        "summary": {
                            "subtotal": "Подытог",
                            "discount": "Скидка",
                            "bonus": "Бонусы",
                            "delivery": "Доставка",
                            "free": "Бесплатно",
                            "total": "Итого"
                        }
                    },
                    "courier": {
                        "title": "Панель Курьера",
                        "my_orders": "Мои заказы",
                        "available_orders": "Доступные заказы",
                        "no_active_orders": "У вас пока нет активных заказов.",
                        "no_available_orders": "Новых заказов пока нет.",
                        "delivered_success": "Заказ успешно доставлен! ✅",
                        "delivered_btn": "ДОСТАВЛЕНО"
                    },
                    "profile": {
                        "welcome": "Добро пожаловать!",
                        "bonus_balance": "Бонусный баланс",
                        "save_btn": "СОХРАНИТЬ",
                        "save_success": "Номер успешно сохранен! ✅",
                        "status": "СТАТУС",
                        "level_progress": "Прогресс уровня",
                        "next_level_hint": "Еще {{count}} заказов до следующего уровня",
                        "tg_linked": "Telegram подключен",
                        "tg_bot": "Telegram Бот",
                        "tg_success": "Ваш аккаунт успешно связан с нашим Telegram ботом! ✅",
                        "tg_hint": "Не забудьте подключить бота, чтобы следить за заказом!",
                        "linked": "ПОДКЛЮЧЕНО",
                        "order_history": "История заказов",
                        "reorder_btn": "Повторить заказ"
                    },
                    "order_status": {
                        "total": "Итого",
                        "steps": {
                            "accepted": "Принят",
                            "preparing": "Готовится",
                            "shipping": "В пути",
                            "delivered": "Доставлен"
                        }
                    },
                    "specials": {
                        "title": "СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ",
                        "subtitle": "САМЫЕ ВКУСНЫЕ КОМБО",
                        "items": {
                            "c1": {
                                "title": "Family Pizza Combo",
                                "desc": "Большая пицца, 4 колы и фри. Отличный выбор для всей семьи.",
                                "ing1": "Большая Пицца", "ing2": "4x Coca-Cola", "ing3": "Большой Фри", "ing4": "Соусы"
                            },
                            "c2": {
                                "title": "Double Cheese Combo",
                                "desc": "Бургер с двойным сыром, картофель фри и прохладительный напиток.",
                                "ing1": "Чизбургер", "ing2": "Средний Фри", "ing3": "Coca-Cola", "ing4": "Сырный Соус"
                            },
                            "c3": {
                                "title": "Black Star Mega",
                                "desc": "Наш самый популярный бургер в виде комбо. Со скидкой 30%!",
                                "ing1": "Black Star Special", "ing2": "Картофель по-деревенски", "ing3": "Милкшейк", "ing4": "Луковые кольца"
                            },
                            "c4": {
                                "title": "Classic Burger Set",
                                "desc": "Классический бургер и гарниры для любителей традиционного вкуса.",
                                "ing1": "Beef Burger", "ing2": "Картофель Фри", "ing3": "Fanta", "ing4": "Кетчуп"
                            }
                        }
                    }
                }
            },
            en: {
                translation: {
                    "common": {
                        "thanks": "Thank you!",
                        "sending": "SENDING...",
                        "error_occurred": "Error.",
                        "success": "Success!",
                        "yes": "Yes",
                        "no": "No",
                        "save": "Save",
                        "cancel": "Cancel"
                    },
                    "navbar": {
                        "home": "HOME",
                        "menu": "MENU",
                        "about": "ABOUT US",
                        "logout": "Logout"
                    },
                    "hero": {
                        "order_now": "ORDER NOW",
                        "view_menu": "VIEW MENU",
                        "out_of_stock": "OUT OF STOCK",
                        "buy_now": "Buy Now",
                        "slides": {
                            "slide1": {
                                "subtitle": "PREMIUM QUALITY",
                                "title": "BLACK STAR SPECIAL",
                                "desc": "Real 100% beef, special black bun and our secret sauce.",
                                "ing1": "100% Halal Beef",
                                "ing2": "Fresh Baked Bun",
                                "ing3": "Special Secret Sauce",
                                "ing4": "Black Bun"
                            },
                            "slide2": {
                                "subtitle": "DELICIOUS CHOICE",
                                "title": "CHICKEN CHEESE BURGER",
                                "desc": "A perfect blend of tender chicken, melted cheese and fresh vegetables.",
                                "ing1": "Chicken Meat",
                                "ing2": "Cheese",
                                "ing3": "Tomato",
                                "ing4": "Special Sauce"
                            },
                            "slide3": {
                                "subtitle": "SPICY TASTE",
                                "title": "SPICY MEXICAN BURGER",
                                "desc": "A fiery burger with chili peppers and special spices.",
                                "ing1": "Beef",
                                "ing2": "Jalapeño",
                                "ing3": "Spicy Sauce",
                                "ing4": "Cheese"
                            },
                            "slide4": {
                                "subtitle": "CLASSIC QUALITY",
                                "title": "DOUBLE BEEF BURGER",
                                "desc": "Double the meat and double the flavor.",
                                "ing1": "2x Beef",
                                "ing2": "Classic Bun",
                                "ing3": "Lettuce",
                                "ing4": "Onions"
                            }
                        }
                    },
                    "home": {
                        "store_closed": "The store is currently closed. We'll be back soon!"
                    },
                    "loyalty_levels": {
                        "badge": "VIP PRIVILEGES",
                        "title": "DEFINE YOUR <span>LEVEL</span>",
                        "desc": "More orders, more benefits.",
                        "current_level": "CURRENT LEVEL",
                        "cashback": "CASHBACK",
                        "orders_remaining": "{{count}} orders remaining",
                        "reached": "Level reached ✨",
                        "join_btn": "ORDER NOW",
                        "continue_btn": "CONTINUE"
                    },
                    "mood_food": {
                        "trigger": "Magic Box",
                        "title": "How is your mood today?",
                        "pref_title": "What do you want?",
                        "thinking": "AI is choosing the best for you...",
                        "result_title": "Our recommendation:",
                        "retry": "Try again"
                    },
                    "wheel_of_fortune": {
                        "trigger": "BONUS!",
                        "title": "WHEEL OF FORTUNE",
                        "desc": "Spin the wheel every 10 seconds and win prizes!",
                        "spin_btn": "SPIN",
                        "spinning": "SPINNING...",
                        "win_title": "CONGRATULATIONS!",
                        "win_msg": "You won {{prize}}!",
                        "continue_btn": "CONTINUE"
                    },
                    "support_chat": {
                        "trigger": "Contact Admin",
                        "placeholder": "Type a message...",
                        "auto_reply": "Message sent to admin. We'll reply soon! 😊"
                    },
                    "admin": {
                        "dashboard": {
                            "store_status": "Store Status",
                            "store_open": "Open",
                            "store_closed": "Closed"
                        }
                    },
                    "flash_deals": {
                        "badge": "HOT DEAL"
                    },
                    "cart": {
                        "title": "Shopping Cart",
                        "info_title": "Information",
                        "verify_title": "Verification",
                        "payment_title": "Payment",
                        "empty": "Your cart is empty",
                        "checkout_btn": "PLACE ORDER",
                        "back_to_cart": "Back to cart",
                        "back_to_info": "Back to info",
                        "coupon_placeholder": "PROMOCODE",
                        "coupon_success": "Code applied",
                        "coupon_error": "Invalid code",
                        "use_bonuses": "Use bonuses",
                        "bonus_available": "available",
                        "upsell_title": "UPGRADE YOUR MEAL",
                        "combo_title": "MAKE IT COMBO!",
                        "combo_desc": "Add <b>Cola</b> and <b>Fries</b> and save 30%!",
                        "add_btn": "ADD",
                        "send_code": "SEND CODE",
                        "verify_desc": "We sent a code to +{{phone}}.",
                        "bot_fallback": "Didn't get the code? Go to our bot:",
                        "bot_btn": "GO TO BOT",
                        "enter_code": "Enter code",
                        "verify_btn": "VERIFY",
                        "resend_code": "Resend code",
                        "payment_method": "Payment Method",
                        "cash_terminal": "Cash or Terminal",
                        "payme": "Payme",
                        "click": "CLICK",
                        "confirm_payment": "Confirm payment?",
                        "pay_yes": "YES",
                        "pay_no": "NO",
                        "loyalty_title": "LOYALTY LEVEL",
                        "cashback_text": "cashback",
                        "marathon_title": "BURGER MARATHON",
                        "claim_reward": "CLAIM REWARD",
                        "next_level": "To next level",
                        "next_level_suffix": "PCS",
                        "surge_title": "HIGH DEMAND",
                        "surge_desc": "Many orders right now, delivery price might be higher",
                        "form": {
                            "name": "Name",
                            "surname": "Surname",
                            "phone": "Phone",
                            "address": "Address",
                            "time": "Time",
                            "asap": "As soon as possible",
                            "name_placeholder": "Your name",
                            "surname_placeholder": "Your surname",
                            "address_placeholder": "Enter address",
                            "map_btn": "MAP"
                        },
                        "summary": {
                            "subtotal": "Subtotal",
                            "discount": "Discount",
                            "bonus": "Bonus",
                            "delivery": "Delivery",
                            "free": "Free",
                            "total": "Total"
                        }
                    },
                    "profile": {
                        "welcome": "Welcome!",
                        "bonus_balance": "Bonus balance",
                        "save_btn": "SAVE",
                        "save_success": "Number saved successfully! ✅",
                        "status": "STATUS",
                        "level_progress": "Level progress",
                        "next_level_hint": "{{count}} more orders for next level",
                        "tg_linked": "Telegram Linked",
                        "tg_bot": "Telegram Bot",
                        "tg_success": "Your account has been successfully linked with our Telegram bot! ✅",
                        "tg_hint": "Don't forget to link the bot to track your order status!",
                        "linked": "LINKED",
                        "order_history": "Order history",
                        "reorder_btn": "Reorder"
                    },
                    "order_status": {
                        "total": "Total",
                        "steps": {
                            "accepted": "Accepted",
                            "preparing": "Preparing",
                            "shipping": "Shipping",
                            "delivered": "Delivered"
                        }
                    },
                    "specials": {
                        "title": "SPECIAL OFFERS",
                        "subtitle": "BEST COMBO DEALS",
                        "items": {
                            "c1": {
                                "title": "Family Pizza Combo",
                                "desc": "Large pizza, 4 colas, and fries. A great choice for the whole family.",
                                "ing1": "Large Pizza", "ing2": "4x Coca-Cola", "ing3": "Large Fries", "ing4": "Sauces"
                            },
                            "c2": {
                                "title": "Double Cheese Combo",
                                "desc": "Double cheese burger, medium fries, and a refreshing drink.",
                                "ing1": "Cheese Burger", "ing2": "Medium Fries", "ing3": "Coca-Cola", "ing4": "Cheese Sauce"
                            },
                            "c3": {
                                "title": "Black Star Mega",
                                "desc": "Our most popular burger in a combo set. Now with 30% off!",
                                "ing1": "Black Star Special", "ing2": "Potato Wedges", "ing3": "Milkshake", "ing4": "Onion Rings"
                            },
                            "c4": {
                                "title": "Classic Burger Set",
                                "desc": "Classic burger and sides for lovers of traditional taste.",
                                "ing1": "Beef Burger", "ing2": "French Fries", "ing3": "Fanta", "ing4": "Ketchup"
                            }
                        }
                    }
                }
            }
        },
        fallbackLng: 'uz',
        debug: true,
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie']
        },
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
