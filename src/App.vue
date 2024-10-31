<script setup>
import { RouterView } from "vue-router";
import { provide, ref } from 'vue';

const globalInt = ref(0);
provide('globalInt', globalInt);

</script>

<template>
    <RouterView />
</template>

<style></style>
