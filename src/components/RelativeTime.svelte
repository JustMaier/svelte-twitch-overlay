<script>
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  dayjs.extend(relativeTime);

  export let date;
  let result = 'placeholder';

  let day;
  $: day = dayjs(date);

  const setRelativeTime = () => result = day.fromNow();
  let interval;
  $: {
      if (interval) clearInterval(interval);
      interval = setInterval(setRelativeTime, 60*1000);
      setRelativeTime();
  }
</script>

<span class={$$props.class}>{result}</span>
