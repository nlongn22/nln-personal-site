<template>
    <nav class="navbar">
        <Meta name="theme-color" :content="getCurrentTheme()" />

        <section class="navbar__links">
            <NuxtLink
                v-for="(link, linkIndex) in links"
                :key="linkIndex"
                :to="link.path"
            >
                <div class="border-bottom">
                    {{ link.name }}
                    <span class="border-bottom__dot" />
                </div>
            </NuxtLink>
        </section>

        <Icon
            :key="iconKey"
            :name="colorMode.preference"
            class="navbar__theme-switcher"
            @click="changeTheme"
        />
    </nav>
</template>

<script setup lang="ts">
export interface ILinks {
    path: string;
    name: string;
}

const links: ILinks[] = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/skills',
        name: 'Skills',
    },
    {
        path: '/projects',
        name: 'Projects',
    },
];
const colorMode = useColorMode();
const themes = ['system', 'dark', 'light'];
const iconKey = ref(0);

function rerenderIcon(): void {
    iconKey.value++;
}

function getCurrentTheme(): string {
    return colorMode.value === 'dark' ? '#232931' : '#fbfbfb';
}

function changeTheme(): void {
    let currentThemeIndex: number = themes.indexOf(colorMode.preference);
    currentThemeIndex === 2 ? currentThemeIndex = 0 : currentThemeIndex++;
    colorMode.preference = themes[currentThemeIndex];

    rerenderIcon();
}

onMounted((): void => {
    rerenderIcon();
});
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    column-gap: $space-4;
    align-items: center;
    margin-block-end: $space-14;
}

.navbar__links {
    display: flex;
    align-items: center;
    column-gap: $space-4;
}

.navbar__theme-switcher {
    cursor: pointer;
    margin-block-end: r(6);
    font-size: r(22);
    transition: color $transition-duration-fast;

    @include has-hover {
        color: $color-primary-regular;
    }
}

.dark-mode .navbar__theme-switcher {
    @include has-hover {
        color: $color-primary-darker;
    }
}
</style>
