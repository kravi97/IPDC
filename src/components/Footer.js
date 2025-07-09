'use client';

import styles from './Footer.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className="gy-4">
                    <Col md={4}>
                        <Image src="/logo.png" alt="Logo" width={120} height={40} />
                        <p className="text-muted mt-3">
                            A company with purpose and passion – enabling dreams.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className={styles.links}>
                            <li><a href="#">Retail</a></li>
                            <li><a href="#">SME</a></li>
                            <li><a href="#">Corporate</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Campaigns</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h6 className="fw-bold">Contact</h6>
                        <p className="text-muted mb-1">Phone: +880-123456789</p>
                        <p className="text-muted mb-1">Email: info@ipdcbd.com</p>
                        <div className="d-flex gap-3 mt-2">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
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
