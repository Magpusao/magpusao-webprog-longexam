import Button from '../../components/Button';

const HomePage = () => {
    const banner = "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/469777716_1312353446872792_4887100999314881085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeGAS2CyyZYesbZZcbp4YqfBpmzuHxhIi8umbO4fGEiLy-7tnwBcyQfb50LUppaVV-j7ZjGWU2pkIbICtDpNmifC&_nc_ohc=Y2Fa_vgURCUQ7kNvwGHXVcf&_nc_oc=Adqdo1JrYPhum9nqUYzSutId_uEoG9YhIRZFYLfUv1ufCjgjCm6iFCvd0lWIu5q_ndExR1ixwZHHkMul73A0A-wn&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=hJwev2sd02fsE58DTf1nzA&_nc_ss=7a3a8&oh=00_Af35ONZT862KyyPxQEh2gA2upLeTpMNxr0iLrreNkCwDuA&oe=69EC38B9";
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-nu-blue bg-nu-blue px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover" 
                />
                <div className="absolute inset-0 bg-nu-blue/60" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-nu-white/90 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products" variant="secondary" className="border-nu-gold text-nu-gold bg-transparent hover:bg-nu-gold hover:text-nu-blue">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-nu-blue bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-blue/60">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-nu-blue">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-nu-blue bg-white p-5 hover:border-nu-gold transition-colors">
                        <p className="text-2xl font-bold text-nu-blue">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-blue/60">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-nu-blue bg-white p-5 hover:border-nu-gold transition-colors">
                        <p className="text-2xl font-bold text-nu-blue">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-blue/60">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-nu-blue bg-white p-5 hover:border-nu-gold transition-colors">
                        <p className="text-2xl font-bold text-nu-blue">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-blue/60">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-nu-blue bg-white p-5 hover:border-nu-gold transition-colors">
                        <p className="text-2xl font-bold text-nu-blue">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-blue/60">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-nu-blue bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-blue/60">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-nu-blue">Simple store cards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border-2 border-nu-blue bg-white p-4 hover:border-nu-gold transition-colors">
                        <div id='essentials' className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-nu-blue/5 overflow-hidden">
                            <img 
                                src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/484112979_1056874953141308_8105617823548739922_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHeN8c1GNob_4CYVOSlNUxeqkmSaPfiebWqSZJo9-J5tQMC0agE6RWiPpRpozbmqsjz5iOJDYaLCDKYgYTH3r6V&_nc_ohc=xCXCjWc7Ug0Q7kNvwG-WiEy&_nc_oc=Adp9Qwh3flsfmwOqyxIbnXICzSPhgzbjt-e3-8GZZHpBpzsDNu4SXuJVu2tU_syre1CIGIMzw6PFFtMtOLLwN3wW&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=iRMn8T3gIYefW-yAcnWkiw&_nc_ss=7a3a8&oh=00_Af3lKFvg4JcAFn4CCUXn-MA4i1fl3U8iCYKls5R0T_pxIw&oe=69EC482A" 
                                alt="Daily Essentials" 
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-nu-blue">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">View Products</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-nu-blue bg-white p-4 hover:border-nu-gold transition-colors">
                        <div id='supplies' className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-nu-blue/5">
                            <img
                                src='https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/482030920_1056874939807976_567916055741412538_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE7bc0cDCtc_uQNx5QXzFa9CTcIYizANqQJNwhiLMA2pIL6n2CzOZ6TYC3AcEJHMqLQpqCNciB4j4PH9HaCqUj8&_nc_ohc=9E12HyXj4WYQ7kNvwGViij4&_nc_oc=AdrQ4iBnm2TTOoGOir02nf09z3jTvmdsrLEFMLomunbwW0Y_7Zwxuod83y3jI-Rqbkjx76Yl3Ovj5m15_ANF2Ayk&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=bJzl0EOesjlHjgo98awwIw&_nc_ss=7a3a8&oh=00_Af0_m4LwM3u3JsiYC9-no3lrRMgKCKkeltdXEIsj8tcp_g&oe=69EC27F9'
                                alt="Study Supplies"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-nu-blue">Study Supplies</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Notes, desk tools, and study kits for class and review weeks.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-nu-blue bg-white p-4 hover:border-nu-gold transition-colors">
                        <div id='apparel' className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-nu-blue/5">
                            <img
                                src='https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/484523776_1056874946474642_5540767453212807571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGpsRFdv9p5NfrOrBPjr7Gxw7W_LtAe_bvDtb8u0B79u0jPZepNVtQbfacQ3I9nERBpq0XiI44NZWX6CxV3T2eH&_nc_ohc=6T0kDZGhi-AQ7kNvwERmPIo&_nc_oc=Adr2A9oD_li_ZsqbjXxkj4Y3xM-nJt1NyNi340O2W2icl78Mkl-z_6dsPSjn-5GWKw63VfUt6rjwjXhamiWWUFKg&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=nsyklXabUs--ECAxnOGoEg&_nc_ss=7a3a8&oh=00_Af0KwdhQrjyBvoug2Mw0l5i-x57gZsGd0nrf-kdw5QngmQ&oe=69EC2590'
                                alt="Campus Apparel"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-nu-blue">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
