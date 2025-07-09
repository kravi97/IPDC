'use client';

import styles from './Footer.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className="gy-4">
                    {/* About the company */}
                    <Col md={3}>
                        <h6 className="fw-bold mb-3">About the company</h6>
                        <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Learn To Love Growth And <span style={{ color: '#007bff' }}>Change</span> And You Will Be A Success. Microsoft Patch
                        </p>
                        <div className="d-flex gap-2 mt-3">
                            <a href="#" className={styles.iconLink}>
                                <Image src="/facebook.png" alt="Facebook" width={32} height={32} />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Image src="/youtube.png" alt="YouTube" width={32} height={32} />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Image src="/instagram.png" alt="Instagram" width={32} height={32} />
                            </a>
                        </div>
                    </Col>

                    {/* Products */}
                    <Col md={2}>
                        <h6 className="fw-bold mb-3">Products</h6>
                        <ul className={styles.links}>
                            <li><a href="#" className="text-muted">CSR Activities</a></li>
                            <li><a href="#" className="text-muted">Green Banking</a></li>
                            <li><a href="#" className="text-muted">News</a></li>
                            <li><a href="#" className="text-muted">Ongoing Campaign</a></li>
                            <li><a href="#" className="text-muted">Updates</a></li>
                        </ul>
                    </Col>

                    {/* Get Started */}
                    <Col md={2}>
                        <h6 className="fw-bold mb-3">Get Started</h6>
                        <ul className={styles.links}>
                            <li><a href="#" className="text-muted">Career</a></li>
                            <li><a href="#" className="text-muted">Contact Us</a></li>
                            <li><a href="#" className="text-muted">Government Securities</a></li>
                            <li><a href="#" className="text-muted">Examples</a></li>
                            <li><a href="#" className="text-muted">NIS</a></li>
                        </ul>
                    </Col>

                    {/* About */}
                    <Col md={2}>
                        <h6 className="fw-bold mb-3">About</h6>
                        <ul className={styles.links}>
                            <li><a href="#" className="text-muted">IPDC at a Glance</a></li>
                            <li><a href="#" className="text-muted">Mission, Vision & Values</a></li>
                            <li><a href="#" className="text-muted">Corporate Governance</a></li>
                            <li><a href="#" className="text-muted">Shareholders</a></li>
                            <li><a href="#" className="text-muted">Investor Relations</a></li>
                        </ul>
                    </Col>

                    {/* Contact */}
                    <Col md={3} className="text-end">
                        <div className={styles.contactInfo}>
                            <span className={styles.phoneIcon}>📞</span>
                            <span className="fw-bold ms-2" style={{ color: '#e61c81', fontSize: '1.5rem' }}>16519</span>
                        </div>
                    </Col>
                </Row>

                <div className="text-center mt-4 pt-3 border-top">
                    <p className="text-muted small mb-0">&copy; {new Date().getFullYear()} IPDC Finance Ltd. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
