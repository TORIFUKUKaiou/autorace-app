<template>
  <div>
    <Header />
    <Calendar />
  </div>
</template>

<script>
  import Calendar from '../components/Calendar'
  import Header from '../components/Header'

  export default {
    name: 'Home',

    components: {
      Calendar,
      Header
    }
  }
</script>
