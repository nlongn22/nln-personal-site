<template>
    <nav class="navbar">
        <section>
            <NuxtLink to="/" class="navbar__link border-bottom">
                Home
            </NuxtLink>
        </section>

        <section class="navbar__right">
            <NuxtLink to="/skills" class="navbar__link border-bottom">
                Skills
            </NuxtLink>
            <NuxtLink to="/projects" class="navbar__link border-bottom">
                Projects
            </NuxtLink>
            <span
                class="navbar__theme-switcher"
                @click="changeTheme"
            >
                {{ colorMode.preference }}
            </span>
        </section>
    </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const themes = ['system', 'dark', 'light'];

let index: number = 0;

function changeTheme(): void {
    index === 2 ? index = 0 : index++;
    colorMode.preference = themes[index];

    setTimeout(() => {
        changeMetaTheme();
    }, 5);
}

function changeMetaTheme(): void {
    const themeColor = document.documentElement.className === 'dark-mode' ? '#232931' : '#fbfbfb';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
}

function listenToThemeChange(): void {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        changeMetaTheme();
    });
}

onMounted(() => {
    listenToThemeChange();
    changeMetaTheme();
});
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    margin-block-end: $space-7;
}

.navbar__right {
    display: flex;
    align-items: center;
    column-gap: $space-2;
    margin-left: $space-2;
}

.navbar__theme-switcher {
    margin-top: r(-6.5px);
    font-weight: $font-weight-medium;
    cursor: pointer;
    transition: color $transition-duration-default;

    @include has-hover {
        color: $color-primary-regular;
    }

    &::first-letter {
        text-transform: capitalize;
    }
}

.dark-mode body {

    .navbar__theme-switcher {
        @include has-hover {
            color: $color-primary-darker;
        }
    }
}

@include breakpoint(r(700)) {

    .navbar {
        justify-content: space-between;
    }
}
</style>
