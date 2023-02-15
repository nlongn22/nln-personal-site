<template>
    <nav class="navbar">
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

        <section>
            <Icon
                :key="iconKey"
                :name="colorMode.preference"
                class="navbar__theme-switcher"
                @click="changeTheme"
            />
        </section>
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

function rerenderComponent(): void {
    iconKey.value++;
}

function changeTheme(): void {
    let currentThemeIndex: number = themes.indexOf(colorMode.preference);
    currentThemeIndex === 2 ? currentThemeIndex = 0 : currentThemeIndex++;
    colorMode.preference = themes[currentThemeIndex];

    rerenderComponent();

    setTimeout(() => {
        changeMetaTheme();
    }, 1);
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
    rerenderComponent();
    changeMetaTheme();
    listenToThemeChange();
});
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    column-gap: $space-2;
    margin-block-end: $space-7;
}

.navbar__links {
    display: flex;
    align-items: center;
    column-gap: $space-2;
}

.navbar__theme-switcher {
    cursor: pointer;
    margin-block-start: r(2.5);
    font-size: r(22);
    transition: color $transition-duration-default;

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
