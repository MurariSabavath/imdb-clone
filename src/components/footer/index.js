import React from "react";
import { Container, Inner, SVG, Link, FooterLink, HeadingSM } from "./styles/footer";

const Footer = () => {
    return <>
        <Container>
            <Inner>
                <Link href="#">
                    <SVG width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M20.896 2H3.104C2.494 2 2 2.494 2 3.104v17.792C2 21.506 2.494 22 3.104 22h9.579v-7.745h-2.607v-3.018h2.607V9.01c0-2.584 1.577-3.99 3.882-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.595-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V22h5.097c.61 0 1.104-.494 1.104-1.104V3.104C22 2.494 21.506 2 20.896 2"></path></SVG>
                </Link>
                <Link href="https://www.instagram.com/murari_sabavath/" target="blank">
                    <SVG width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M11.997 2.04c-2.715 0-3.056.011-4.122.06-1.064.048-1.79.217-2.426.463a4.901 4.901 0 0 0-1.771 1.151 4.89 4.89 0 0 0-1.153 1.767c-.247.635-.416 1.36-.465 2.422C2.011 8.967 2 9.307 2 12.017s.011 3.049.06 4.113c.049 1.062.218 1.787.465 2.422a4.89 4.89 0 0 0 1.153 1.767 4.901 4.901 0 0 0 1.77 1.15c.636.248 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.217 2.426-.464a4.901 4.901 0 0 0 1.77-1.15 4.89 4.89 0 0 0 1.154-1.768c.247-.635.416-1.36.465-2.422.048-1.064.06-1.404.06-4.113 0-2.71-.012-3.05-.06-4.114-.049-1.062-.218-1.787-.465-2.422a4.89 4.89 0 0 0-1.153-1.767 4.901 4.901 0 0 0-1.77-1.15c-.637-.247-1.363-.416-2.427-.464-1.067-.049-1.407-.06-4.122-.06m0 1.797c2.67 0 2.985.01 4.04.058.974.045 1.503.207 1.856.344.466.181.8.397 1.15.746.349.35.566.682.747 1.147.137.352.3.88.344 1.853.048 1.052.058 1.368.058 4.032 0 2.664-.01 2.98-.058 4.031-.044.973-.207 1.501-.344 1.853a3.09 3.09 0 0 1-.748 1.147c-.35.35-.683.565-1.15.746-.352.137-.88.3-1.856.344-1.054.048-1.37.058-4.04.058-2.669 0-2.985-.01-4.039-.058-.974-.044-1.504-.207-1.856-.344a3.098 3.098 0 0 1-1.15-.746 3.09 3.09 0 0 1-.747-1.147c-.137-.352-.3-.88-.344-1.853-.049-1.052-.059-1.367-.059-4.031 0-2.664.01-2.98.059-4.032.044-.973.207-1.501.344-1.853a3.09 3.09 0 0 1 .748-1.147c.35-.349.682-.565 1.149-.746.352-.137.882-.3 1.856-.344 1.054-.048 1.37-.058 4.04-.058"></path><path d="M11.997 15.342a3.329 3.329 0 0 1-3.332-3.325 3.329 3.329 0 0 1 3.332-3.326 3.329 3.329 0 0 1 3.332 3.326 3.329 3.329 0 0 1-3.332 3.325m0-8.449a5.128 5.128 0 0 0-5.134 5.124 5.128 5.128 0 0 0 5.134 5.123 5.128 5.128 0 0 0 5.133-5.123 5.128 5.128 0 0 0-5.133-5.124m6.536-.203c0 .662-.537 1.198-1.2 1.198a1.198 1.198 0 1 1 1.2-1.197"></path></SVG>
                </Link>
                <Link href="#">
                    <SVG width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M3.406 2h18.596v12.814l-5.469 5.47H12.47L9.813 22.94H7.001v-2.657H2V5.594L3.406 2zm16.721 11.876v-10H5.125v13.126h4.22v2.656L12 17.002h5l3.126-3.126z"></path><path d="M17.002 7.47v5.469h-1.875v-5.47zM12.001 7.47v5.469h-1.875v-5.47z"></path></SVG>
                </Link>
                <Link href="https://twitter.com/MurariSabavath_" target="blank">
                    <SVG width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path></SVG>
                </Link>
                <Link href="#">
                    <SVG width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path></SVG>
                </Link>
            </Inner>
            <Inner>
                <FooterLink href="#">Help</FooterLink>
                <FooterLink href="#">Site Index</FooterLink>
                <FooterLink href="#">IMDb Pro</FooterLink>
                <FooterLink href="#">Box Office Mojo</FooterLink>
                <FooterLink href="#">Press Room</FooterLink>
                <FooterLink href="#">Advertising</FooterLink>
                <FooterLink href="#">Jobs</FooterLink>
                <FooterLink href="#">Conditions of Use</FooterLink>
            </Inner>
            <Inner>
                <FooterLink href="#">Press Room</FooterLink>
                <FooterLink href="#">Advertising</FooterLink>
                <FooterLink href="#">Jobs</FooterLink>
                <FooterLink href="#">Conditions of Use</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Interest-Based Ads</FooterLink>
            </Inner>
            <Inner>
                <HeadingSM>&copy; 2021<FooterLink href="https://www.instagram.com/murari_sabavath/" target="blank">Murari Sabavath</FooterLink></HeadingSM>
            </Inner>
        </Container>
    </>
}

export default Footer;