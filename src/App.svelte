<script>
  import Messages from '@/components/Messages.svelte';
  import Stream from '@/components/Stream.svelte';

  import { stream } from '@/stores/stream';

  let favicon = '⭕';
  stream.subscribe(({title}) => {
    favicon = !title ? '⭕' : '🟢';
  });
</script>

<svelte:head>
  <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`}>
</svelte:head>

<main class="h-screen">
  <div class="w-4/5 absolute top-0 left-0 p-2">
    <Stream />
  </div>
  <div class="w-1/5 h-screen absolute top-0 right-0 overflow-hidden p-2">
    <Messages />
  </div>
</main>

<style>
  .messages {
    max-width: 200px;
  }
</style>
