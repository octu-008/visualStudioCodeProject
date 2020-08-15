<template>
    <div id="tab-bar">
      <slot name="item01"></slot>
      <slot name="item02"></slot>
      <slot name="item03"></slot>
      <slot name="item04"></slot>
    </div>
</template>
<script>
 export default {
   name: 'Tabbar'
}
</script>
<style scoped>
#tab-bar
{
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -1px 5px rgba(100, 100,100, .2);
}
</style>