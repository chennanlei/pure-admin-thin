<script setup lang="ts">
import { getConfig } from "@/config";

const title = getConfig().Title;

defineOptions({
  name: "Welcome"
});
</script>

<template>
  <h1>欢迎访问{{ title }}</h1>
</template>
