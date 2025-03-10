<template>
    <svg ref="svgContainer" :width="size" :height="size">
      <circle
        :cx="size/2"
        :cy="size/2"
        :r="size/3"
        :fill="color"
        stroke="black"
        stroke-width="1"
      />
      <text
        :x="size/2"
        :y="size/2"
        dy="0.35em"
        text-anchor="middle"
        alignment-baseline="middle"
        :font-size="`${size/5}px`"
        font-weight="bold"
        style="user-select: none"
      >
        {{ value }}
      </text>
    </svg>
</template>
  
<script>
export default {
  props: {
    size: { type: Number, default: 50 },
    value: { type: [Number, String], default: 0.22 },
    color: { type: String, default: 'skyblue' }
  }
};
</script>

<style scoped>
circle {
  transition: all 0.3s ease;
}
circle:hover {
  filter: brightness(0.9);
}
</style>