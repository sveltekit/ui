<script>
  import Avatar, { options } from 'sveltekit/Avatar';

  export let initials = 'RB';
  export let size = options.size.MEDIUM;
</script>

<Avatar alt="{initials}" {size}></Avatar>
