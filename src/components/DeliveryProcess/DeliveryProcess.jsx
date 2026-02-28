import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMobileAlt, FaUtensils, FaMotorcycle, FaHamburger } from 'react-icons/fa';
import './DeliveryProcess.css';

const DeliveryProcess = () => {
    const { t } = useTranslation();

    const steps = [
        {
            id: 1,
            title: t('delivery_process.step1_title', 'ORDER'),
            desc: t('delivery_process.step1_desc', 'Pick your favorite legend from our menu.'),
            icon: <FaMobileAlt />
        },
        {
            id: 2,
            title: t('delivery_process.step2_title', 'PREPARE'),
            desc: t('delivery_process.step2_desc', 'Our chefs craft your burger with passion.'),
            icon: <FaUtensils />
        },
        {
            id: 3,
            title: t('delivery_process.step3_title', 'DELIVER'),
            desc: t('delivery_process.step3_desc', 'Lightning fast riders bring it to you.'),
            icon: <FaMotorcycle />
        },
        {
            id: 4,
            title: t('delivery_process.step4_title', 'ENJOY'),
            desc: t('delivery_process.step4_desc', 'Savor the most legendary taste ever.'),
            icon: <FaHamburger />
        }
    ];

    return (
        <section className="delivery-process-section">
            <div className="container">
                <div className="process-header">
                    <h2 dangerouslySetInnerHTML={{ __html: t('delivery_process.title', 'HOW IT <span>WORKS</span>?') }} />
                    <p>{t('delivery_process.desc', 'From kitchen to your door in 30 minutes or less.')}</p>
                </div>

                <div className="process-grid">
                    {steps.map((step, idx) => (
                        <div key={step.id} className="process-step">
                            <motion.div
                                className="icon-box"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                            >
                                {step.icon}
                                <span className="step-number">{step.id}</span>
                            </motion.div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeliveryProcess;
