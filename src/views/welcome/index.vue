<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";

defineOptions({
  name: "Welcome"
});
const { title } = useNav();
</script>

<template>
  <h1>欢迎进入{{ title }}</h1>
</template>
