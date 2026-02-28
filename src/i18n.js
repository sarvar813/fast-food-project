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
                            "pending": "Kutilmoqda",
                            "preparing": "Tayyorlanmoqda",
                            "shipping": "Yo'lda",
                            "completed": "Bajarildi",
                            "cancelled": "Bekor qilindi"
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
                    "cart": {
                        "title": "Savatchangiz",
                        "empty": "Savatchangiz bo'sh",
                        "checkout_btn": "BUYURTMA BERISH",
                        "form": {
                            "name": "Ism",
                            "phone": "Telefon",
                            "address": "Manzil"
                        },
                        "summary": {
                            "subtotal": "Subtotal",
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
                    "courier": {
                        "title": "Панель Курьера",
                        "my_orders": "Мои заказы",
                        "available_orders": "Доступные заказы",
                        "no_active_orders": "У вас пока нет активных заказов.",
                        "no_available_orders": "Новых заказов пока нет.",
                        "delivered_success": "Заказ успешно доставлен! ✅",
                        "delivered_btn": "ДОСТАВЛЕНО"
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
                    "courier": {
                        "title": "Courier Panel",
                        "my_orders": "My Orders",
                        "available_orders": "Available Orders",
                        "no_active_orders": "You have no active orders.",
                        "no_available_orders": "No new orders available.",
                        "delivered_success": "Order successfully delivered! ✅",
                        "delivered_btn": "DELIVERED"
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
