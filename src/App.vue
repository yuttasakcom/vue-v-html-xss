<template>
  <div>
      <h1>XSS</h1>
       <div v-html="attack"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attack: '<a onmouseover=alert(document.cookie)>click me!</a>'
    }
  }
}
</script>
