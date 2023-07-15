<template>
    <main>
        <section class="person__wrapper">
            <address class="person__name">
                Ngoc Long Nguyen
            </address>
            &#8226;
            <label class="person__job">
                Frontend developer
            </label>
        </section>

        <section>
            <h1 class="message__header">
                Welcome
                <span class="message__header-wave" />
            </h1>
        </section>

        <section>
            <p class="font-regular">
                My name is Ngoc Long Nguyen but most people call me Filip. I'm a
                21 year old frontend developer who currently lives in
                <s>Munich</s> Berlin, Germany. At the moment I'm studying
                computer science at the Technical University of Berlin.
                <br>
                <br>
                In my free time (when I'm not learning anything) I like to watch
                TV shows or hang out with my friends. I'm quite a big fan of
                Formula 1 so every weekend is spent watching races and following
                news. To stay in shape I try to run every other day.
            </p>
        </section>
    </main>
</template>

<script lang="ts" setup>
useHead({
    title: 'Ngoc Long Nguyen | Home',
});
</script>

<style lang="scss" scoped>
.person__wrapper {
    margin-block-end: $space-8;
}

.person__name {
    display: inline;
    font-weight: $font-weight-semibold;
}

.person__job {
    font-weight: $font-weight-light;
}

.message__header {
    margin-block-end: $space-10;
    font-size: $space-9;
    font-weight: $font-weight-bold;
}

.message__header-wave {
    display: inline-block;
    transform-origin: 75% 75%;
    animation: wave $transition-duration-very-slow 0.75s;
}

.message__header-wave:hover {
    animation-play-state: running;
}

.message__header-wave::before {
    content: '👋';
}

@include breakpoint(r(700)) {
    .message__header {
        font-size: $space-12;
    }
}
</style>
