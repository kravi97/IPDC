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
                            Stay updated with our latest news and offerings. Subscribe to our newsletter today!
                        </p>

                        <Form className={styles.formWrapper}>
                            <Form.Group className="d-flex flex-column flex-md-row gap-3" controlId="formNewsletter">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-grow-1"
                                    required
                                />
                                <Button
                                    type="submit"
                                    className="px-4 py-2"
                                    style={{ backgroundColor: '#e61c81', border: 'none' }}
                                >
                                    Subscribe
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
