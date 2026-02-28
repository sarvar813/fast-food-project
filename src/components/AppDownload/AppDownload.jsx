import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import './AppDownload.css';

const AppDownload = () => {
    const { t } = useTranslation();
    return (
        <section className="app-download-section">
            <div className="app-download-container">
                <motion.div
                    className="app-content-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="app-badge">{t('home_sections.apps.badge', 'MOBIL ILOVA')}</span>
                    <h2>{t('home_sections.apps.title_main', 'Black Star Burger')} <span>{t('home_sections.apps.title_sub', "cho'ntagingizda!")}</span></h2>
                    <p>
                        {t('home_sections.apps.desc', 'Ilovamizni yuklab oling va yanada tezroq buyurtma bering. Maxsus chegirmalar, keshbeklar va faqat ilova foydalanuvchilari uchun yashirin menyular sizni kutmoqda!')}
                    </p>

                    <div className="app-buttons">
                        <a href="#" className="store-btn google-play">
                            <FaGooglePlay className="icon" />
                            <div className="btn-text">
                                <small>GET IT ON</small>
                                <span>Google Play</span>
                            </div>
                        </a>
                        <a href="#" className="store-btn app-store">
                            <FaApple className="icon" />
                            <div className="btn-text">
                                <small>Download on the</small>
                                <span>App Store</span>
                            </div>
                        </a>
                    </div>

                    <div className="app-features-mini">
                        <div className="mini-feat">
                            <div className="dot green"></div>
                            <span>{t('home_sections.apps.feat1', 'Tezkor yetkazib berish')}</span>
                        </div>
                        <div className="mini-feat">
                            <div className="dot gold"></div>
                            <span>{t('home_sections.apps.feat2', '10% Keshbek')}</span>
                        </div>
                        <div className="mini-feat">
                            <div className="dot red"></div>
                            <span>{t('home_sections.apps.feat3', 'Maxsus aksiyalar')}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="app-mockup-right"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600&h=1200" alt="App Preview" />
                            <div className="screen-overlay">
                                <div className="overlay-logo">BSB</div>
                            </div>
                        </div>
                    </div>
                    <div className="abstract-shape"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppDownload;
