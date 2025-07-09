'use client';

import styles from './FeaturesSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const features = [
    {
        title: 'Integrity',
        desc: 'Displaying the highest level of Integrity in the way we conduct our business.',
        icon: '💎',
    },
    {
        title: 'Demonstrate',
        desc: 'Demonstrating a strong Will to Win in the market place.',
        icon: '🎯',
    },
    {
        title: 'Diversity',
        desc: 'Promoting Diversity in the work place and community.',
        icon: '🌈',
    },
    {
        title: 'Teamwork',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: '🤝',
    },
    {
        title: 'Collaboration',
        desc: 'Displaying the highest level of Integrity in the way we conduct our business.',
        icon: '🧩',
    },
    {
        title: 'Technology',
        desc: 'Harnessing the power of Technology to deliver better customer experience.',
        icon: '💻',
    },
    {
        title: 'Corporate',
        desc: 'Setting the standard for the best Corporate Citizenship in the communities we work.',
        icon: '🏢',
    },
    {
        title: 'Digital',
        desc: 'Setting the standard for the best Corporate Citizenship in the communities we work.',
        icon: '📱',
    },
];

export default function FeaturesSection() {
    return (
        <section className={styles.features}>
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Creating Extraordinary Customer Experience</h2>
                    <p className="text-muted mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi
                        dignissim eu pharetra consequat montes, sagittis.
                    </p>
                </div>

                <Row>
                    {features.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 text-center">
                            <div className={styles.featureBox}>
                                <div className={styles.icon}>{item.icon}</div>
                                <h5 className="fw-semibold mt-3">{item.title}</h5>
                                <p className="text-muted small">{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
