import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import { FaTimes, FaMinus, FaPlus, FaTrashAlt, FaArrowLeft, FaCreditCard, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import MapPicker from '../Map/MapPicker';
import Receipt from './Receipt';
import './CartDrawer.css';

const CartDrawer = () => {
    const { t } = useTranslation();
    const {
        isCartOpen, setIsCartOpen, cartItems, cartTotal, updateQuantity, removeFromCart,
        clearCart, placeOrder, updateOrderStatus, discount, finalTotal, applyCoupon, appliedCoupon,
        sendVerificationCode, telegramSettings, bonuses, useBonuses, setUseBonuses, bonusToUse, discountAmount,
        userStats, addToCart, deliveryFee, setDeliveryFee, isSurgeActive, surgeMultiplier,
        getRecommendedItems = () => [], finalDeliveryFee = 0, claimLoyaltyReward = () => { }, sendTelegramNotification = () => { }
    } = useCart();

    const getStatusInfo = (level) => {
        const info = {
            'BRONZE': { color: '#cd7f32', label: 'BRONZE', rate: '5%' },
            'SILVER': { color: '#c0c0c0', label: 'SILVER', rate: '7%' },
            'GOLD': { color: '#ffd700', label: 'GOLD', rate: '10%' }
        };
        return info[level] || info['BRONZE'];
    };

    const statusInfo = getStatusInfo(userStats.level);
    const [orderDetails, setOrderDetails] = useState(null);
    const [couponCode, setCouponCode] = useState('');
    const [step, setStep] = useState('cart'); // 'cart', 'info', 'verification', 'payment'
    const [customerInfo, setCustomerInfo] = useState({ name: '', surname: '', phone: '+998', address: '' });
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'payme', 'click'
    const [generatedCode, setGeneratedCode] = useState('');
    const [userCode, setUserCode] = useState('');
    const [preOrderTime, setPreOrderTime] = useState('ASAP');
    const [resendCountdown, setResendCountdown] = useState(0);

    React.useEffect(() => {
        let timer;
        if (resendCountdown > 0) {
            timer = setInterval(() => {
                setResendCountdown(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [resendCountdown]);

    const handleCheckoutClick = () => {
        if (cartItems.length > 0) {
            setStep('info');
        }
    };

    const handleInfoSubmit = (e) => {
        if (e) e.preventDefault();
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedCode(code);
        sendVerificationCode(customerInfo.phone, code);
        setStep('verification');
        setResendCountdown(60);
    };

    const handleVerificationSubmit = (e) => {
        e.preventDefault();
        if (userCode === generatedCode) {
            setStep('payment');
        } else {
            alert(t('cart.verify_error', 'Xato kod! Qaytadan urinib ko\'ring.'));
        }
    };

    const handlePaymentConfirm = (success) => {
        const orderId = Math.floor(100000 + Math.random() * 900000);
        const date = new Date().toLocaleString();
        const customerName = `${customerInfo.name} ${customerInfo.surname}`;

        const newOrder = {
            items: [...cartItems],
            total: finalTotal + finalDeliveryFee,
            orderId,
            date,
            customer: customerName,
            phone: customerInfo.phone,
            address: customerInfo.address,
            preOrderTime,
            status: success ? 'pending' : 'cancelled'
        };

        placeOrder(newOrder);
        if (success) {
            sendTelegramNotification(newOrder);
        }
        setOrderDetails(newOrder);
        setStep('cart');
        clearCart();
    };

    const closeReceipt = () => {
        setOrderDetails(null);
        setIsCartOpen(false);
    };

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        const result = applyCoupon(couponCode);
        if (!result.success) {
            alert(result.message);
        }
    };

    const hasBurger = cartItems.some(item => item.category === 'BURGERS');
    const hasComboExtras = cartItems.some(item => item.id === 4 || item.id === 6);

    const makeItCombo = () => {
        // Add Fries and Cola
        const fries = { id: 4, name: 'French Fries', price: '$4.00', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop', category: 'SIDES' };
        const cola = { id: 6, name: 'Coca Cola', price: '$2.50', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop', category: 'DRINKS' };
        addToCart(fries);
        addToCart(cola);
    };

    return (
        <>
            {isCartOpen && (
                <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
                    <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <div className="cart-header">
                            <h2>
                                {step === 'cart' && t('cart.title')}
                                {step === 'info' && t('cart.info_title')}
                                {step === 'verification' && t('cart.verify_title')}
                                {step === 'payment' && t('cart.payment_title')}
                            </h2>
                            <button className="close-cart" onClick={() => setIsCartOpen(false)}>
                                <FaTimes />
                            </button>
                        </div>

                        <div className="cart-body">
                            {step === 'cart' && (
                                <>
                                    <div className="loyalty-card-premium" style={{ '--level-color': statusInfo.color }}>
                                        <div className="loyalty-main">
                                            <div className="badge-glow" style={{ backgroundColor: statusInfo.color }}></div>
                                            <div className="level-badge">
                                                <span className="level-icon">🏆</span>
                                                <span className="level-name">{statusInfo.label}</span>
                                            </div>
                                            <div className="loyalty-details">
                                                <h4>{t('cart.loyalty_title')}</h4>
                                                <p>{statusInfo.rate} {t('cart.cashback_text')}</p>
                                            </div>
                                        </div>

                                        <div className="stamps-section">
                                            <p className="stamps-title">{t('cart.marathon_title')}: <span>{userStats.loyaltyStamps || 0}/5</span></p>
                                            <div className="stamps-grid">
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <div key={i} className={`stamp ${i <= (userStats.loyaltyStamps || 0) ? 'active' : ''}`}>
                                                        🍔
                                                    </div>
                                                ))}
                                            </div>
                                            {userStats.loyaltyStamps >= 5 && (
                                                <button className="claim-reward-btn" onClick={claimLoyaltyReward}>
                                                    {t('cart.claim_reward')}
                                                </button>
                                            )}
                                        </div>

                                        {userStats.level !== 'GOLD' && (
                                            <div className="progress-to-next">
                                                <div className="progress-bar">
                                                    <div
                                                        className="progress-fill"
                                                        style={{
                                                            width: `${(userStats.totalOrders % 5) * 20}%`,
                                                            backgroundColor: statusInfo.color
                                                        }}
                                                    ></div>
                                                </div>
                                                <span>{t('cart.next_level')}: {userStats.level === 'BRONZE' ? 5 - userStats.totalOrders : 15 - userStats.totalOrders} {t('cart.next_level_suffix', 'TA')}</span>
                                            </div>
                                        )}
                                    </div>

                                    {isSurgeActive && (
                                        <div className="surge-warning-card">
                                            <div className="surge-icon">⚡</div>
                                            <div className="surge-text">
                                                <h4>{t('cart.surge_title')}</h4>
                                                <p>{t('cart.surge_desc')} (x{surgeMultiplier}).</p>
                                            </div>
                                        </div>
                                    )}
                                    {cartItems.length === 0 ? (
                                        <div className="empty-cart">
                                            <FaTrashAlt />
                                            <p>{t('cart.empty')}</p>
                                            <button className="empty-close-btn" onClick={() => setIsCartOpen(false)}>
                                                {t('navbar.logout').toUpperCase()}
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="cart-items-list">
                                            {cartItems.map(item => (
                                                <div key={item.id} className="cart-item">
                                                    <div className="item-img">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="item-details">
                                                        <h4>{item.name}</h4>
                                                        <div className="drawer-item-price-group">
                                                            {item.originalPrice && (
                                                                <span className="drawer-item-original-price">{item.originalPrice}</span>
                                                            )}
                                                            <p className="item-price">{item.price}</p>
                                                        </div>
                                                        <div className="quantity-controls">
                                                            <button onClick={() => updateQuantity(item.id, -1)}><FaMinus /></button>
                                                            <span>{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item.id, 1)}><FaPlus /></button>
                                                        </div>
                                                    </div>
                                                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                                        <FaTrashAlt />
                                                    </button>
                                                </div>
                                            ))}

                                            {hasBurger && !hasComboExtras && (
                                                <div className="combo-suggest-card">
                                                    <div className="combo-info">
                                                        <span className="combo-badge">{t('cart.combo_title')}</span>
                                                        <p dangerouslySetInnerHTML={{ __html: t('cart.combo_desc') }}></p>
                                                    </div>
                                                    <button className="add-combo-btn" onClick={makeItCombo}>{t('cart.add_btn')}</button>
                                                </div>
                                            )}

                                            <form className="coupon-form" onSubmit={handleApplyCoupon}>
                                                <input
                                                    type="text"
                                                    placeholder={t('cart.coupon_placeholder')}
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                                                />
                                                <button type="submit">OK</button>
                                            </form>
                                            {appliedCoupon && (
                                                <p className="applied-coupon-text">{t('cart.coupon_success')}: <strong>{appliedCoupon} (-{discount}%)</strong></p>
                                            )}
                                            {useBonuses && bonuses > 0 && (
                                                <div className="bonus-usage">
                                                    <label className="bonus-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={useBonuses}
                                                            onChange={(e) => setUseBonuses(e.target.checked)}
                                                        />
                                                        <span className="bonus-text"> {t('cart.use_bonuses')} (${bonuses.toFixed(2)} {t('cart.bonus_available', 'bor')})</span>
                                                    </label>
                                                </div>
                                            )}

                                            {/* Upselling Section */}
                                            <div className="upsell-section">
                                                <h4>{t('cart.upsell_title')}</h4>
                                                <div className="upsell-items">
                                                    {typeof getRecommendedItems === 'function' && getRecommendedItems(cartItems).map(item => (
                                                        <div key={item.id} className="upsell-item" onClick={() => addToCart(item)}>
                                                            <img src={item.image} alt={item.name} />
                                                            <span>{item.name}</span>
                                                        </div>
                                                    ))}
                                                    {/* Fallback if all categories present */}
                                                    {typeof getRecommendedItems === 'function' && getRecommendedItems(cartItems).length === 0 && (
                                                        <>
                                                            <div className="upsell-item" onClick={() => addToCart({ id: 5, name: 'Onion Rings', price: '$5.50', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop', category: 'SIDES' })}>
                                                                <img src="https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop" alt="Onion Rings" />
                                                                <span>Onion Rings</span>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {step === 'info' && (
                                <form className="checkout-form" onSubmit={handleInfoSubmit}>
                                    <button type="button" className="back-to-cart" onClick={() => setStep('cart')}>
                                        <FaArrowLeft /> {t('cart.back_to_cart')}
                                    </button>
                                    <div className="form-group">
                                        <label>{t('cart.form.name')}</label>
                                        <input
                                            type="text"
                                            placeholder={t('cart.form.name_placeholder')}
                                            value={customerInfo.name}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('cart.form.surname')}</label>
                                        <input
                                            type="text"
                                            placeholder={t('cart.form.surname_placeholder')}
                                            value={customerInfo.surname}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, surname: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('cart.form.phone')}</label>
                                        <input
                                            type="tel"
                                            placeholder="+998 -- --- -- --"
                                            value={customerInfo.phone}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                // Faqat +998 bilan boshlanishi va jami 13 ta belgi bo'lishini ta'minlash
                                                if (val.startsWith('+998')) {
                                                    const digitsOnly = val.substring(4).replace(/\D/g, '');
                                                    if (digitsOnly.length <= 9) {
                                                        setCustomerInfo({ ...customerInfo, phone: '+998' + digitsOnly });
                                                    }
                                                } else if (val.length < 4) {
                                                    setCustomerInfo({ ...customerInfo, phone: '+998' });
                                                }
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('cart.form.address')} ({t('cart.form.map_btn').toLowerCase()})</label>
                                        <div className="address-input-wrapper">
                                            <input
                                                type="text"
                                                placeholder={t('cart.form.address_placeholder')}
                                                value={customerInfo.address}
                                                onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                                                required
                                            />
                                            <button type="button" className="map-btn" onClick={() => setIsMapOpen(true)}>{t('cart.form.map_btn')}</button>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>{t('cart.form.time')}</label>
                                        <select
                                            className="preorder-select"
                                            value={preOrderTime}
                                            onChange={(e) => setPreOrderTime(e.target.value)}
                                        >
                                            <option value="ASAP">{t('cart.form.asap')}</option>
                                            <option value="18:00">18:00 gacha</option>
                                            <option value="19:00">19:00 gacha</option>
                                            <option value="20:00">20:00 gacha</option>
                                            <option value="21:00">21:00 gacha</option>
                                            <option value="22:00">22:00 gacha</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="confirm-btn">{t('cart.send_code')}</button>
                                </form>
                            )}

                            {step === 'verification' && (
                                <div className="verification-step">
                                    <button type="button" className="back-to-cart" onClick={() => setStep('info')}>
                                        <FaArrowLeft /> {t('cart.back_to_info')}
                                    </button>
                                    <div className="verification-info">
                                        <p>{t('cart.verify_desc', { phone: customerInfo.phone })}</p>
                                        <div className="bot-link-box">
                                            <p>{t('cart.bot_fallback')}</p>
                                            <a
                                                href={`https://t.me/${telegramSettings.botUsername}?start=verify`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bot-link-btn"
                                            >
                                                {t('cart.bot_btn')}
                                            </a>
                                        </div>
                                    </div>
                                    <form onSubmit={handleVerificationSubmit}>
                                        <div className="form-group">
                                            <label>{t('cart.enter_code')}</label>
                                            <input
                                                type="text"
                                                maxLength="4"
                                                placeholder="0000"
                                                value={userCode}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/\D/g, '');
                                                    setUserCode(val);
                                                }}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="confirm-btn">{t('cart.verify_btn')}</button>
                                    </form>
                                    <button
                                        className="resend-code"
                                        onClick={handleInfoSubmit}
                                        disabled={resendCountdown > 0}
                                    >
                                        {resendCountdown > 0 ? `${t('cart.resend_code')} (${resendCountdown}s)` : t('cart.resend_code')}
                                    </button>
                                </div>
                            )}

                            {step === 'payment' && (
                                <div className="payment-step">
                                    <div className="payment-methods">
                                        <h3>{t('cart.payment_method')}</h3>
                                        <div
                                            className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}
                                            onClick={() => setPaymentMethod('card')}
                                        >
                                            <FaCreditCard />
                                            <span>{t('cart.cash_terminal')}</span>
                                        </div>
                                        <div
                                            className={`payment-card ${paymentMethod === 'payme' ? 'active' : ''}`}
                                            onClick={() => setPaymentMethod('payme')}
                                        >
                                            <div className="pay-logo payme">Payme</div>
                                            <span>{t('cart.payme')}</span>
                                        </div>
                                        <div
                                            className={`payment-card ${paymentMethod === 'click' ? 'active' : ''}`}
                                            onClick={() => setPaymentMethod('click')}
                                        >
                                            <div className="pay-logo click">CLICK</div>
                                            <span>{t('cart.click')}</span>
                                        </div>
                                    </div>
                                    <div className="payment-actions">
                                        <p>{t('cart.confirm_payment')}</p>
                                        <button className="pay-confirm-btn" onClick={() => handlePaymentConfirm(true)}>
                                            {t('cart.pay_yes')}
                                        </button>
                                        <button className="pay-cancel-btn" onClick={() => handlePaymentConfirm(false)}>
                                            {t('cart.pay_no')}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {step === 'cart' && cartItems.length > 0 && (
                            <div className="cart-footer">
                                <div className="summary-details">
                                    <div className="total-row">
                                        <span>{t('cart.summary.subtotal')}:</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="total-row discount">
                                            <span>{t('cart.summary.discount')}:</span>
                                            <span>-${discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    {useBonuses && bonusToUse > 0 && (
                                        <div className="total-row bonus">
                                            <span>{t('cart.summary.bonus')}:</span>
                                            <span>-${bonusToUse.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="total-row delivery">
                                        <span>{t('cart.summary.delivery')} {isSurgeActive && <span className="surge-small">⚡ SURGE</span>}:</span>
                                        <span>{finalDeliveryFee === 0 ? t('cart.summary.free') : `$${finalDeliveryFee.toFixed(2)}`}</span>
                                    </div>
                                    <div className="total-row grand-total">
                                        <span>{t('cart.summary.total')}:</span>
                                        <span>${(finalTotal + finalDeliveryFee).toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="checkout-btn" onClick={handleCheckoutClick}>
                                    {t('cart.checkout_btn')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {orderDetails && (
                <Receipt
                    items={orderDetails.items}
                    total={orderDetails.total - 5}
                    orderId={orderDetails.orderId}
                    date={orderDetails.date}
                    customer={orderDetails.customer}
                    onClose={closeReceipt}
                    deliveryFee={deliveryFee}
                />
            )}

            {isMapOpen && (
                <MapPicker
                    onSelect={(addr, fee) => {
                        setCustomerInfo({ ...customerInfo, address: addr });
                        setDeliveryFee(fee);
                    }}
                    onClose={() => setIsMapOpen(false)}
                />
            )}
        </>
    );
};

export default CartDrawer;
