'use client';

import styles from './PartnersSection.module.scss';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

const logos = [
    { src: '/westin.png', alt: 'Westin' },
    { src: '/summit.png', alt: 'Summit' },
    { src: '/holcim.png', alt: 'Holcim' },
    { src: '/etv.png', alt: 'ETV' },
    { src: '/westin.png', alt: 'Westin 2' },
];

export default function PartnersSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className={styles.partners}>
            <Container>
                <h4 className="text-center fw-bold mb-5">Business Partners</h4>
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="text-center px-3">
                            <Image src={logo.src} alt={logo.alt} width={140} height={60} />
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
}
