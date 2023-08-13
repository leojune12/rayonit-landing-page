<template>
    <div class="container-xxl py-5">
        <div class="mx-auto hiring py-5 px-3 px-md-5">
            <div class="px-0 px-md-5">
                <div class="mb-5">
                    <div class="primary-text text-xl text-md-2xl mb-3">
                        BECOME ONE OF US!
                    </div>
                    <div class="secondary-text text-xl text-md-2xl text-center">
                        You are an Engineer? Creative Person? Digital Specialist? Join our team! Hard working individuals are always welcome in our company
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row">
                    <div class="mb-5 mb-md-0">
                        <div class="we-are-hiring text-2xl text-md-4xl text-center text-md-start mb-2">
                            WE ARE HIRING
                        </div>
                        <div class="hiring-position text-2xl text-md-4xl text-center text-md-start mb-2">
                            Senior Java Developer
                        </div>
                        <div class="hiring-position text-2xl text-md-4xl text-center text-md-start mb-2">
                            FrontEnd Devoloper
                        </div>
                    </div>
                    <div class="flex-grow-1 d-flex justify-content-center justify-content-md-end align-items-center">
                        <div class="d-flex">
                            <a href="#" class="apply-now-btn text-decoration-none px-4 py-3">
                                Apply now
                            </a>
                        </div>
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
    .hiring {
        max-width: 800px;
        border-radius: 25px;
        background: rgba(255, 0, 0, 0.25);

        .primary-text {
            color: #D10000;
            text-align: center;
            font-family: SF Pro Text;
            // font-size: 24px;
            font-style: normal;
            font-weight: 500;
            // line-height: 114.836%; /* 27.561px */
            letter-spacing: -0.96px;
        }

        .secondary-text {
            color: #4B4B4B;
            font-family: SF Pro Text;
            // font-size: 24px;
            font-style: normal;
            font-weight: 500;
            // line-height: 114.836%;
            letter-spacing: -0.96px;
        }

        .we-are-hiring {
            color: #D10000;
            font-family: SF Pro Text;
            // font-size: 40px;
            font-style: normal;
            font-weight: 500;
            // line-height: normal;
            letter-spacing: -0.4px;
        }

        .hiring-position {
            color: #4B4B4B;
            font-family: SF Pro Text;
            // font-size: 36px;
            font-style: normal;
            font-weight: 500;
            // line-height: 0%; /* 0px */
            letter-spacing: -1.44px;
        }

        .apply-now-btn {
            background: #FFF;

            &:hover {
                background: #f0f0f0;
            }

            color: #FF4343;
            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 100% */
        }
    }
</style>