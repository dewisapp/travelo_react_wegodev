import Container from "components/Container";
import React from "react";

import styles from "./SecondSection.module.css";
import "react-multi-carousel/lib/styles.css";
import Packages from "./Packages";
import Categories from "./Categories";
import PromoCarousel from "./PromoCarousel";
import Testimonials from "./Testimonials";

const SecondSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <PromoCarousel />
        <Packages />
        <Categories />
        <Testimonials />
      </Container>
    </section>
  );
};

export default SecondSection;
