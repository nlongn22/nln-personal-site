// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ngoc Long Nguyen',
            htmlAttrs: { lang: 'en' },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'format-detection',
                    content: 'telephone=no',
                },
                {
                    name: 'description',
                    content: 'Personal site by Ngoc Long Nguyen',
                },
                {
                    name: 'author',
                    content: 'Ngoc Long Nguyen',
                },
                {
                    hid: 'og-site_name',
                    property: 'og:site_name',
                    content: 'nln',
                },
                {
                    hid: 'og-title',
                    property: 'og:title',
                    content: 'Ngoc Long Nguyen',
                },
                {
                    hid: 'og-description',
                    property: 'og:description',
                    content: 'Personal site by Ngoc Long Nguyen',
                },
                {
                    hid: 'og-image',
                    property: 'og:image',
                    content: '/og/og.png',
                },
                {
                    property: 'og:image:type',
                    content: 'image/png',
                },
                {
                    hid: 'default-theme-color',
                    name: 'theme-color', content: '#fbfbfb',
                },
            ],
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicons/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/favicons/favicon-96x96.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicons/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicons/favicon-16x16.png',
                },
                {
                    rel: 'mask-icon',
                    href: '/favicons/safari-pinned-tab.svg',
                    color: '#5bbad5',
                },
                {
                    rel: 'manifest',
                    href: '/favicons/site.webmanifest',
                },
            ],
        },
    },
    css: [
        '@/assets/styles/common/index.scss',
        '@/assets/styles/partials/index.scss',
    ],
    fontLoader: {
        local: [
            {
                src: '/fonts/Poppins-Light.ttf',
                family: 'Poppins',
                weight: '300',
            },
            {
                src: '/fonts/Poppins-Regular.ttf',
                family: 'Poppins',
                weight: '400',
            },
            {
                src: '/fonts/Poppins-Medium.ttf',
                family: 'Poppins',
                weight: '500',
            },
            {
                src: '/fonts/Poppins-SemiBold.ttf',
                family: 'Poppins',
                weight: '600',
            },
            {
                src: '/fonts/Poppins-Bold.ttf',
                family: 'Poppins',
                weight: '700',
            },
        ],
    },
    modules: [
        'nuxt-font-loader',
        'nuxt-simple-sitemap',
        '@nuxtjs/color-mode',
    ],
    site: {
        url: 'https://nln.fyi',
    },
    vite: {
        plugins: [
            svgLoader(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/core/index.scss" as *;',
                },
            },
        },
    },
});
