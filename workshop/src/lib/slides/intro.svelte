<script lang="ts">
  import { FitText, Slide, Step } from '@components';
  import Alpine from '@components/icons/alpine.svelte';
  import Next from '@components/icons/next.svelte';
  import Preact from '@components/icons/preact.svelte';
  import Typescript from '@components/icons/typescript.svelte';
</script>

<Slide animate class="uppercase">
  <h1 class="font-extrabold tracking-widest">
    <FitText type="span" class="font-extrabold tracking-widest"
      >Reactivity</FitText>
    <FitText type="span" class="font-extrabold tracking-widest"
      >from Scratch</FitText>
  </h1>
</Slide>
<Slide animate animateRestart class="flex flex-col uppercase">
  <FitText type="h2" class="block font-extrabold tracking-widest">
    Who the heck am I?
  </FitText>
  <Step class="block text-xs font-extrabold tracking-widest">
    🎉 Eric Kwoka 🚀
  </Step>
  <Step class="block text-xs font-extrabold tracking-widest">
    Full Stack Engineer,Self Employed
  </Step>
</Slide>
<Slide animate class="uppercase">
  <div
    class="mx-auto flex max-w-prose flex-wrap items-center justify-center gap-4">
    <div class="flex flex-col items-center gap-1" data-id="alpine">
      <Alpine className="w-20 h-20 text-[#8BC0D0]" />
      <span class="text-sm">Alpinejs</span>
    </div>
  </div>
</Slide>
<Slide animate animateRestart>
  <FitText type="h2" class="font-semibold tracking-widest">
    What are we doing here?
  </FitText>
</Slide>
<Slide animate>
  <h2 class="text-3xl font-semibold tracking-widest" data-id="title">
    Workshop Goals
  </h2>
  <ul data-id="info">
    <Step fadeInThenSemiOut type="li" class="mt-4">learn about reactivity</Step>
    <Step fadeInThenSemiOut type="li" class="mt-4">
      design a reactivity engine api
    </Step>
    <Step fadeInThenSemiOut type="li" class="mt-4">
      optimize the snot out of it
    </Step>
  </ul>
</Slide>
<Slide animate>
  <h2 class="font-semibold tracking-widest" data-id="title">
    Workshop Timeline
  </h2>
  <ul data-id="info" class="mx-auto max-w-max text-left text-[.5rem]">
    <Step fadeInThenSemiOut type="li" class="mt-4">Intro Presentation</Step>
    <Step fadeInThenSemiOut type="li" class="mt-4">
      <span class="italic">Code Along</span>: Basic Implementations
    </Step>
    <Step fadeInThenSemiOut type="li" class="mt-4">
      <span class="italic">Discussion</span>: Pitfalls and Opportunities
    </Step>
    <Step fadeInThenSemiOut type="li" class="mt-4">
      <span class="italic">Break/Code Alone</span>: Optimizations and
      Experimentations
    </Step>
    <Step fadeInThenSemiOut type="li" class="mt-4">
      <span class="italic">Code Along</span>: Implement Optimizations
    </Step>
    <Step fadeInThenSemiOut type="li" class="mt-4">
      <span class="italic">Homework?</span>: Reactive Stores
    </Step>
  </ul>
</Slide>
