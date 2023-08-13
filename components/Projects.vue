<template>
    <div class="container-xxl py-5">
        <div class="primary-text text-center text-4xl text-md-5xl text-lg-7xl pb-5">
            OUR <span class="ryn-text-primary">PROJECTS</span>
        </div>
        <div class="projects row mx-auto pt-md-4">
            <div class="col-md-6 mb-4 mb-md-5">
                <div class="d-flex justify-content-center mb-md-5 mb-3">
                    <img src="/images/its.png" alt="">
                </div>
                <div class="item-text text-3xl text-lg-5xl">
                    ITS
                </div>
            </div>
            <div class="col-md-6 mb-4 mb-md-5">
                <div class="d-flex justify-content-center mb-md-5 mb-3">
                    <img src="/images/scada.png" alt="">
                </div>
                <div class="item-text text-3xl text-lg-5xl">
                    SCADA
                </div>
            </div>
            <div class="col-md-6 mb-4 mb-md-5 mb-md-0">
                <div class="d-flex justify-content-center mb-md-5 mb-3">
                    <img src="/images/tolling.png" alt="">
                </div>
                <div class="item-text text-3xl text-lg-5xl">
                    Tolling
                </div>
            </div>
            <div class="col-md-6">
                <div class="d-flex justify-content-center mb-md-5 mb-3">
                    <img src="/images/highway.png" alt="">
                </div>
                <div class="item-text text-3xl text-lg-5xl">
                    Highway
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center statistics mb-3">
            <span class="text-2xl text-md-4xl me-2 first-word ryn-text-primary">TOTAL</span> <span class="text-2xl text-md-4xl me-2 me-md-4 second-word">PROJECTS</span> <span class="text-4xl text-md-7xl total ryn-text-primary">82</span>
        </div>
        <div class="d-flex align-items-center justify-content-center statistics">
            <span class="text-2xl text-md-4xl me-2 first-word ryn-text-primary">SATISFIED</span> <span class="text-2xl text-md-4xl me-2 me-md-4 second-word">CUSTOMERS</span> <span class="text-4xl text-md-7xl total ryn-text-primary">47</span>
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
        color: #4E4E4E;
        font-family: SF Pro Text;
        // font-size: 72px;
        font-style: normal;
        font-weight: 600;
        // line-height: 78.836%;
        letter-spacing: -5.4px;
    }

    .projects {
        max-width: 700px;
        margin-bottom: 80px;

        img {
            height: 84px;
        }

        @include media-breakpoint-up(md) {
            img {
                height: 112px;
            }
        }

        .item-text {
            color: #000;
            text-align: center;
            font-family: SF Pro Text;
            // font-size: 48px;
            font-style: normal;
            font-weight: 600;
            // line-height: 78.836%; /* 37.841px */
            letter-spacing: -1.68px;
        }
    }

    .statistics {
        .first-word {
            // color: #F7B006;
            font-family: SF Pro Text;
            // font-size: 36px;
            font-style: normal;
            font-weight: 500;
            // line-height: normal;
            letter-spacing: -1.44px;
        }

        .second-word {
            color: #000;
            font-family: SF Pro Text;
            // font-size: 36px;
            font-style: normal;
            font-weight: 500;
            // line-height: normal;
            letter-spacing: -1.44px;
        }

        .total {
            // color: #F7B006;
            text-align: center;
            font-family: SF Pro Text;
            // font-size: 72px;
            font-style: normal;
            font-weight: 500;
            // line-height: normal;
            letter-spacing: -2.88px;
        }
    }
</style>