<script>
  import { messages } from '@/stores/messages';
  import { fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import RelativeTime from '@/components/RelativeTime.svelte';
</script>

{#each $messages as { user, content, id, date } (id)}
  <div
    class="flex flex-col border shadow-sm rounded-xl bg-gray-800 border-gray-700 shadow-slate-700/[.7] mb-2 p-4"
    in:fly={{ y: -200, duration: 500 }}
    out:fly={{ x: 500, duration: 500 }}
    animate:flip={{ duration: 500 }}
  >
    <div class="flex items-center">
      <img
        class="h-7 w-7 rounded-md ring-1 ring-gray-700"
        src={user.avatar}
        alt={`${user.name}'s avatar`}
      />
      <h3 class="text-md font-bold text-white ml-2">
        {user.name}
      </h3>
      <p class="text-md ml-auto text-gray-500"><RelativeTime {date} /></p>
    </div>
    <p class="mt-2 text-gray-400">
      {content}
    </p>
  </div>
{/each}
