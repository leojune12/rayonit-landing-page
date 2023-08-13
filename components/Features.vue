<template>
    <div class="container-xxl py-5">
        <div class="row features">
            <div class="col-lg-4 mb-4 mb-lg-0">
                <div class="feature mx-auto pe-0 pe-lg-4 ps-0 ps-lg-3">
                    <div class="image d-flex justify-content-center mb-4">
                        <img src="/images/rocket.png" alt="">
                    </div>
                    <div class="title text-3xl text-md-4xl text-center mb-4">
                        From Zero to One
                    </div>
                    <div class="description text-justify">
                        We are an Information and Communication Technology (ICT) company specialized in the design and development of management systems. We combine vertical market expertise with the advantages from innovative technologies, such as Big Data, Social Networking, Cloud Computing, to optimize and integrate processes, applications and devices for customer service.
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
                <div class="feature mx-auto px-0 px-lg-4">
                    <div class="image d-flex justify-content-center mb-4">
                        <img src="/images/lightning.png" alt="">
                    </div>
                    <div class="title text-3xl text-md-4xl text-center mb-4">
                        Our Level Up
                    </div>
                    <div class="description text-justify">
                        The presence of professionalism coming from the consulting sector and from the most established system integrators, with experience of know-how and complementary backgrounds, has allowed us to create a close, dynamic and reactive team. We believe that innovation is a key for increasing knowledge and developing new business opportunities.
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="feature mx-auto ps-0 ps-lg-4 pe-0 pe-lg-3">
                    <div class="image d-flex justify-content-center mb-4">
                        <img src="/images/heart.png" alt="">
                    </div>
                    <div class="title text-3xl text-md-4xl text-center mb-4">
                        Your Satisfaction
                    </div>
                    <div class="description text-justify">
                        We experiment with new technologies in our      Industry,    creating  intuitive    and easy-to-use      tools,    improving    user’s experience.  We    support       companies 
    in this new    way    of     interpreting    the network,      helping    them to      find new business   models    and   providing them with   a      domain    of    new     solutions available today.
                    </div>
                </div>
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

    .features {

        .feature {

            max-width: 500px;

            .image {
                // margin-bottom: 24px;
                img {
                    height: 72px;
                }

                @include media-breakpoint-up(md) {
                    img {
                        height: 100px;
                    }
                }
            }

            .title {
                color: #F7B006;
                text-align: justify;
                font-family: Roboto;
                // font-size: 39px;
                font-style: normal;
                font-weight: 700;
                // line-height: 109.187%; /* 42.583px */
                letter-spacing: -0.39px;
                // margin-bottom: 36px;
            }

            .description {
                color: #747474;
                text-align: justify;
                font-family: Roboto;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
    }
</style>