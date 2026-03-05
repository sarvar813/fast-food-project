import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { launchConfetti } from '../utils/confetti';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const { t } = useTranslation();
    const toast = useToast();
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true);
    const [backendStatus, setBackendStatus] = useState('checking');
    const [careerApplications, setCareerApplications] = useState([]);
    const [isStoreOpen, setIsStoreOpen] = useState(() => {
        const saved = localStorage.getItem('bsb_store_status');
        return saved !== null ? JSON.parse(saved) : true;
    });

    const [bonuses, setBonuses] = useState(() => {
        const saved = localStorage.getItem('bsb_bonuses');
        return saved ? parseFloat(saved) : 0;
    });

    const sounds = {
        cartAdd: 'https://assets.mixkit.co/active_storage/sfx/611/611-preview.mp3',
        success: 'https://assets.mixkit.co/active_storage/sfx/1110/1110-preview.mp3',
        error: 'https://assets.mixkit.co/active_storage/sfx/2361/2361-preview.mp3',
        click: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
        pop: 'https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3'
    };

    const playUXSound = (soundType) => {
        const audio = new Audio(sounds[soundType] || sounds.click);
        audio.volume = 0.4;
        audio.play().catch(e => console.log('Audio blocked', e));
    };
    const [useBonuses, setUseBonuses] = useState(false);
    const [deliveryFee, setDeliveryFee] = useState(5);
    const [surgeMultiplier, setSurgeMultiplier] = useState(1);
    const [isSurgeActive, setIsSurgeActive] = useState(false);
    const [userStats, setUserStats] = useState(() => {
        const saved = localStorage.getItem('bsb_user_stats');
        return saved ? JSON.parse(saved) : { totalOrders: 0, level: 'BRONZE' };
    });

    const [auditLogs, setAuditLogs] = useState(() => {
        const saved = localStorage.getItem('bsb_audit_logs');
        return saved ? JSON.parse(saved) : [];
    });

    const [siteSettings, setSiteSettings] = useState(() => {
        const saved = localStorage.getItem('bsb_site_settings');
        return saved ? JSON.parse(saved) : {
            bannerText: "Bugun barcha burgerlarga 50% chegirma!",
            bannerImage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
            primaryColor: "#e30034",
            isBannerActive: true
        };
    });


    const [staff, setStaff] = useState(() => {
        const saved = localStorage.getItem('bsb_staff');
        return saved ? JSON.parse(saved) : [
            { id: 101, name: "Dostonvok", role: "Chef", joined: "2024-01-15", status: "active" },
            { id: 102, name: "Madina", role: "Admin", joined: "2024-02-01", status: "active" },
            { id: 103, name: "Aziz", role: "Chef", joined: "2024-03-10", status: "vacation" }
        ];
    });

    const [coupons, setCoupons] = useState(() => {
        const saved = localStorage.getItem('bsb_coupons');
        return saved ? JSON.parse(saved) : [
            { code: 'NEW2026', discount: '20%', status: 'active' },
            { code: 'BSB50', discount: '50%', status: 'active' },
            { code: 'ALIBEK', discount: '10%', status: 'active' }
        ];
    });

    const [rewards, setRewards] = useState(() => {
        const saved = localStorage.getItem('bsb_rewards');
        return saved ? JSON.parse(saved) : [
            { id: 1, name: 'Tekin Coca-Cola', points: 500, status: 'active' },
            { id: 2, name: 'Tekin Fri', points: 800, status: 'active' },
            { id: 3, name: 'Black Burger', points: 1500, status: 'active' }
        ];
    });

    useEffect(() => {
        localStorage.setItem('bsb_career_apps', JSON.stringify(careerApplications));
    }, [careerApplications]);

    useEffect(() => {
        localStorage.setItem('bsb_staff', JSON.stringify(staff));
    }, [staff]);

    useEffect(() => {
        localStorage.setItem('bsb_coupons', JSON.stringify(coupons));
    }, [coupons]);

    useEffect(() => {
        localStorage.setItem('bsb_rewards', JSON.stringify(rewards));
    }, [rewards]);

    const addStaff = (member) => {
        setStaff(prev => [...prev, { ...member, id: Date.now(), joined: new Date().toISOString().split('T')[0], status: 'active' }]);
        toast.success(t('admin.staff_added', "Yangi xodim qo'shildi! 👨‍🍳"));
    };

    const deleteStaff = (id) => {
        setStaff(prev => prev.filter(s => s.id !== id));
        toast.error(t('admin.staff_deleted', "Xodim tizimdan o'chirildi."));
    };

    const updateStaff = (id, updatedData) => {
        setStaff(prev => prev.map(s => s.id === id ? { ...s, ...updatedData } : s));
        toast.info(t('admin.staff_updated', "Xodim ma'lumotlari yangilandi."));
    };

    const addCoupon = (coupon) => {
        setCoupons(prev => [...prev, { ...coupon, status: 'active' }]);
        toast.success(t('admin.coupon_created', "Yangi promokod yaratildi! 🎫"));
    };

    const deleteCoupon = (code) => {
        setCoupons(prev => prev.filter(c => c.code !== code));
        toast.warning(t('admin.coupon_deleted', "Promokod o'chirildi."));
    };

    const addReward = (reward) => {
        setRewards(prev => [...prev, { ...reward, id: Date.now(), status: 'active' }]);
        toast.success(t('admin.reward_added', "Yangi sovg'a qo'shildi! 🎁"));
    };

    const deleteReward = (id) => {
        setRewards(prev => prev.filter(r => r.id !== id));
        toast.error(t('admin.reward_deleted', "Sovg'a olib tashlandi."));
    };

    const submitCareerApplication = async (appData) => {
        try {
            const apiUrl = getApiUrl();
            const res = await fetch(`${apiUrl}/careers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appData)
            });
            if (res.ok) {
                fetchCareers();
                toast.success(t('careers.success', "Arizangiz muvaffaqiyatli yuborildi!"));
            }
        } catch (e) {
            console.error("Career submit error:", e);
            // Fallback for offline/local only
            const newApp = { ...appData, id: Date.now(), status: 'pending', date: new Date().toLocaleString() };
            setCareerApplications(prev => [newApp, ...prev]);
        }
    };

    const fetchCareers = async () => {
        try {
            const apiUrl = getApiUrl();
            const res = await fetch(`${apiUrl}/careers`);
            if (res.ok) {
                const data = await res.json();
                setCareerApplications(data);
            }
        } catch (e) {
            console.error("Careers fetch error:", e);
        }
    };

    const handleCareerAction = async (id, action) => {
        if (action === 'delete') {
            setCareerApplications(prev => prev.filter(a => String(a.id) !== String(id)));
            return;
        }

        try {
            const apiUrl = getApiUrl();
            const res = await fetch(`${apiUrl}/careers/action`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: parseInt(id),
                    status: action,
                    bot_token: telegramSettings.botToken
                })
            });
            if (res.ok) {
                fetchCareers();
            }
        } catch (e) {
            console.error("Career action error:", e);
        }
    };

    useEffect(() => {
        fetchCareers();
        const interval = setInterval(fetchCareers, 10000); // 10s
        return () => clearInterval(interval);
    }, []);

    const logAction = (admin, action, details) => {
        const newLog = {
            id: Date.now(),
            admin,
            action,
            details,
            time: new Date().toLocaleString()
        };
        setAuditLogs(prev => [newLog, ...prev].slice(0, 100)); // Keep last 100 logs
    };

    useEffect(() => {
        localStorage.setItem('bsb_audit_logs', JSON.stringify(auditLogs));
    }, [auditLogs]);

    useEffect(() => {
        localStorage.setItem('bsb_site_settings', JSON.stringify(siteSettings));
    }, [siteSettings]);

    const [lastAutoHour, setLastAutoHour] = useState(new Date().getHours());

    useEffect(() => {
        localStorage.setItem('bsb_bonuses', bonuses.toString());
    }, [bonuses]);

    useEffect(() => {
        localStorage.setItem('bsb_store_status', JSON.stringify(isStoreOpen));
    }, [isStoreOpen]);

    const getApiUrl = () => {
        // Auto-detect local vs production
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return 'http://localhost:8000';
        }

        const envUrl = import.meta.env.VITE_API_URL;
        if (envUrl) return envUrl;

        return 'https://fast-food-final.onrender.com';
    };

    const fetchOrders = async () => {
        try {
            const apiUrl = getApiUrl();
            const res = await fetch(`${apiUrl}/orders`);

            if (res.ok) {
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const data = await res.json();

                    // If we have orders from server, use them
                    if (Array.isArray(data)) {
                        setOrders(data);
                        localStorage.setItem('bsb_orders', JSON.stringify(data));
                        setBackendStatus('online');
                    }
                } else {
                    console.warn("API returned non-JSON response.");
                    setBackendStatus('warning');
                    loadLocalOrders();
                }
            } else {
                setBackendStatus('offline');
                loadLocalOrders();
            }
        } catch (e) {
            console.error("Orders fetch error:", e);
            setBackendStatus('offline');
            loadLocalOrders();
        } finally {
            setOrdersLoading(false);
        }
    };

    const loadLocalOrders = () => {
        const saved = localStorage.getItem('bsb_orders');
        if (saved) {
            try {
                const localOrders = JSON.parse(saved);
                setOrders(localOrders);
            } catch (e) {
                console.error("Local orders parse error:", e);
            }
        }
    };

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 5000); // 5s refresh
        return () => clearInterval(interval);
    }, []);

    // Simulation removed: Backend now handles status progression automatically

    const [telegramSettings, setTelegramSettings] = useState(() => {
        const saved = localStorage.getItem('bsb_tg_settings');
        return saved ? JSON.parse(saved) : {
            botToken: '8177839279:AAFJp_FHnzHjmy0MNwmgEDkL4BCfZEt73G8',
            adminChatId: '7867408736',
            botUsername: 'Burger_Order_Fast_Food_bot',
            channelId: '@bsb_orders'
        };
    });

    useEffect(() => {
        localStorage.setItem('bsb_tg_settings', JSON.stringify(telegramSettings));
    }, [telegramSettings]);

    const sendTelegramNotification = async (order) => {
        const itemsText = (order.items || []).map(i => `• ${i.name || i.title || "Noma'lum mahsulot"} x${i.quantity || 1}`).join('\n');
        const text = `🚀 *YANGI BUYURTMA!* #${order.orderId}\n` +
            `👤 Mijoz: ${order.customer || order.customerName || "Noma'lum"}\n` +
            `📞 Tel: ${order.phone || order.customerPhone || "Noma'lum"}\n` +
            `🏠 Manzil: ${order.address || order.customerAddress || "Aniq emas"}\n` +
            `💰 Summa: $${order.total}\n` +
            `-------------------\n` +
            itemsText;

        try {
            await fetch(`https://api.telegram.org/bot${telegramSettings.botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: telegramSettings.adminChatId,
                    text,
                    parse_mode: 'Markdown'
                })
            });
        } catch (e) { console.error(e); }
    };

    const sendCustomerNotification = async (phone, text) => {
        const apiUrl = getApiUrl();
        try {
            await fetch(`${apiUrl}/send-message`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: phone,
                    text: text,
                    bot_token: telegramSettings.botToken
                })
            });
        } catch (e) {
            console.error("Failed to send customer notification:", e);
        }
    };

    const addToCart = (product) => {
        if (!isStoreOpen) {
            toast.error(t('home.store_closed'));
            return;
        }
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        toast.success(t('cart.added_to_cart', { name: product.name, defaultValue: `${product.name} savatchaga qo'shildi! 🛒` }));
        playUXSound('cartAdd');
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
        playUXSound('pop');
    };

    const updateQuantity = (productId, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === productId) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0);
    };

    const placeOrder = async (orderDetails) => {
        // Use items and total from orderDetails if provided to avoid race conditions with cart clearing
        const itemsToSave = orderDetails.items || [...cartItems];
        const totalToSave = orderDetails.total || (getCartTotal() + (isSurgeActive ? deliveryFee * surgeMultiplier : deliveryFee));

        const orderId = orderDetails.orderId || Math.floor(100000 + Math.random() * 900000);
        const newOrder = {
            ...orderDetails,
            orderId,
            items: itemsToSave,
            total: totalToSave,
            status: orderDetails.status || 'pending',
            date: orderDetails.date || new Date().toLocaleString()
        };

        try {
            const apiUrl = getApiUrl();
            const res = await fetch(`${apiUrl}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOrder)
            });

            if (res.ok) {
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const result = await res.json();
                    setOrders(prev => {
                        const exists = prev.find(o => o.orderId === result.orderId);
                        if (exists) return prev;
                        return [result, ...prev];
                    });

                    // Update user stats
                    const newStats = {
                        totalOrders: userStats.totalOrders + 1,
                        level: userStats.totalOrders + 1 >= 15 ? 'GOLD' : (userStats.totalOrders + 1 >= 5 ? 'SILVER' : 'BRONZE')
                    };
                    setUserStats(newStats);
                    localStorage.setItem('bsb_user_stats', JSON.stringify(newStats));

                    // Add bonuses (5% cashback)
                    const bonusEarned = (newOrder.total || 0) * 0.05;
                    setBonuses(prev => prev + bonusEarned);

                    sendTelegramNotification(result);

                    // Success UI actions
                    setCartItems([]);
                    launchConfetti();
                    playUXSound('success');

                    return result;
                }
            }

            // Fallback: Save locally if API fails or returns HTML
            console.warn("Saving order locally as fallback...");
            setOrders(prev => [newOrder, ...prev]);
            const currentSaved = JSON.parse(localStorage.getItem('bsb_orders') || '[]');
            localStorage.setItem('bsb_orders', JSON.stringify([newOrder, ...currentSaved]));

            // Success UI actions (even if local)
            setCartItems([]);
            launchConfetti();
            playUXSound('success');

            sendTelegramNotification(newOrder);
            return newOrder;

        } catch (e) {
            console.error("Order placement failed, fallback to local:", e);
            // Fallback
            setOrders(prev => [newOrder, ...prev]);
            const currentSaved = JSON.parse(localStorage.getItem('bsb_orders') || '[]');
            localStorage.setItem('bsb_orders', JSON.stringify([newOrder, ...currentSaved]));

            setCartItems([]);
            launchConfetti();
            playUXSound('success');

            sendTelegramNotification(newOrder);
            return newOrder;
        }
    };

    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            const apiUrl = getApiUrl();
            const res = await fetch(`${apiUrl}/orders/update-status`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId: orderId,
                    status: newStatus
                })
            });

            if (res.ok) {
                const updatedOrder = await res.json();
                setOrders(prev => prev.map(o => o.orderId === orderId ? updatedOrder : o));
                toast.success(t('admin.status_updated', { id: orderId, defaultValue: `Buyurtma #${orderId} holati yangilandi: ${newStatus}` }));
                return updatedOrder;
            }
        } catch (e) {
            console.error(e);
            // Fallback for local
            setOrders(prev => prev.map(o => o.orderId === orderId ? { ...o, status: newStatus } : o));
        }
    };

    const updateOrderDetails = (orderId, updatedData) => {
        setOrders(prev => prev.map(o => o.orderId === orderId ? { ...o, ...updatedData } : o));
    };

    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [discount, setDiscount] = useState(0);

    const clearCart = () => {
        setCartItems([]);
        setAppliedCoupon(null);
        setDiscount(0);
    };

    const applyCoupon = (code) => {
        const coupon = coupons.find(c => c.code === code && c.status === 'active');
        if (coupon) {
            setAppliedCoupon(code);
            const discValue = parseInt(coupon.discount);
            setDiscount(discValue);
            return { success: true, message: t('cart.coupon_success', "Promokod qo'llanildi!") };
        }
        return { success: false, message: t('cart.coupon_error', "Noto'g'ri yoki faol bo'lmagan promokod") };
    };

    const cartTotal = getCartTotal();
    const discountAmount = (cartTotal * discount) / 100;
    const bonusToUse = useBonuses ? Math.min(bonuses, cartTotal - discountAmount) : 0;
    const finalTotal = cartTotal - discountAmount - bonusToUse;
    const finalDeliveryFee = finalTotal >= 50 ? 0 : (isSurgeActive ? deliveryFee * surgeMultiplier : deliveryFee);

    const sendVerificationCode = async (phone, code) => {
        console.log(`Sending code ${code} to ${phone}`);
        const apiUrl = import.meta.env.VITE_API_URL || 'https://fast-food-final.onrender.com';

        try {
            const res = await fetch(`${apiUrl}/send-verification`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: phone,
                    code: code,
                    bot_token: telegramSettings.botToken
                })
            });

            if (res.ok) {
                const data = await res.json();
                console.log("Verification request result:", data);
            }
        } catch (e) {
            console.error("Failed to send verification code to backend:", e);
        }

        // Always also notify admin as fallback
        const text = `🔐 *VERIFIKATSIYA KODI*\n` +
            `📞 Telefon: ${phone}\n` +
            `🔢 Kod: *${code}*`;

        try {
            await fetch(`https://api.telegram.org/bot${telegramSettings.botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: telegramSettings.adminChatId,
                    text: text,
                    parse_mode: 'Markdown'
                })
            });
        } catch (e) { console.error(e); }
    };

    const getRecommendedItems = (currentItems) => {
        // Simple recommendation: suggested sides/drinks if not in cart
        const recommended = [];
        const hasSides = currentItems.some(i => i.category === 'SIDES');
        const hasDrinks = currentItems.some(i => i.category === 'DRINKS');

        if (!hasSides) {
            recommended.push({ id: 4, name: 'French Fries', price: '$4.00', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop', category: 'SIDES' });
        }
        if (!hasDrinks) {
            recommended.push({ id: 6, name: 'Coca Cola', price: '$2.50', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop', category: 'DRINKS' });
        }
        return recommended;
    };

    const claimLoyaltyReward = () => {
        if (userStats.loyaltyStamps >= 5) {
            setUserStats(prev => ({ ...prev, loyaltyStamps: 0 }));
            toast.success(t('cart.reward_claimed', "Sovg'a qabul qilindi! Kelasi safar bepul burger olasiz."));
        }
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems, cartCount, addToCart, removeFromCart, updateQuantity,
            isCartOpen, setIsCartOpen, getCartTotal, cartTotal, placeOrder,
            orders, ordersLoading, backendStatus, setBackendStatus, updateOrderStatus, updateOrderDetails,
            isStoreOpen, setIsStoreOpen, bonuses, setBonuses,
            userStats, playUXSound,
            telegramSettings, setTelegramSettings,
            sendTelegramNotification, sendCustomerNotification,
            auditLogs, setAuditLogs, logAction,
            siteSettings, setSiteSettings,
            careerApplications, handleCareerAction, submitCareerApplication, fetchCareers,
            staff, addStaff, deleteStaff, updateStaff,
            coupons, addCoupon, deleteCoupon,
            rewards, addReward, deleteReward,
            useBonuses, setUseBonuses, deliveryFee, surgeMultiplier, isSurgeActive,
            clearCart, discount, finalTotal, applyCoupon, appliedCoupon,
            sendVerificationCode, bonusToUse, discountAmount,
            getRecommendedItems, finalDeliveryFee, claimLoyaltyReward
        }}>
            {children}
        </CartContext.Provider>
    );
};
