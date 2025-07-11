'use client';

import styles from './PartnersSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function PartnersSection() {
    const partnerLogos = [
        { src: "/Westin.png", alt: "Westin Hotels & Resorts" },
        { src: "/Summit.png", alt: "Summit" },
        { src: "/Holcim.png", alt: "Holcim" },
        { src: "/ETV.png", alt: "ETV" },
        { src: "/Westin.png", alt: "Westin Hotels & Resorts" }
    ];

    return (
        <section className={styles.partnersSection}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className={styles.partnersCarousel}>
                            <div className={styles.partnersTrack}>
                                {partnerLogos.map((logo, index) => (
                                    <div key={index} className={styles.partnerLogo}>
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={120}
                                            height={60}
                                            className="img-fluid"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.carouselDots}>
                                <span className={`${styles.dot} ${styles.active}`}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
