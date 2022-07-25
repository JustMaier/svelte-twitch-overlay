<script>
  import { stream } from '@/stores/stream';
  import RelativeTime from '@/components/RelativeTime.svelte';

  const styles = {
      card: 'flex border shadow-sm rounded-xl bg-gray-800 border-gray-700 shadow-slate-700/[.7] p-4'
  }
</script>

{#if $stream.title}
<div class="flex">
    <div class={`${styles.card} p-3 px-4`}>
        <h1 class="text-2xl">{$stream.title}</h1>
    </div>
    <div class={`${styles.card} flex-col py-2 ml-2`}>
        <p class="text-xs text-gray-400">Stream Started</p>
        <RelativeTime class="flex-1 text-sm flex place-items-center place-content-center" date={$stream.start} />
    </div>
    <div class={`${styles.card} flex-col py-2 ml-2`}>
        <p class="text-xs text-gray-400">Viewers</p>
        <p class="flex-1 text-sm flex w-full place-content-center place-items-center text-center">{$stream.viewers}</p>
    </div>
</div>
{:else}
<div class="flex">
    <div class={`${styles.card} p-3 px-4`}>
        <h1 class="text-2xl">Stream Offline</h1>
    </div>
</div>
{/if}
