<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";
import avatar from "@/assets/login/avatar.svg?component";

const props = defineProps({
  collapse: Boolean
});

const { shortTitle } = useNav();
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapses: props.collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="props.collapse"
        key="props.collapse"
        :title="shortTitle"
        class="sidebar-logo-link"
        to="/"
      >
        <avatar style="width: 35px; height: 35px" />
        <span class="sidebar-title">{{ shortTitle }}</span>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="shortTitle"
        class="sidebar-logo-link"
        to="/"
      >
        <avatar style="width: 35px; height: 35px" />
        <span class="sidebar-title">{{ shortTitle }}</span>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  width: 100%;
  height: 48px;
  overflow: hidden;
  position: relative;

  .sidebar-logo-link {
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    img {
      height: 32px;
      display: inline-block;
    }

    .sidebar-title {
      height: 32px;
      line-height: 32px;
      margin: 2px 0 0 12px;
      color: $subMenuActiveText;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
