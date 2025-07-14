'use client';

import styles from './PartnersSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Slider from 'react-slick';

export default function PartnersSection() {
    const partnerLogos = [
        { src: "/Westin.png", alt: "Westin Hotels & Resorts" },
        { src: "/Summit.png", alt: "Summit" },
        { src: "/Holcim.png", alt: "Holcim" },
        { src: "/ETV.png", alt: "ETV" },
        { src: "/Westin.png", alt: "Westin Hotels & Resorts" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        arrows: false,
    };

    return (
        <section className={styles.partnersSection}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className={styles.partnersCarousel}>
                            <Slider {...settings} className={styles.partnersTrack}>
                                {partnerLogos.map((logo, index) => (
                                    <div key={index} className={styles.partnerLogo}>
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={120}
                                            height={60}
                                            className="img-fluid"
                                            style={{ objectFit: 'contain', margin: '0 auto' }}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
