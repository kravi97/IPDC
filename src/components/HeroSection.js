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
        <div className={styles.heroBg} style={{ overflowX: 'hidden' }}>
            <section className={styles.hero}>
                <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
                    <div className={styles.navbarCustomContainer}>
                        <div className={styles.navbarBrand}>
                            <Image src="/nav-left-image.png" alt="Logo" width={120} height={40} style={{ marginLeft: '95px' }} />
                        </div>
                        <button
                            className={styles.navbarToggler}
                            type="button"
                            onClick={toggleNav}
                            aria-controls="navbarNav"
                            aria-expanded={isNavOpen}
                            aria-label="Toggle navigation menu"
                        >
                            <span className={styles.navbarTogglerIcon}></span>
                        </button>
                        <div className={`${styles.navbarCollapse} ${isNavOpen ? styles.show : ''}`} id="navbarNav">
                            <ul className={styles.navbarNav}>
                                <li><a href="#" className={styles.navLink}>Retail</a></li>
                                <li><a href="#" className={styles.navLink}>SME</a></li>
                                <li><a href="#" className={styles.navLink}>Corporate</a></li>
                                <li><a href="#" className={styles.navLink}>About Us</a></li>
                                <li><a href="#" className={styles.navLink}>COVID 19</a></li>
                                <li><a href="#" className={styles.navLink}>Campaigns</a></li>
                            </ul>
                            <div className={styles.navbarActions}>
                                <Image src="/Magnifier.png" alt="Search" width={20} height={20} className={styles.magnifierIcon} />
                                <Button
                                    style={{
                                        backgroundColor: '#ED017F',
                                        border: 'none',
                                        borderRadius: '4px',
                                        padding: '8px 20px',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Rubik, sans-serif',
                                        letterSpacing: '2px',
                                        lineHeight: '20px',
                                    }}
                                >
                                    iSERVICE
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className={styles.heroSplit}>
                    {/* Left Side: Text/Buttons */}
                    <div className={styles.heroLeft}>
                        <Container className={styles.heroContent}>
                            <Row className="align-items-center">
                                <Col md={12} className="text-center text-md-start">
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
                                    <div className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
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
                            </Row>
                            {/* Contact and Social Media Icons - Bottom of Section */}
                            <Row className="mt-4 mb-0">
                                <Col style={{ paddingTop: '15%' }} className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-start gap-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <Image src="/call.png" alt="Call" width={18} height={18} />
                                        <span className="fw-bold" style={{ color: '#010101', fontSize: 'clamp(15px, 3vw, 17px)' }}>16519</span>
                                    </div>
                                    <span style={{ color: '#CCCCCC' }} >|</span>
                                    <div className="d-flex gap-2">
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
                            </Row>
                        </Container>
                    </div>
                    {/* Right Side: Pink background, family image, badges */}
                    <div className={styles.heroRight}>
                        <div className={styles.imageContainer}>
                            <Image src="/family.png" alt="Family" width={883} height={654} className="img-fluid" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                            {/* Floating Badges */}
                            <div className={styles.badges}>
                                <div className={`${styles.badge} ${styles.carLoan}`} tabIndex={0} aria-label="Car Loans">
                                    <Image src="/car.png" alt="Car" width={20} height={20} />
                                    <span className='ms-1' style={{ color: '#343434', fontFamily: 'Metropolis, sans-serif', fontWeight: '700' }}>Car Loans</span>
                                </div>
                                <div className={`${styles.badge} ${styles.homeLoan}`} tabIndex={0} aria-label="Home Loan">
                                    <Image src="/House.png" alt="Home" width={20} height={20} />
                                    <span style={{ color: '#343434', fontFamily: 'Metropolis, sans-serif', fontWeight: '700' }}>Home Loan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
