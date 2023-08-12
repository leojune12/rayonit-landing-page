<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-xxl">
            <a class="navbar-brand" href="#">
                <img src="/images/logo.png" alt="">
            </a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-lg-flex ms-auto li-gap">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">PRODUCTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">OUR TEAM</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CONTACT</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="/images/197373-country-flags_3x2-1.png" alt=""> EN
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a class="dropdown-item" href="#">English</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">German</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Italiano</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end d-block d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <!-- <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> -->
                    <a class="navbar-brand" href="#">
                        <img src="/images/logo.png" alt="">
                    </a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 li-gap">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">PRODUCTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">OUR TEAM</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/images/197373-country-flags_3x2-1.png" alt=""> EN
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">English</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">German</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Italiano</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    @import "~/assets/scss/mixins/breakpoints";

    .navbar {
        padding-top: 20px;
    }

    @include media-breakpoint-up(lg) {
        .navbar {
            padding-top: 40px;
        }
    }

    .nav-link {
        color: #1E1E1E;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .li-gap {
        gap: 20px 60px;
    }
</style>