import { chatClient, getUser } from '@/lib/twitch';
import { readable } from 'svelte/store';

const { VITE_MESSAGE_DURATION: duration } = import.meta.env;

export const messages = readable([], function start(set) {
  let messages = [];

  function removeMessage(id){
    messages = messages.filter(x => x.id != id);
    set(messages);
  }

  const messageListener = chatClient.onMessage(async (channel, userName, content, msg) => {
    console.log(msg);
    const { id, date } = msg;
    console.log(msg.parseEmotes());
    const user = await getUser(userName);
    messages = [{ user, content, id, date }, ...messages].slice(0, 30);
    setTimeout(() => removeMessage(id), (duration ?? 60) * 1000);
    set(messages);
  });
  set(messages);

  return function stop() {
    messageListener.unbind();
  };
});
