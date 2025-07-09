'use client';

import Image from 'next/image';
import styles from './FeaturesSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const features = [
    {
        title: 'Integrity',
        desc: 'Displaying the highest level of Integrity in the way we conduct our business.',
        icon: '/Circle-Layer.png',
    },
    {
        title: 'Demonstrate',
        desc: 'Demonstrating a strong Will to Win in the market place.',
        icon: '/Scenery.png',
    },
    {
        title: 'Diversity',
        desc: 'Promoting Diversity in the work place and community.',
        icon: '/Object-Ungroup.png',
    },
    {
        title: 'Teamwork',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: '/User-Arrows.png',
    },
    {
        title: 'Collaboration',
        desc: 'Displaying the highest level of Integrity in the way we conduct our business.',
        icon: '/Circle-Layer.png',
    },
    {
        title: 'Technology',
        desc: 'Harnessing the power of Technology to deliver better customer experience.',
        icon: '/Rocket.png',
    },
    {
        title: 'Corporate',
        desc: 'Setting the standard for the best Corporate Citizenship in the communities we work.',
        icon: '/Bag.png',
    },
    {
        title: 'Digital',
        desc: 'Setting the standard for the best Corporate Citizenship in the communities we work.',
        icon: '/Cube.png',
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
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <div className={styles.featureBox}>
                                <div className={styles.icon}>
                                    <Image src={item.icon} alt={item.title} width={32} height={32} />
                                </div>
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
