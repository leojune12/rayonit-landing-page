<template>
    <div class="container-xxl py-5">
        <div class="mx-auto">
            <div class="d-block d-md-flex justify-content-between mb-5">
                <div class="mb-5 mb-md-0">
                    <div class="mb-3 mb-md-4 address text-center text-md-start">
                        <div class="info-title mb-1">
                            ADDRESS:
                        </div>
                        <div class="info-description">
                            Rr. Reshit Petrela, Kompleksi Usluga, Kati 2, Tiranë - Albania, Nipt: L72206043S
                        </div>
                    </div>
                    <div class="d-block d-md-flex gap-5 text-center text-md-start">
                        <div class="mb-md-0 mb-3 mb-md-0">
                            <div class="info-title mb-1">
                                PH.NO:
                            </div>
                            <div class="info-description">
                                +355 (0) 694045400
                            </div>
                        </div>
                        <div>
                            <div class="info-title mb-1">
                                E-MAIL:
                            </div>
                            <div class="info-description">
                                info@rayonit.com
                            </div>
                        </div>
                    </div>
                </div>
                <div class="links d-flex gap-md-5 justify-content-around align-self-end">
                    <a href="#">PRODUCTS</a>
                    <a href="#">OUR TEAM</a>
                    <a href="#">CONTACT</a>
                </div>
            </div>
            <div class="d-flex gap-4 justify-content-center mb-5">
                <a href="#">
                    <img src="/images/linked_in.svg" alt="">
                </a>
                <a href="#">
                    <img src="/images/facebook.svg" alt="">
                </a>
                <a href="#">
                    <img src="/images/twitter.svg" alt="">
                </a>
            </div>
            <div class="footer-text text-center d-block d-md-flex justify-content-md-center">
                <div class="mb-2 me-0 me-md-3">
                    All Rights Reserved © 2021 RAYONIT
                </div>
                <a href="#">
                    Privacy  Policy
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    @import "~/assets/scss/mixins/breakpoints";

    @include media-breakpoint-up(md) {
        .address {
            max-width: 320px;
        }
    }

    .info-title {
        color: #F7B006;
        font-family: Poppins;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.375px;
    }

    .info-description {
        color: #000;
        font-family: Poppins;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.375px;
    }

    .links {
        a {
            color: #1E1E1E;
            font-family: Roboto;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .footer-text {
        color: #4E4E4E;
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.25px;
    }

    .footer-text {
        & a {
            color: #4E4E4E;
            font-family: Poppins;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.25px;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>