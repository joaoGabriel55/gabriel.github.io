<script lang="ts">
  const stats = [
    {
      src: "https://streak-stats.demolab.com/?user=joaoGabriel55&theme=dark&hide_border=true&border_radius=0&date_format=M%20j%5B%2C%20Y%5D",
      alt: "github streak",
    },
    {
      src: "https://github-readme-stats.vercel.app/api/top-langs/?username=joaoGabriel55&layout=compact&show_icons=true&title_color=FFF&text_color=FFF&bg_color=151515&hide_border=true",
      alt: "github languages",
    },
  ];
</script>

<div class="bg-app-color flex lg:justify-center lg:px-48 overflow-auto">
  {#each stats as { src, alt }}
    <img {src} {alt} loading="lazy" />
  {/each}
</div>
