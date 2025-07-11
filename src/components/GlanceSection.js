'use client';

import styles from './GlanceSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function GlanceSection() {
    const partnerLogos = [
        { src: "/Westin.png", alt: "Westin Hotels & Resorts" },
        { src: "/Summit.png", alt: "Summit" },
        { src: "/Holcim.png", alt: "Holcim" },
        { src: "/ETV.png", alt: "ETV" },
        { src: "/Westin.png", alt: "Westin Hotels & Resorts" }
    ];

    return (
        <>
            {/* IPDC at a Glance Section */}
            <section className={styles.glanceSectionWrapper}>
                <Container fluid className={styles.noPadding}>
                    <Row className={styles.glanceRow}>
                        <Col md={6} className={styles.leftSection}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/glance.png"
                                    alt="Money Plant"
                                    width={600}
                                    height={400}
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                        <Col md={6} className={styles.rightSection}>
                            <div className={styles.textWrapper}>
                                <h4 className="fw-bold">IPDC at a Glance</h4>
                                <p className="text-muted mt-3">
                                    IPDC Finance Limited (previously known as "Industrial Promotion and Development
                                    Company of Bangladesh Limited") is the first private sector financial institution of
                                    the country established in 1981 by a distinguished group of shareholders namely
                                    International Finance Corporation (IFC), USA, German Investment and Development Company
                                    (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland,
                                    Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh.
                                </p>
                                <a href="#" className={styles.readMore}>
                                    Read More <span>&rarr;</span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Partners Section */}
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
        </>
    );
}
