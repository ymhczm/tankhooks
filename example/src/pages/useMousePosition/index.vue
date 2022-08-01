<template>
  <div style="display: flex; align-items: flex-start">
    <p>clickX:{{ clickX }}</p>
    <p>clickY:{{ clickY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMousePosition } from "../../../build/index.js";

const { clickY, clickX } = useMousePosition();
</script>
