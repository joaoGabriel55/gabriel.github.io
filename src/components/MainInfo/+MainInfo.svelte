<script>
  import emailIcon from "../../lib/assets/email.svg";
  import locationIcon from "../../lib/assets/location.svg";
  import { isMobile } from "../../modules/+CheckDevice.svelte";
  import Info from "./+Info.svelte";
  import MyName from "./+MyName.svelte";
  import Overview from "./+Overview.svelte";
  import Profile from "./+Profile.svelte";
</script>

<div
  class="bg-white p-8 lg:p-20 bg-no-repeat bg-cover bg-mobile-background lg:bg-desktop-background lg:grid lg:grid-cols-2 lg:gap-40 flex flex-col justify-center"
>
  {#if isMobile}
    <div>
      <MyName />
      <Profile />
      <Overview />
      <div class="flex lg:flex-row flex-col gap-12 lg:pt-0 pt-3 pb-5">
        <Info icon={locationIcon} text="Natal - RN, Brazil" alt="Location" />
        <Info
          icon={emailIcon}
          text="Email me"
          alt="Email"
          link="mailto:j.quaresmasantos98@gmail.com"
        />
      </div>
    </div>
  {:else}
    <div class="flex flex-col justify-between">
      <div>
        <MyName />
        <Overview />
      </div>
      <div class="flex gap-12 pb-5">
        <Info icon={locationIcon} text="Natal - RN, Brazil" alt="Location" />
        <Info
          icon={emailIcon}
          text="Email me"
          alt="Email"
          link="mailto:j.quaresmasantos98@gmail.com"
        />
      </div>
    </div>
    <Profile />
  {/if}
</div>
