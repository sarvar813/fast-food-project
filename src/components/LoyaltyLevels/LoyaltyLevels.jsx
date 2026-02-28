import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCrown, FaGem, FaMedal, FaStar, FaChevronRight, FaCheckCircle, FaLock } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import './LoyaltyLevels.css';

const LoyaltyLevels = () => {
    const { t } = useTranslation();
    const { userStats } = useCart();
    const currentOrders = userStats?.totalOrders || 0;
    const currentLevel = userStats?.level || 'BRONZE';

    const levels = [
        {
            id: 'BRONZE',
            name: t('loyalty_levels.bronze', 'BRONZA'),
            range: `1-5 ${t('loyalty_levels.orders_label', 'buyurtma')}`,
            minOrders: 0,
            cashback: '5%',
            color: '#cd7f32',
            icon: <FaMedal />,
            benefits: [
                t('loyalty_levels.benefits.b1', 'Standart qo\'llab-quvvatlash'),
                t('loyalty_levels.benefits.b2', 'Tug\'ilgan kun uchun kupon'),
                t('loyalty_levels.benefits.b3', 'Bonus ballarni to\'plash')
            ]
        },
        {
            id: 'SILVER',
            name: t('loyalty_levels.silver', 'KUMUSH'),
            range: `5-15 ${t('loyalty_levels.orders_label', 'buyurtma')}`,
            minOrders: 5,
            cashback: '7%',
            color: '#c0c0c0',
            icon: <FaStar />,
            benefits: [
                t('loyalty_levels.benefits.b4', 'Tezkor yetkazib berish'),
                t('loyalty_levels.benefits.b5', 'Ustuvor yordam xizmati'),
                t('loyalty_levels.benefits.b6', 'Haftalik maxsus aksiyalar'),
                t('loyalty_levels.benefits.b7', 'Doimiy keshbek')
            ]
        },
        {
            id: 'GOLD',
            name: t('loyalty_levels.gold', 'OLTIN'),
            range: `15+ ${t('loyalty_levels.orders_label', 'buyurtma')}`,
            minOrders: 15,
            cashback: '10%',
            color: '#ffd700',
            icon: <FaCrown />,
            benefits: [
                t('loyalty_levels.benefits.b8', 'Lahzali yetkazib berish'),
                t('loyalty_levels.benefits.b9', 'Shaxsiy menejer xizmati'),
                t('loyalty_levels.benefits.b10', 'Doimiy bepul yetkazib berish'),
                t('loyalty_levels.benefits.b11', 'Eksklyuziv tadbirlar')
            ]
        }
    ];

    const getProgressInfo = (level) => {
        if (currentLevel === level.id) return t('loyalty_levels.current_level_msg', "Hozirgi darajangiz ✅");
        if (level.minOrders > currentOrders) {
            return t('loyalty_levels.orders_remaining', { count: level.minOrders - currentOrders, defaultValue: "Yana {{count}} ta buyurtma qoldi" });
        }
        return t('loyalty_levels.reached', "Erishilgan daraja ✨");
    };

    return (
        <section className="loyalty-levels-section" id="loyalty">
            <div className="container">
                <div className="loyalty-header">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="loyalty-badge"
                    >
                        {t('loyalty_levels.badge', 'VIP PRIVILEGIYALAR')}
                    </motion.span>
                    <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('loyalty_levels.title', 'SIZNING <span>DARAFANGIZNI</span> ANIQLANG') }} />
                    <p className="section-desc">{t('loyalty_levels.desc', "Qancha ko'p buyurtma bersangiz, shuncha ko'p imtiyoz va keshbeklarga ega bo'lasiz. Bizning klubimizga qo'shiling!")}</p>
                </div>

                <div className="levels-grid">
                    {levels.map((level, idx) => {
                        const isActive = currentLevel === level.id;
                        const isLocked = level.minOrders > currentOrders;

                        return (
                            <motion.div
                                key={level.id}
                                className={`level-card ${level.id.toLowerCase()} ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                {isActive && (
                                    <div className="active-tag">{t('loyalty_levels.current_level', 'HOZIRGI DARAJA')}</div>
                                )}

                                <div className="level-icon" style={{ color: level.color }}>
                                    {isLocked ? <FaLock className="lock-icon" /> : level.icon}
                                </div>

                                <h3 className="level-name">{level.name}</h3>

                                <div className="level-cashback">
                                    <span className="cb-value" style={{ color: level.color }}>{level.cashback}</span>
                                    <span className="cb-label">{t('loyalty_levels.cashback', 'KESHBEK')}</span>
                                </div>

                                <div className="progress-info-line">
                                    {getProgressInfo(level)}
                                </div>

                                <p className="level-range">{level.range}</p>

                                <ul className="level-benefits">
                                    {level.benefits.map((benefit, bIdx) => (
                                        <li key={bIdx} className={isLocked ? 'locked-benefit' : ''}>
                                            <FaCheckCircle className="bullet" style={{ color: isLocked ? '#475569' : level.color }} />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    className="join-btn"
                                    style={{ '--level-color': level.color }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.scrollTo({ top: document.getElementById('menu')?.offsetTop - 100, behavior: 'smooth' })}
                                >
                                    {isActive ? t('loyalty_levels.continue_btn', 'DAVOM ETISH') : t('loyalty_levels.join_btn', 'BUYURTMA BERISH')}
                                </motion.button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="loyalty-bg-blob"></div>
        </section>
    );
};

export default LoyaltyLevels;
