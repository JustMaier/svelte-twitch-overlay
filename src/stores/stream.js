import { getStream } from '@/lib/twitch';
import { readable } from 'svelte/store';

const defaultStream = { title: null, viewers: 0, start: null };

export const stream = readable(defaultStream, function start(set) {
  let timeout;
  async function updateStreamInfo() {
    console.log('updating stream info');
    const stream = await getStream();
    if (!stream) {
      set(defaultStream);
      timeout = setTimeout(updateStreamInfo, 1 * 1000);
      return;
    }
    const { title, viewers, startDate: start } = stream;
    set({ title, viewers, start });
    timeout = setTimeout(updateStreamInfo, 60 * 1000);
  }
  updateStreamInfo();

  return function stop() {
    if (timeout) clearTimeout(timeout);
  };
});
