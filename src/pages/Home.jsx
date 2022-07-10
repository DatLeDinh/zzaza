import React from 'react';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionTitle, SectionBody } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import ProductCard from '../components/ProductCard';
import Grid from '../components/Grid';

import policy from '../assets/fake-data/policy';
import productData from '../assets/fake-data/product';
import heroSliderData from '../assets/fake-data/hero-slider';
import banner from '../assets/images/banner.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Helmet title="Trang chu">
            <HeroSlider data={heroSliderData} control={true} auto={true} timeOut={5000} />
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {policy.map((item, index) => {
                            return (
                                <PolicyCard
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                ></PolicyCard>
                            );
                        })}
                    </Grid>
                </SectionBody>
            </Section>

            {/* Best selling */}
            <Section>
                <SectionTitle>TOP SẢN PHẨM BÁN CHẠY TRONG TUẦN</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {productData.getProducts(8).map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    title={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                ></ProductCard>
                            );
                        })}
                    </Grid>
                </SectionBody>
            </Section>

            {/* banner */}

            <Section>
                <SectionBody>
                    <Link to="/cataLog">
                        <img src="{banner}" alt="" />
                    </Link>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Home;
