import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import './SpecialsCombo.css';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';

const SpecialsCombo = () => {
    const { t } = useTranslation();
    const [selectedItem, setSelectedItem] = useState(null);
    const { addToCart, isStoreOpen } = useCart();

    const specials = [
        {
            id: 901,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
            name: t('specials.items.c1.title'),
            price: '$54.00',
            rating: 2,
            category: 'COMBO',
            description: t('specials.items.c1.desc'),
            ingredients: [
                t('specials.items.c1.ing1'),
                t('specials.items.c1.ing2'),
                t('specials.items.c1.ing3'),
                t('specials.items.c1.ing4')
            ]
        },
        {
            id: 902,
            image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800&auto=format&fit=crop',
            name: t('specials.items.c2.title'),
            price: '$51.00',
            rating: 5,
            category: 'COMBO',
            description: t('specials.items.c2.desc'),
            ingredients: [
                t('specials.items.c2.ing1'),
                t('specials.items.c2.ing2'),
                t('specials.items.c2.ing3'),
                t('specials.items.c2.ing4')
            ]
        },
        {
            id: 903,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
            name: t('specials.items.c3.title'),
            price: '$37.50',
            originalPrice: '$51.00',
            rating: 4,
            category: 'COMBO',
            description: t('specials.items.c3.desc'),
            ingredients: [
                t('specials.items.c3.ing1'),
                t('specials.items.c3.ing2'),
                t('specials.items.c3.ing3'),
                t('specials.items.c3.ing4')
            ]
        },
        {
            id: 904,
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
            name: t('specials.items.c4.title'),
            price: '$51.00',
            rating: 3,
            category: 'COMBO',
            description: t('specials.items.c4.desc'),
            ingredients: [
                t('specials.items.c4.ing1'),
                t('specials.items.c4.ing2'),
                t('specials.items.c4.ing3'),
                t('specials.items.c4.ing4')
            ]
        }
    ];

    React.useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedItem]);

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <section className="specials-combo" id="menu-section">
            <div className="container">
                <div className="specials-header">
                    <h3 className="specials-subtitle">{t('specials.subtitle')}</h3>
                    <h2 className="specials-title">{t('specials.title')}</h2>
                </div>

                <div className="specials-grid">
                    {specials.map((item, index) => (
                        <div className="special-card" key={index} onClick={() => openModal(item)}>
                            <div className="special-image">
                                <img src={item.image} alt={item.name} />
                                {item.id === 903 && <div className="promo-badge">⚡</div>}
                            </div>
                            <h4 className="special-name">{item.name}</h4>
                            <div className="special-rating">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`star ${i < item.rating ? 'active' : ''}`}>★</span>
                                ))}
                            </div>
                            <div className="special-price-info">
                                <div className="price-stack">
                                    {item.originalPrice && <span className="old-price">{item.originalPrice}</span>}
                                    <span className="new-price">{item.price}</span>
                                </div>
                                <button
                                    className="special-add-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (isStoreOpen) addToCart(item);
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Window */}
            {selectedItem && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className={`modal-content ${selectedItem.isPremium ? 'premium-modal-v2' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>

                        <div className="modal-body">
                            <div className="modal-image">
                                <img src={selectedItem.image} alt={selectedItem.name} />
                            </div>
                            <div className="modal-info">
                                <h3 className="modal-subtitle-premium">Combo Deal</h3>
                                <h2 className="modal-title-premium">{selectedItem.name}</h2>
                                <p className="modal-description-premium">{selectedItem.description}</p>

                                <div className="modal-ingredients-premium">
                                    <h4>{t('menu.ingredients_title')}</h4>
                                    <div className="ingredients-pill-grid">
                                        {selectedItem.ingredients.map((ing, i) => (
                                            <div key={i} className="ingredient-pill">
                                                {ing}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-footer-premium">
                                    <div className="price-tag-premium">
                                        {selectedItem.price}
                                    </div>
                                    <button
                                        className="add-to-cart-premium"
                                        disabled={!isStoreOpen}
                                        onClick={() => {
                                            if (isStoreOpen) {
                                                addToCart(selectedItem);
                                                closeModal();
                                            }
                                        }}
                                    >
                                        <FaShoppingCart /> {t('menu.add_to_cart')} +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SpecialsCombo;
