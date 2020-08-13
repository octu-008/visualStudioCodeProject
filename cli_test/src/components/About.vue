<template>
<div>
  <h2 class="font-color-green">这里是about页面</h2>
</div>
</template>
<script>
 export default {
   name: 'About',
    created() {
     console.log('About created');
   },
   destroyed() {
     console.log('About destroyed');
   },
}
</script>
<style scoped>
.font-color-green
{
  color: green
}
</style>