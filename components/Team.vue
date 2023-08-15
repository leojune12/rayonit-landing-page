<template>
    <div class="container-xxl py-5">
        <div class="text-center pb-5">
            <div class="primary-text text-4xl text-md-5xl text-lg-7xl mb-3 pt-5">
                OUR <span class="ryn-text-primary">TEAM</span>
            </div>
            <div class="secondary-text text-2xl text-md-3xl">
                “We work on innovative projects and develop ideas.”<br>
                “Knowing the topic is just the starting point.”
            </div>
        </div>
        <div class="team-description text-2xl text-md-3xl py-5">
            <div class="title ryn-text-primary pb-4">
                YOUNG AND DYNAMIC TEAM
            </div>
            <div class="description text-center mx-auto">
                We are a close young group,  consisting  in professionals of different technologies and consulting areas, constructing a dynamic and multidisciplinary experienced team with know-how and complementary background.
            </div>
        </div>
        <div class="productive-team text-3xl text-md-4xl mx-auto py-5">
            Let’s take a closer look on how our productive team is created
        </div>
        <div class="team-positions py-5">
            <div class="item d-flex flex-column flex-md-row py-t">
                <div class="me-0 me-md-5 d-flex d-md-block justify-content-center mb-md-0 mb-4">
                    <img src="/images/webdesigner.png" alt="">
                </div>
                <div>
                    <div class="position ryn-text-primary text-4xl text-md-5xl text-center mb-3">
                        DESIGNER
                    </div>
                    <div class="description text-xl text-md-2xl text-justify">
                        The Designer is the translator of aesthetics and functional needs of a specific sector such as road systems, IT or management, in simple, intuitive and user interface (UI, UX, GRAPHIC DESIGN). This process uses processes and innovative projecting technique (design sprint).
                    </div>
                </div>
            </div>
            <div class="item d-flex flex-column flex-md-row ms-auto py-3">
                <div class="me-0 me-md-5 order-2 order-md-1">
                    <div class="position ryn-text-primary text-4xl text-md-5xl text-center mb-3">
                        DEVELOPER
                    </div>
                    <div class="description text-xl text-md-2xl text-justify">
                        The Developer often faces problems or projects that require specific solutions. By using technologies as JAVA, SCALA, FUNCTIONAL PROGRAMMING , etc, the result is a complex project within the team offering new experiences and increasing Industry’s opportunities for growth.
                    </div>
                </div>
                <div class="d-flex d-md-block justify-content-center mb-md-0 mb-4 order-1 order-md-2">
                    <img src="/images/webdeveloper.png" alt="">
                </div>
            </div>
            <div class="item d-flex flex-column flex-md-row pt-3">
                <div class="me-0 me-md-5 d-flex d-md-block justify-content-center mb-md-0 mb-4">
                    <img src="/images/analyst.png" alt="">
                </div>
                <div>
                    <div class="position ryn-text-primary text-4xl text-md-5xl text-center mb-3">
                        ANALYST
                    </div>
                    <div class="description text-xl text-md-2xl text-justify">
                        The Functional Analyst is responsible for the success, opportunity, development and creation and the external collaboration of a project. While working in the management of complex information systems, RAYONIT looks beyond, inspiring new ideas and reaching new markets.
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

    .primary-text {
        text-align: center;
        font-family: SF Pro Text;
        // font-size: 72px;
        font-style: normal;
        font-weight: 700;
        // line-height: 78.836%; /* 56.762px */
        letter-spacing: -5.4px;
    }

    .secondary-text {
        color: #222;
        text-align: center;
        font-family: SF Pro Text;
        // font-size: 30px;
        font-style: normal;
        font-weight: 500;
        // line-height: normal;
        letter-spacing: -1.2px;
    }

    .team-description {
        .title {
            text-align: center;
            font-family: SF Pro Text;
            // font-size: 32px;
            font-style: normal;
            font-weight: 700;
            // line-height: normal;
        }

        .description {
            font-family: SF Pro Text;
            // font-size: 30px;
            font-style: normal;
            font-weight: 500;
            // line-height: normal;
            max-width: 900px;
        }
    }

    .productive-team {
        color: #4E4E4E;
        text-align: center;
        font-family: SF Pro Text;
        // font-size: 40px;
        font-style: normal;
        font-weight: 500;
        // line-height: normal;
        letter-spacing: -2.4px;
        max-width: 700px;
    }

    .team-positions {

        .item {

            width: 100%;

            .position {
                text-align: center;
                font-family: Roboto;
                // font-size: 48px;
                font-style: normal;
                font-weight: 700;
                // line-height: 124.336%; /* 59.681px */
                letter-spacing: -0.48px;
            }

            .description {
                color: #222;
                font-family: Roboto;
                // font-size: 25px;
                font-style: normal;
                font-weight: 500;
                // line-height: 124.336%;
            }
        }

        @include media-breakpoint-up(md) {
            .item {
                width: 88%;
            }
        }
    }
</style>