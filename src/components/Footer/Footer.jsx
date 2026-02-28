import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaSearch } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: Opening Hours */}
                    <div className="footer-col">
                        <h3 className="f-col-title">{t('footer.opening_hours', 'ISHLASH VAQTLARI')}</h3>
                        <ul className="opening-hours-list">
                            <li><span>{t('footer.days.monday')}</span> <span className="dots"></span> <span>9:00 - 22:00</span></li>
                            <li><span>{t('footer.days.tuesday')}</span> <span className="dots"></span> <span>9:00 - 22:00</span></li>
                            <li><span>{t('footer.days.wednesday')}</span> <span className="dots"></span> <span>9:00 - 22:00</span></li>
                            <li><span>{t('footer.days.thursday')}</span> <span className="dots"></span> <span>9:00 - 22:00</span></li>
                            <li><span>{t('footer.days.friday')}</span> <span className="dots"></span> <span>9:00 - 01:00</span></li>
                            <li><span>{t('footer.days.saturday')}</span> <span className="dots"></span> <span>9:00 - 01:00</span></li>
                            <li><span>{t('footer.days.sunday')}</span> <span className="dots"></span> <span className="closed-text">{t('footer.closed')}</span></li>
                        </ul>
                    </div>

                    {/* Column 2: Latest Posts */}
                    <div className="footer-col">
                        <h3 className="f-col-title">{t('footer.latest_posts')}</h3>
                        <div className="latest-posts">
                            {/* ... */}
                            <div className="post-item">
                                <h4>HOW TO MAKE A DELICIOUS MEAL</h4>
                                <span className="post-date">SEPTEMBER 20, 2017</span>
                            </div>
                            {/* ... etc (keeping static for now or can translate if needed) ... */}
                        </div>
                    </div>

                    {/* Column 3: Contact Us + Search */}
                    <div className="footer-col">
                        <h3 className="f-col-title">{t('footer.contact_us')}</h3>
                        <div className="contact-info-block">
                            <p>GRILLANDCHOW@EXAMPLE.COM</p>
                            <p>+(100) 333 4578</p>
                            <p>{t('footer.address', 'TOSHKENT SHAHRI, O\'ZBEKISTON')}</p>
                        </div>

                        <div className="footer-search-section">
                            <h3 className="f-col-title margin-top">{t('footer.search_article', 'MAQOLA QIDIRISH')}</h3>
                            <div className="f-search-box">
                                <input type="text" placeholder={t('footer.search_placeholder', 'Qidirish')} />
                                <button><FaSearch /></button>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Locations */}
                    <div className="footer-col">
                        <h3 className="f-col-title">{t('footer.locations')}</h3>
                        <div className="location-item">
                            <h4>{t('footer.branch_one')}</h4>
                            <p>TOSHKENT, MARKAZ-1</p>
                        </div>
                        <div className="location-divider"></div>
                        <div className="location-item">
                            <h4>{t('footer.branch_two')}</h4>
                            <p>TOSHKENT, CHILONZOR 7</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="f-bottom-left">
                        <p>&copy; 2026 BLACK STAR BURGER. {t('footer.all_rights')}</p>
                    </div>

                    <div className="f-social-center">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaPinterestP /></a>
                    </div>

                    <div className="f-bottom-right">
                        <Link to="/admin" className="admin-discrete-link">{t('footer.admin_access')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
