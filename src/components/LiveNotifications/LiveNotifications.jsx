import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingBag, FaFire, FaUser } from 'react-icons/fa';
import './LiveNotifications.css';

const LiveNotifications = () => {
    const [notification, setNotification] = useState(null);

    const products = [
        'Black Star Special', 'Mexican Spicy Burger', 'Cheeseburgers',
        'Chicken Wings', 'French Fries', 'Chocolate Cake', 'Yashil Salat'
    ];

    const names = [
        'Ali', 'Kamola', 'Jasur', 'Dilshod', 'Madina', 'Aziz', 'Sardor', 'Laylo'
    ];

    useEffect(() => {
        const showRandomNotification = () => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            const randomTime = Math.floor(Math.random() * 10) + 1;

            setNotification({
                name: randomName,
                product: randomProduct,
                time: randomTime
            });

            // Hide after 5 seconds
            setTimeout(() => {
                setNotification(null);
            }, 5000);
        };

        // Show first notification after 10 seconds
        const initialTimeout = setTimeout(showRandomNotification, 10000);

        // Then repeat every 20-30 seconds
        const interval = setInterval(() => {
            showRandomNotification();
        }, Math.random() * (30000 - 20000) + 20000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="live-notifications-container">
            <AnimatePresence>
                {notification && (
                    <motion.div
                        className="live-notif-card"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="notif-icon">
                            <FaShoppingBag />
                        </div>
                        <div className="notif-content">
                            <p className="notif-text">
                                <strong>{notification.name}</strong> hozirgina <strong>{notification.product}</strong> buyurtma qildi!
                            </p>
                            <span className="notif-time">{notification.time} daqiqa oldin</span>
                        </div>
                        <div className="notif-badge">
                            <FaFire />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LiveNotifications;
