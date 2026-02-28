import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaClock, FaUsers, FaUser, FaPhoneAlt, FaCommentAlt, FaCheckCircle } from 'react-icons/fa';
import './Reservation.css';

const Reservation = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '+998',
        guests: 2,
        date: '',
        time: '',
        comment: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await fetch(`${apiUrl}/reservations/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '+998', guests: 2, date: '', time: '', comment: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || errorData.detail || t('common.error_occurred', 'Xatolik yuz berdi. Qayta urinib ko\'ring.'));
                setStatus('error');
            }
        } catch (error) {
            console.error('Reservation error:', error);
            setErrorMessage(t('common.server_error', 'Server bilan bog\'lanishda xatolik yuz berdi.'));
            setStatus('error');
        }
    };

    return (
        <section className="reservation-section" id="booking">
            <div className="reservation-container">
                <motion.div
                    className="reservation-info-box"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="res-subtitle">{t('home_sections.reservation.title', 'STOL BAND QILISH')}</span>
                    <h2 className="res-title">{t('home_sections.reservation.subtitle', 'Maxsus oqshomingizni biz bilan rejalashtiring')}</h2>
                    <p className="res-description">
                        {t('home_sections.reservation.desc', 'Oila a\'zolaringiz yoki do\'stlaringiz bilan shinam muhitda Black Star Burger lazzatidan bahramand bo\'ling.')}
                    </p>

                    <div className="res-features">
                        <div className="res-feature">
                            <div className="res-icon"><FaCheckCircle /></div>
                            <span>{t('home_sections.reservation.f1', 'Bepul band qilish')}</span>
                        </div>
                        <div className="res-feature">
                            <div className="res-icon"><FaCheckCircle /></div>
                            <span>{t('home_sections.reservation.f2', 'VIP zonalar mavjud')}</span>
                        </div>
                        <div className="res-feature">
                            <div className="res-icon"><FaCheckCircle /></div>
                            <span>{t('home_sections.reservation.f3', 'Bayramlar uchun maxsus bezaklar')}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="reservation-form-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {status === 'success' ? (
                        <div className="res-success-msg">
                            <div className="success-icon">✨</div>
                            <h3>{t('common.thanks', 'Rahmat!')}</h3>
                            <p>{t('home_sections.reservation.success_desc', 'Sizning so\'rovingiz qabul qilindi. Tez orada adminlarimiz siz bilan bog\'lanishadi.')}</p>
                            <button onClick={() => setStatus('idle')} className="res-back-btn">{t('home_sections.reservation.new_btn', 'YANGI BAND QILISH')}</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="res-form-grid">
                                <div className="res-input-group">
                                    <label><FaUser /> {t('home_sections.reservation.name', 'Ismingiz')}</label>
                                    <input
                                        type="text"
                                        placeholder={t('home_sections.reservation.name_placeholder', 'Ismingizni kiriting')}
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="res-input-group">
                                    <label><FaPhoneAlt /> {t('home_sections.reservation.phone', 'Telefon raqam')}</label>
                                    <input
                                        type="tel"
                                        placeholder="+998 -- --- -- --"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="res-input-group">
                                    <label><FaUsers /> {t('home_sections.reservation.guests', 'Mehmonlar soni')}</label>
                                    <select
                                        value={formData.guests}
                                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 10].map(num => (
                                            <option key={num} value={num}>{num} {t('home_sections.reservation.person', 'kishi')}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="res-input-group">
                                    <label><FaCalendarAlt /> {t('home_sections.reservation.date', 'Sana')}</label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div className="res-input-group">
                                    <label><FaClock /> {t('home_sections.reservation.time', 'Vaqt')}</label>
                                    <input
                                        type="time"
                                        required
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    />
                                </div>
                                <div className="res-input-group full">
                                    <label><FaCommentAlt /> {t('home_sections.reservation.comment', 'Qo\'shimcha izoh')}</label>
                                    <textarea
                                        placeholder={t('home_sections.reservation.comment_placeholder', 'Maxsus talablaringiz bo\'lsa kiriting...')}
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="reservation-btn" disabled={status === 'loading'}>
                                {status === 'loading' ? t('common.sending', 'YUBORILMOQDA...') : t('home_sections.reservation.submit', 'BAND QILISHNI TASDIQLASH')}
                            </button>
                            {status === 'error' && <p className="res-error-text">{errorMessage}</p>}
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Reservation;
