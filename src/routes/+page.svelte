<script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client'

  import { page } from '$app/stores'
</script>

<div>
  <p>Hi 👋</p>
  <p>{JSON.stringify($page.data.session)}</p>
  <button
    on:click={() => {
      signIn()
    }}>Sign In</button
  >
  <button
    on:click={() => {
      signOut()
    }}>Sign Out</button
  >
</div>
