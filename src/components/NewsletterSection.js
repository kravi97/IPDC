'use client';

import styles from './NewsletterSection.module.scss';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function NewsletterSection() {
    return (
        <section className={styles.newsletter}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <h4 className="fw-bold">Newsletter</h4>
                        <p className="text-muted mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etget ac quis aliquam arcu lacus.
                        </p>

                        <Form className={styles.formWrapper}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className={styles.emailInput}
                                    required
                                />
                                <button
                                    type="submit"
                                    style={{ fontFamily: 'Metropolis, sans-serif' }}
                                    className={styles.subscribeBtn}
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
