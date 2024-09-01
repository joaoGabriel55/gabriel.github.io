<script lang="ts">
  import Footer from "./components/Footer/+Footer.svelte";
  import GitStatsSection from "./components/GitStatsSection/+GitStatsSection.svelte";
  import MainInfo from "./components/MainInfo/+MainInfo.svelte";

  export const prerender = true;
</script>

<main class="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
  <MainInfo />
  <GitStatsSection />
</main>
<Footer />

<style lang="postcss">
  :global(html) {
    background-color: theme("colors.black");
  }
</style>
