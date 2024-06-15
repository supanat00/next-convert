'use client'
import { useEffect } from 'react';
import Image from "next/image";
import ScrollReveal from 'scrollreveal';
import Swiper, { Pagination } from 'swiper';

export default function Main() {
    useEffect(() => {
        /*=============== SHOW MENU ===============*/
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        /*===== MENU SHOW =====*/
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            });
        }

        /*===== MENU HIDDEN =====*/
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        }

        /*=============== REMOVE MENU MOBILE ===============*/
        const navLink = document.querySelectorAll('.nav__link');
        function linkAction() {
            const navMenu = document.getElementById('nav-menu');
            navMenu?.classList.remove('show-menu');
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));

        /*=============== HOME SWIPER ===============*/
        new Swiper('.home-swiper', {
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        /*=============== CHANGE BACKGROUND HEADER ===============*/
        function scrollHeader() {
            const header = document.getElementById('header');
            if (this.scrollY >= 50) header?.classList.add('scroll-header');
            else header?.classList.remove('scroll-header');
        }
        window.addEventListener('scroll', scrollHeader);

        /*=============== NEW SWIPER ===============*/
        new Swiper('.new-swiper', {
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 16,
        });

        /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
        const sections = document.querySelectorAll('section[id]');
        function scrollActive() {
            const scrollY = window.pageYOffset;
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 58;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link');
                } else {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link');
                }
            });
        }
        window.addEventListener('scroll', scrollActive);

        /*=============== SHOW SCROLL UP ===============*/
        function scrollUp() {
            const scrollUp = document.getElementById('scroll-up');
            if (this.scrollY >= 460) scrollUp?.classList.add('show-scroll');
            else scrollUp?.classList.remove('show-scroll');
        }
        window.addEventListener('scroll', scrollUp);

        /*=============== SCROLL REVEAL ANIMATION ===============*/
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true
        });

        sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
        sr.reveal(`.category__data, .trick__content, .footer__content`, { interval: 100 });
        sr.reveal(`.about__data, .discount__img`, { origin: 'left' });
        sr.reveal(`.about__img, .discount__data`, { origin: 'right' });
    }, []);

    return (
        <main className="main">
            {/* <!--==================== HOME ====================--> */}
            <section className="home container" id="home">
                <div className="swiper home-swiper">
                    <div className="swiper-wrapper">
                        {/* <!-- HOME SLIDER 1 --> */}
                        <section className="swiper-slide">
                            <div className="home__content grid">
                                <div className="home__group">
                                    <Image
                                        src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437346/halloween-asset/home1-img_tdy0vt.png" width='500' height='420' alt=""
                                        className="home__img w-full h-auto" />
                                    <div className="home__indicator"></div>

                                    <div className="home__details-img">
                                        <h4 className="home__details-title">The Labu “Reiza”</h4>
                                        <span className="home__details-subtitle">The Living Pumpkin</span>
                                    </div>
                                </div>

                                <div className="home__data">
                                    <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
                                    <h1 className="home__title">UOOOO <br /> TRICK OR <br /> TREAT!!</h1>
                                    <p className="home__description">Hi, I&apos;m Reiza, people call me “El Labu”. I am currently trying to learn
                                        something new, building my own bike with parts made only in Malaysia.
                                    </p>

                                    <div className="home__buttons">
                                        <a href="#" className="button">Book Now</a>
                                        <a href="#" className="button--link button--flex">Track Record <i className='bx bx-right-arrow-alt button__icon'></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- HOME SLIDER 2 --> */}
                        <section className="swiper-slide">
                            <div className="home__content grid">
                                <div className="home__group">
                                    <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437346/halloween-asset/home2-img_fy3075.png" width="500" height="500" alt="" className="home__img" />
                                    <div className="home__indicator"></div>

                                    <div className="home__details-img">
                                        <h4 className="home__details-title">Adino & Grahami</h4>
                                        <span className="home__details-subtitle">No words can describe them</span>
                                    </div>
                                </div>

                                <div className="home__data">
                                    <h3 className="home__subtitle">#2 top Best duo</h3>
                                    <h1 className="home__title">BRING BACK <br /> MY COTTON <br /> CANDY</h1>
                                    <p className="home__description">Adino steals cotton candy from his brother and eats them all in one bite,
                                        a hungry beast. Grahami can no longer contain his anger towards Adino.
                                    </p>

                                    <div className="home__buttons">
                                        <a href="#" className="button">Book Now</a>
                                        <a href="#" className="button--link button--flex">Track Record <i className='bx bx-right-arrow-alt button__icon'></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- HOME SLIDER 3 --> */}
                        <section className="swiper-slide">
                            <div className="home__content grid">
                                <div className="home__group">
                                    <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437347/halloween-asset/home3-img_jasms3.png" width="500" height="500" alt="" className="home__img" />
                                    <div className="home__indicator"></div>

                                    <div className="home__details-img">
                                        <h4 className="home__details-title">Captain Sem</h4>
                                        <span className="home__details-subtitle">Veteran Spooky Ghost</span>
                                    </div>
                                </div>

                                <div className="home__data">
                                    <h3 className="home__subtitle">#3 Top Scariest  Ghost</h3>
                                    <h1 className="home__title">RESPAWN <br /> THE SPOOKY <br /> SKULL</h1>
                                    <p className="home__description">In search for cute little puppy, Captain Sem has come back from his tragic death.
                                        With his hogwarts certified power he promise to be a hero for all of ghostkind.
                                    </p>

                                    <div className="home__buttons">
                                        <a href="#" className="button">Book Now</a>
                                        <a href="#" className="button--link button--flex">Track Record <i className='bx bx-right-arrow-alt button__icon'></i></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>

            {/* <!--==================== CATEGORY ====================--> */}
            <section className="section category">
                <h2 className="section__title">Favorite Scare <br /> Category</h2>

                <div className="category__container container grid">
                    <div className="category__data">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437345/halloween-asset/category1-img_z5dw68.png" width="500" height="500" alt="" className="category__img" />
                        <h3 className="category__title">Ghosts</h3>
                        <p className="category__description">Choose the ghosts, the scariest there are.</p>
                    </div>

                    <div className="category__data">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437346/halloween-asset/category2-img_gr79xu.png" width="500" height="500" alt="" className="category__img" />
                        <h3 className="category__title">Pumpkins</h3>
                        <p className="category__description">You look at the scariest pumpkins there is.</p>
                    </div>

                    <div className="category__data">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437346/halloween-asset/category3-img_trftkk.png" width="500" height="500" alt="" className="category__img" />
                        <h3 className="category__title">Witch Hat</h3>
                        <p className="category__description">Pick the most stylish witch hats out there.</p>
                    </div>
                </div>
            </section>

            {/* <!--==================== ABOUT ====================--> */}
            <section className="section about" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title about__title">About Halloween <br /> Night</h2>
                        <p className="about__description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a
                            very fun international celebration, this celebration comes from ancient origins, and is already
                            celebrated by everyone.
                        </p>
                        <a href="#" className="button">Know more</a>
                    </div>

                    <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437345/halloween-asset/about-img_brz0tv.png" width="500" height="500" alt="" className="about__img" />
                </div>
            </section>

            {/* <!--==================== TRICK OR TREAT ====================--> */}
            <section className="section trick" id="trick">
                <h2 className="section__title">Trick Or Treat</h2>

                <div className="trick__container container grid">
                    <div className="trick__content">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437350/halloween-asset/trick-treat1-img_ec7tbr.png" width="500" height="500" alt="" className="trick__img" />
                        <h3 className="trick__title">Toffee</h3>
                        <span className="trick__subtitle">Candy</span>
                        <span className="trick__price">$11.99</span>
                        <button className="button trick__button">
                            <i className='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437352/halloween-asset/trick-treat2-img_cwcjna.png" width="500" height="500" alt="" className="trick__img" />
                        <h3 className="trick__title">Bone</h3>
                        <span className="trick__subtitle">Accessory</span>
                        <span className="trick__price">$8.99</span>
                        <button className="button trick__button">
                            <i className='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437352/halloween-asset/trick-treat3-img_fhivab.png" width="500" height="500" alt="" className="trick__img" />
                        <h3 className="trick__title">Scarecrow</h3>
                        <span className="trick__subtitle">Accessory</span>
                        <span className="trick__price">$15.99</span>
                        <button className="button trick__button">
                            <i className='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437353/halloween-asset/trick-treat4-img_kx0ebm.png" width="500" height="500" alt="" className="trick__img" />
                        <h3 className="trick__title">Candy Cane</h3>
                        <span className="trick__subtitle">Candy</span>
                        <span className="trick__price">$7.99</span>
                        <button className="button trick__button">
                            <i className='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437345/halloween-asset/trick-treat5-img_iq8uje.png" width="500" height="500" alt="" className="trick__img" />
                        <h3 className="trick__title">Pumpkin</h3>
                        <span className="trick__subtitle">Candy</span>
                        <span className="trick__price">$19.99</span>
                        <button className="button trick__button">
                            <i className='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

                    <div className="trick__content">
                        <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437345/halloween-asset/trick-treat6-img_fhag3q.png" width="500" height="500" alt="" className="trick__img" />
                        <h3 className="trick__title">Ghost</h3>
                        <span className="trick__subtitle">Accessory</span>
                        <span className="trick__price">$17.99</span>
                        <button className="button trick__button">
                            <i className='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* <!--==================== DISCOUNT ====================--> */}
            <section className="section discount">
                <div className="discount__container container grid">
                    <div className="discount__data">
                        <h2 className="discount__title">50% Discount <br /> On New Products</h2>
                        <a href="#" className="button">Go to new</a>
                    </div>

                    <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437346/halloween-asset/discount-img_t5hvln.png" width="500" height="500" alt="" className="discount__img" />
                </div>
            </section>

            {/* <!--==================== NEW ARRIVALS ====================--> */}
            <section className="section new" id="new">
                <h2 className="section__title">New Arrivals</h2>

                <div className="new__container container">
                    <div className="swiper new-swiper">
                        <div className="swiper-wrapper">
                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437347/halloween-asset/new1-img_wwy6eg.png" width="500" height="500" alt="" className="new__img" />
                                <h3 className="new__title">Haunted House</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$14.99</span>
                                    <span className="new__discount">$29.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437347/halloween-asset/new2-img_p8jh3x.png" width="500" height="500" alt="" className="new__img" />
                                <h3 className="new__title">Halloween Candle</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$11.99</span>
                                    <span className="new__discount">$21.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437349/halloween-asset/new3-img_gevjia.png" width="500" height="500" alt="" className="new__img" />
                                <h3 className="new__title">Witch Hat</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$4.99</span>
                                    <span className="new__discount">$9.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437349/halloween-asset/new4-img_jq78k1.png" width="500" height="500" alt="" className="new__img" />
                                <h3 className="new__title">Rip</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$24.99</span>
                                    <span className="new__discount">$44.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437350/halloween-asset/new5-img_aeyx8r.png" width="500" height="500" alt="" className="new__img" />
                                <h3 className="new__title">Terrifying Crystal Ball</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$5.99</span>
                                    <span className="new__discount">$12.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>

                            <div className="new__content swiper-slide">
                                <div className="new__tag">New</div>
                                <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437350/halloween-asset/new6-img_trvvfl.png" width="500" height="500" alt="" className="new__img" />
                                <h3 className="new__title">Witch Broom</h3>
                                <span className="new__subtitle">Accessory</span>

                                <div className="new__prices">
                                    <span className="new__price">$7.99</span>
                                    <span className="new__discount">$14.99</span>
                                </div>

                                <button className="button new__button">
                                    <i className='bx bx-cart-alt new__icon'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--==================== OUR NEWSLETTER ====================--> */}
            <section className="section newsletter">
                <div className="newsletter__container container">
                    <h2 className="section__title">Our Newsletter</h2>
                    <p className="newsletter__description">
                        Promotion new products and sales. Directly to your inbox
                    </p>

                    <form action="" className="newsletter__form">
                        <input type="text" placeholder="Enter your email" className="newsletter__input" />
                        <button className="button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
