'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function HeroSection() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={styles.heroBg}>
            <section className={styles.hero}>
                <div className={styles.navbar}>
                    <Container>
                        <nav className="navbar navbar-expand-lg navbar-light py-3">
                            <div className="navbar-brand">
                                <Image src="/nav-left-image.png" alt="Logo" width={120} height={40} />
                            </div>

                            {/* Mobile hamburger button */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={toggleNav}
                                aria-controls="navbarNav"
                                aria-expanded={isNavOpen}
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#010101', fontFamily: 'Metropolis, sans-serif', fontWeight: '600', fontSize: '12px', lineHeight: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>Retail</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#010101', fontFamily: 'Metropolis, sans-serif', fontWeight: '600', fontSize: '12px', lineHeight: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>SME</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#010101', fontFamily: 'Metropolis, sans-serif', fontWeight: '600', fontSize: '12px', lineHeight: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>Corporate</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#010101', fontFamily: 'Metropolis, sans-serif', fontWeight: '600', fontSize: '12px', lineHeight: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#010101', fontFamily: 'Metropolis, sans-serif', fontWeight: '600', fontSize: '12px', lineHeight: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>COVID 19</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" style={{ color: '#010101', fontFamily: 'Metropolis, sans-serif', fontWeight: '600', fontSize: '12px', lineHeight: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>Campaigns</a></li>
                                </ul>

                                <div className="d-flex align-items-center gap-2 justify-content-end">
                                    <Image src="/Magnifier.png" alt="Search" width={20} height={20} className={styles.magnifierIcon} />
                                    <Button
                                        className="btn btn-primary"
                                        style={{
                                            backgroundColor: '#ED017F',
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '8px 20px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            width: '108px',
                                            height: '36px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        iService
                                    </Button>
                                </div>
                            </div>
                        </nav>
                    </Container>
                </div>

                <Container className={styles.heroContent}>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start">
                            <h1 className="fw-bold mb-4" style={{
                                fontFamily: 'Metropolis, sans-serif',
                                fontWeight: '900',
                                fontSize: 'clamp(2rem, 8vw, 63px)',
                                lineHeight: 'clamp(2.2rem, 8.5vw, 68px)',
                                letterSpacing: '0px',
                                color: '#010101',
                                maxWidth: '100%'
                            }}>Chase Your Dream with us</h1>
                            <p className="text-muted mt-3 mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>The harder you work for something, the greater you'll feel when you achieve it.</p>
                            <div className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start mb-5">
                                <Button
                                    className="btn btn-danger"
                                    style={{
                                        backgroundColor: '#e61c81',
                                        border: 'none',
                                        borderRadius: '4px',
                                        width: 'clamp(140px, 40vw, 157px)',
                                        height: '46px',
                                        padding: '13px 22px',
                                        fontFamily: 'Metropolis, sans-serif',
                                        fontWeight: '600',
                                        fontSize: 'clamp(10px, 2.5vw, 12px)',
                                        lineHeight: '20px',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    APPLY ONLINE
                                </Button>
                                <Button
                                    className="btn btn-outline-primary"
                                    style={{
                                        borderRadius: '4px',
                                        width: 'clamp(160px, 45vw, 188px)',
                                        height: '46px',
                                        padding: '13px 20px',
                                        fontFamily: 'Metropolis, sans-serif',
                                        fontSize: 'clamp(10px, 2.5vw, 12px)',
                                        lineHeight: '20px',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                        borderColor: '#ED017F',
                                        color: '#ED017F',
                                        borderWidth: '1px',
                                        backgroundColor: 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    LOAN CALCULATOR
                                </Button>
                            </div>
                        </Col>
                        <Col md={6} className="position-relative mt-5 mt-md-0 text-center">
                            <div className={styles.imageContainer}>
                                <Image src="/family.png" alt="Family" width={883} height={654} className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                                {/* Floating Badges */}
                                <div className={styles.badges}>
                                    <div className={`${styles.badge} ${styles.carLoan}`}>
                                        <Image src="/file.svg" alt="Car" width={20} height={20} />
                                        Car Loans
                                    </div>
                                    <div className={`${styles.badge} ${styles.homeLoan}`}>
                                        <Image src="/file.svg" alt="Home" width={20} height={20} />
                                        Home Loan
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Contact and Social Media Icons - Bottom of Section */}
                    <Row className="mt-5">
                        <Col className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-start gap-3">
                            <div className="d-flex align-items-center gap-2">
                                <Image src="/call.png" alt="Call" width={24} height={24} />
                                <span className="fw-bold" style={{ color: '#010101', fontSize: 'clamp(15px, 3vw, 17px)' }}>16519</span>
                            </div>
                            <div className="d-flex gap-2">
                                <a href="#" className={styles.iconLink}>
                                    <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                                </a>
                                <a href="#" className={styles.iconLink}>
                                    <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
                                </a>
                                <a href="#" className={styles.iconLink}>
                                    <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
                                </a>
                                <a href="#" className={styles.iconLink}>
                                    <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
