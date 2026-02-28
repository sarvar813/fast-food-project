import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { FaCheckCircle, FaClock, FaTruck, FaHome, FaShoppingBag, FaMotorcycle, FaMapMarkerAlt } from 'react-icons/fa';
import './OrderStatus.css';

const OrderStatus = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const { orders } = useCart();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const foundOrder = orders.find(o => String(o.orderId) === String(id));
        setOrder(foundOrder);
    }, [id, orders]);

    if (!order) {
        return (
            <div className="order-status-page empty">
                <div className="container">
                    <h2>{t('order_status.not_found_title')}</h2>
                    <p>{t('order_status.not_found_desc')}</p>
                    <Link to="/menu" className="back-btn">{t('order_status.back_to_menu')}</Link>
                </div>
            </div>
        );
    }

    const steps = [
        { status: 'pending', id: 'pending', label: t('order_status.steps.accepted'), icon: <FaCheckCircle /> },
        { status: 'preparing', id: 'preparing', label: t('order_status.steps.preparing'), icon: <FaClock /> },
        { status: 'shipping', id: 'shipping', label: t('order_status.steps.shipping'), icon: <FaTruck /> },
        { status: 'completed', id: 'completed', label: t('order_status.steps.delivered'), icon: <FaHome /> }
    ];

    const currentStepIndex = steps.findIndex(s => s.status === order.status);

    return (
        <div className="order-status-page">
            <div className="container">
                <div className="order-card">
                    <div className="order-header">
                        <h1>{t('order_status.title')}</h1>
                        <p className="order-id">ID: #{order.orderId}</p>
                        {order.status === 'completed' && (
                            <div className="thank-you-message">
                                <FaCheckCircle />
                                <h2>{t('order_status.thank_you')}</h2>
                                <p>{t('order_status.thank_you_desc')}</p>
                            </div>
                        )}
                    </div>

                    <div className="tracking-timeline" style={{ '--progress-width': `${(currentStepIndex / (steps.length - 1)) * 100}%` }}>
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`tracking-step ${index <= currentStepIndex ? 'active' : ''} ${index === currentStepIndex ? 'current' : ''}`}
                            >
                                <div className="step-icon">
                                    {step.icon}
                                </div>
                                <div className="step-label">{step.label}</div>
                                {index < steps.length - 1 && <div className="step-line"></div>}
                            </div>
                        ))}
                    </div>

                    <div className="order-details-box">
                        <h3>{t('order_status.details_title')}</h3>
                        <div className="order-items-list">
                            {order.items.map((item, i) => (
                                <div key={i} className="tracking-item">
                                    <span>{item.name} x{item.quantity}</span>
                                    <span>{item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="tracking-total">
                            <span>{t('order_status.total')}:</span>
                            <span>${order.total.toFixed(2)}</span>
                        </div>
                    </div>

                    {order.status === 'shipping' && (
                        <div className="rider-tracking-card">
                            <div className="rider-header">
                                <div className="rider-avatar-live">
                                    <FaMotorcycle />
                                    <div className="pulse"></div>
                                </div>
                                <div className="rider-info-live">
                                    <h4>{t('order_status.courier_on_way')}</h4>
                                    <p>{t('order_status.courier_desc')}</p>
                                </div>
                                <div className="eta-badge">12 min</div>
                            </div>
                            <div className="live-map-mock">
                                <div className="map-line"></div>
                                <motion.div
                                    className="rider-pin"
                                    animate={{ x: [0, 200, 350] }}
                                    transition={{ duration: 30, repeat: Infinity }}
                                >
                                    <FaMotorcycle />
                                </motion.div>
                                <div className="destination-pin">
                                    <FaHome />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="delivery-info">
                        <div className="info-row">
                            <strong>{t('order_status.customer')}:</strong>
                            <span>{order.customer}</span>
                        </div>
                        <div className="info-row">
                            <strong>{t('order_status.address')}:</strong>
                            <span>{order.address}</span>
                        </div>
                        <div className="info-row">
                            <strong>{t('order_status.date')}:</strong>
                            <span>{order.date}</span>
                        </div>
                    </div>

                    <div className="actions">
                        <Link to="/menu" className="continue-btn"><FaShoppingBag /> {t('order_status.order_more')}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderStatus;
