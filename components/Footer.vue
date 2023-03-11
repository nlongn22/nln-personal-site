<template>
    <footer class="footer">
        <section class="footer__links">
            <a
                v-for="(link, index) in contactLinks"
                :key="link"
                :href="contactLinks[index]"
                :title="contactTitles[index]"
                target="_blank"
            >
                <div class="border-bottom">
                    {{ contactNames[index] }} &#8250;
                    <span class="border-bottom__dot" />
                </div>
            </a>
        </section>
    </footer>
</template>

<script setup lang="ts">
const contactLinks = [
    'https://linkedin.com/in/ngoc-long-nguyen',
    'mailto:22nlongn@gmail.com',
    'https://github.com/nlongn22',
];

const contactTitles = [
    'Go to linkedin.com',
    'Email 22nlongn@gmail.com',
    'Go to github.com',
];

const contactNames = ['LinkedIn', 'Email', 'GitHub'];
</script>

<style lang="scss" scoped>
.footer {
    margin-block-start: $space-14;
}

.footer__links {
    display: flex;
    align-items: center;
    column-gap: $space-4;
}
</style>
