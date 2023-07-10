<script>
  import githubIcon from "$lib/assets/github-icon.svg";
  import instagramIcon from "$lib/assets/instagram-icon.svg";
  import linkedinIcon from "$lib/assets/linkedin-icon.svg";
  import profilePicture from "$lib/assets/profile.png";
  import { isMobile } from "../../modules/+CheckDevice.svelte";

  const socialNetworks = [
    {
      icon: githubIcon,
      alt: "github-icon",
      link: "https://github.com/joaoGabriel55",
    },
    {
      icon: linkedinIcon,
      alt: "linkedin-icon",
      link: "https://linkedin.com/in/gabriel-quaresma-dev",
    },
    {
      icon: instagramIcon,
      alt: "instagram-icon",
      link: "https://instagram.com/quaresmadraw",
    },
  ];

  const iconWidth = isMobile ? 60 : 80;
</script>

<div class="lg:justify-self-center flex flex-col items-center">
  <img src={profilePicture} alt="profile" class="lg:w-96 w-40 justify-self-center" />
  <div class="flex gap-12 pt-7 justify-center">
    {#each socialNetworks as { icon, alt, link }}
      <a
        href={link}
        target="_blank"
        class="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
      >
        <img
          src={icon}
          {alt}
          class="bg-white p-4 rounded-3xl"
          width={iconWidth}
        />
      </a>
    {/each}
  </div>
</div>
