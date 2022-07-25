<script>
  import Messages from '@/components/Messages.svelte';
import Stream from '@/components/Stream.svelte';
</script>

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
