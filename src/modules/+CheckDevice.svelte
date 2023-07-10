<script context="module">
  import Device from "svelte-device-info";

  export const isMobile = typeof window !== "undefined" && Device.isMobile;
</script>
