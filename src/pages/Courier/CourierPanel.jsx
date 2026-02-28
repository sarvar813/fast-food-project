import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import { FaBox, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle, FaUserAlt, FaMotorcycle, FaListUl } from 'react-icons/fa';
import './CourierPanel.css';

const CourierPanel = () => {
    const { t } = useTranslation();
    const { orders, updateOrderStatus } = useCart();
    const courierOrders = orders.filter(o => o.status === 'shipping');

    const [activeTab, setActiveTab] = useState('my-orders');

    const handleDeliveryComplete = (orderId) => {
        updateOrderStatus(orderId, 'completed');
        alert(t('courier.delivered_success', 'Buyurtma muvaffaqiyatli yetkazildi! ✅'));
    };

    return (
        <div className="courier-panel">
            <div className="courier-header">
                <div className="c-user">
                    <FaMotorcycle className="c-icon" />
                    <div>
                        <h2>{t('courier.title', 'Kuryer Paneli')}</h2>
                        <span className="online-badge">Online</span>
                    </div>
                </div>
            </div>

            <div className="courier-tabs">
                <button
                    className={activeTab === 'my-orders' ? 'active' : ''}
                    onClick={() => setActiveTab('my-orders')}
                >
                    <FaBox /> {t('courier.my_orders', 'Mening buyurtmalarim')} ({courierOrders.length})
                </button>
                <button
                    className={activeTab === 'available' ? 'active' : ''}
                    onClick={() => setActiveTab('available')}
                >
                    <FaListUl /> {t('courier.available_orders', 'Mavjud buyurtmalar')}
                </button>
            </div>

            <div className="courier-content">
                {activeTab === 'my-orders' && (
                    <div className="order-cards">
                        {courierOrders.length === 0 ? (
                            <div className="empty-state">
                                <p>{t('courier.no_active_orders', "Sizda hozircha yetkazilayotgan buyurtmalar yo'q.")}</p>
                            </div>
                        ) : (
                            courierOrders.map(order => (
                                <div key={order.orderId} className="courier-order-card">
                                    <div className="order-header">
                                        <span className="order-id">#{order.orderId}</span>
                                        <span className="order-time">{order.date.split(',')[1]}</span>
                                    </div>
                                    <div className="customer-info">
                                        <div className="info-row">
                                            <FaUserAlt /> <strong>{order.customer}</strong>
                                        </div>
                                        <div className="info-row">
                                            <FaPhoneAlt /> <a href={`tel:${order.phone}`}>{order.phone}</a>
                                        </div>
                                        <div className="info-row">
                                            <FaMapMarkerAlt /> <span>{order.address}</span>
                                        </div>
                                    </div>
                                    <div className="order-footer">
                                        <button className="done-btn" onClick={() => handleDeliveryComplete(order.orderId)}>
                                            <FaCheckCircle /> {t('courier.delivered_btn', 'YETKAZDIM')}
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {activeTab === 'available' && (
                    <div className="empty-state">
                        <p>{t('courier.no_available_orders', "Hozircha yangi buyurtmalar mavjud emas.")}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourierPanel;
