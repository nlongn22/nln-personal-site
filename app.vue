<template>
    <div class="container">
        <Navbar />

        <Transition
            name="page"
            mode="out-in"
        >
            <div
                :key="$route.fullPath"
                class="container__inner"
            >
                <NuxtPage />
            </div>
        </Transition>
        <Footer />
    </div>
</template>

<style lang="scss" scoped>
.container {
    @include page-gutter;
    display: flex;
    flex-direction: column;
    min-block-size: 100%;
    inline-size: 100%;
    max-inline-size: $global-max-width;
    margin-inline: auto;
    padding-block: $space-8;
}

.container__inner {
    margin-block-end: $space-14;
}

@include breakpoint(r(700)) {
    .container {
        padding-block: r(65);
    }
}

@include breakpoint(medium) {
    .container {
        padding-block: r(120);
    }
}

@include breakpoint(large) {
    .container {
        padding-block: r(140);
    }
}
</style>
