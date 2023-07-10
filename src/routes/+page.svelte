<script>
  import Footer from "../components/Footer/+Footer.svelte";
  import GitStatsSection from "../components/GitStatsSection/+GitStatsSection.svelte";
  import MainInfo from "../components/MainInfo/+MainInfo.svelte";
</script>

<main class="grid lg:auto-rows-app-layout">
  <MainInfo />
  <GitStatsSection />
  <Footer />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme("colors.black");
  }
</style>
