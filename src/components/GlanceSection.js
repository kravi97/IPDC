'use client';

import styles from './GlanceSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function GlanceSection() {
    return (
        <section className={styles.glance}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <Image
                            src="/glance.png"
                            alt="Money Plant"
                            width={600}
                            height={400}
                            className="img-fluid rounded"
                        />
                    </Col>
                    <Col md={6}>
                        <h4 className="fw-bold">IPDC at a Glance</h4>
                        <p className="text-muted mt-3">
                            IPDC Finance Limited (previously known as “Industrial Promotion and Development
                            Company of Bangladesh Limited”) is the first private sector financial institution of
                            the country established in 1981 by a distinguished group of shareholders namely
                            International Finance Corporation (IFC), USA, German Investment and Development Company
                            (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland,
                            Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh.
                        </p>
                        <a href="#" className={styles.readMore}>
                            Read More <span>&rarr;</span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
