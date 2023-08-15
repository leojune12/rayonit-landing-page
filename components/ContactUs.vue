<template>
    <div class="container-xxl py-5">
        <div class="section-title text-center mb-5 text-4xl text-md-5xl text-lg-7xl">
            CONTACT <span class="ryn-text-primary">US</span>
        </div>
        <form action="" class="mx-auto">
            <div class="row mb-0 mb-md-3">
                <div class="col-md-6 mb-3 mb-md-0">
                    <input type="text" name="name" class="ryn-form-input text-md-2xl px-3 py-3 w-100" placeholder="Name">
                </div>
                <div class="col-md-6 mb-3 mb-md-0">
                    <input type="text" name="email" class="ryn-form-input text-md-2xl px-3 py-3 w-100" placeholder="E-mail">
                </div>
            </div>
            <textarea name="message" rows="7" class="ryn-form-input text-md-2xl px-3 py-3 w-100 mb-3" placeholder="Message"></textarea>
            <div class="d-flex justify-content-center">
                <button class="ryn-btn-primary px-5">
                    Submit
                </button>
            </div>
        </form>s
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

    .section-title {
        color: #4E4E4E;
        text-align: center;
        font-family: SF Pro Text;
        // font-size: 72px;
        font-style: normal;
        font-weight: 700;
        // line-height: 78.836%; /* 56.762px */
        letter-spacing: -5.4px;
    }

    form {
        max-width: 800px;
        .ryn-form-input {
            border-radius: 13.493px;
            border: 0.75px solid #BDBDBD;
            background: #FFF;
        }
    }
</style>