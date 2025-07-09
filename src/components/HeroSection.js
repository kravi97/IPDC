'use client';

import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.navbar}>
                <Container>
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <div>
                            <Image src="/nav-left-image.png" alt="Logo" width={120} height={40} />
                        </div>
                        <ul className="nav d-none d-md-flex gap-4">
                            <li className="nav-item"><a className="nav-link" href="#">Retail</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">SME</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Corporate</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">COVID 19</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Campaigns</a></li>
                        </ul>
                        <div className="d-none d-md-block">
                            <Button className="btn btn-primary px-3 py-2" style={{ backgroundColor: '#e61c81', border: 'none' }}>
                                iService
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className={styles.heroContent}>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start">
                        <h1 className="fw-bold mb-4" style={{ fontSize: '3rem', lineHeight: '1.2' }}>Chase Your Dream with us</h1>
                        <p className="text-muted mt-3 mb-4" style={{ fontSize: '1.1rem' }}>The harder you work for something, the greater you'll feel when you achieve it.</p>
                        <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start mb-5">
                            <Button className="btn btn-danger px-4 py-2" style={{ backgroundColor: '#e61c81', border: 'none', borderRadius: '25px', fontWeight: '600' }}>
                                APPLY ONLINE
                            </Button>
                            <Button className="btn btn-outline-dark px-4 py-2" style={{ borderRadius: '25px', fontWeight: '600' }}>
                                LOAN CALCULATOR
                            </Button>
                        </div>

                        {/* Contact and Social Media Section */}
                        <div className={styles.contactSection}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center gap-2">
                                    <span className={styles.phoneIcon}>📞</span>
                                    <span className="fw-bold" style={{ color: '#e61c81' }}>16519</span>
                                </div>
                                <div className="d-flex gap-2">
                                    <a href="#" className={styles.socialIcon} style={{ backgroundColor: '#3b5998' }}>f</a>
                                    <a href="#" className={styles.socialIcon} style={{ backgroundColor: '#1da1f2' }}>t</a>
                                    <a href="#" className={styles.socialIcon} style={{ backgroundColor: '#ff0000' }}>▶</a>
                                    <a href="#" className={styles.socialIcon} style={{ backgroundColor: '#e4405f' }}>📷</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="position-relative mt-5 mt-md-0 text-center">
                        <div className={styles.imageContainer}>
                            <Image src="/family.png" alt="Family" width={500} height={400} className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
