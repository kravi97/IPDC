'use client';

import styles from './GlanceSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function GlanceSection() {
    return (
        <section className={styles.glanceSectionWrapper}>
            <div className={styles.noPadding}>
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
                                IPDC Finance Limited (previously known as &quot;Industrial Promotion and Development
                                Company of Bangladesh Limited&quot;) is the first private sector financial institution of
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
            </div>
        </section>
    );
}
