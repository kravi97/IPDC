'use client';

import styles from './Footer.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className="gy-4 align-items-start">
                    {/* About the company style={{ fontFamily: 'Metropolis', fontWeight: '400', fontSize: '14px' }}*/}
                    <Col lg={2} md={6} sm={12}>
                        <h6 className="fw-bold mb-3">About the company</h6>
                        <p className="text-muted mb-4" style={{ fontFamily: 'Metropolis', fontWeight: '400', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch
                        </p>
                        <div style={{ paddingTop: '18%' }} className="d-flex gap-3 align-items-center">
                            <a href="#" className={styles.iconLink}>
                                <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Image src="/youtube.png" alt="YouTube" width={18} height={18} />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Image src="/linkedin.png" alt="LinkedIn" width={18} height={18} />
                            </a>
                            <a href="#" className={styles.iconLink}>
                                <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
                            </a>
                        </div>
                    </Col>

                    {/* Products */}
                    <Col lg={2} md={3} sm={6}>
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
                    <Col lg={2} md={3} sm={6}>
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
                    <Col lg={2} md={6} sm={6}>
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
                    <Col lg={3} md={6} sm={6}>
                        <div className="d-flex align-items-center justify-content-lg-end justify-content-start gap-2">
                            <Image src="/call.png" alt="Call" width={18} height={18} />
                            <span className="fw-bold" style={{ color: '#010101', fontSize: 'clamp(15px, 3vw, 17px)' }}>16519</span>
                        </div>
                    </Col>
                </Row>

                {/* <div className="text-center mt-4 pt-3 border-top">
                    <p className="text-muted small mb-0">&copy; {new Date().getFullYear()} IPDC Finance Ltd. All rights reserved.</p>
                </div> */}
            </Container>
        </footer>
    );
}
