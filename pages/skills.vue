<template>
    <main class="skills__page">
        <section>
            <h1 class="skills__title">
                Work experience
            </h1>
            <ul>
                <li
                    v-for="(experience, index) in experiences"
                    :key="index"
                >
                    {{ experience.company }}
                    <span class="skills__company-duration">
                        ({{ experience.duration }})
                    </span>
                </li>
            </ul>
        </section>

        <section>
            <h2 class="skills__title">
                Technologies
            </h2>
            <ul>
                <li
                    v-for="(technology, index) in technologies"
                    :key="index"
                >
                    {{ technology }}
                </li>
            </ul>
        </section>

        <section>
            <h2 class="skills__title">
                Languages
            </h2>
            <ul>
                <li
                    v-for="(language, index) in languages"
                    :key="index"
                >
                    {{ language }}
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup lang="ts">
useHead({
    title: 'Ngoc Long Nguyen | Skills',
});

interface Experience {
    company: string;
    duration: string;
}

const experiences: Experience[] = [
    {
        company: 'Apploud Digital',
        duration: 'January 2022 - August 2022',
    },
];
const languages = ['Czech', 'English', 'German', 'Vietnamese'];
const technologies = [
    'Nuxt.js',
    'Vue.js',
    'Javascript + Typescript',
    'HTML 5',
    'CSS + SASS',
    'GSAP',
    'GIT',
    'REST API',
    'GraphQL',
    'DatoCMS',
];
</script>

<style lang="scss" scoped>
.skills__page {
    display: flex;
    flex-direction: column;
    row-gap: $space-8;
}

.skills__title {
    margin-block-end: $space-2;
}

.skills__company-duration {
    font-size: r(14);
    font-style: italic;
    font-weight: $font-weight-light;
}
</style>
