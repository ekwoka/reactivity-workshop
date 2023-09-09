<script>
  import { Code, Slide, Step, FitText } from '@components';
</script>

<Slide animate animateRestart class="">
  <FitText type="h2" class="font-semibold uppercase tracking-widest">
    Starter Repo
  </FitText>
  <Code data-id="bash" lang="sh" lines={false} class="mx-auto max-w-max">
    {`
      git clone https://github.com/ekwoka/reactivity-workshop
      cd reactivity-workshop
      pnpm i
      code .
    `}
  </Code>
</Slide>
<Slide animate>
  <div class="text-1xl mx-auto flex max-w-max flex-col gap-0 leading-normal">
    <Step fadeInThenSemiOut class="mr-auto block">
      reactivity-workshop <span
        class="opacity-50 transition-opacity [.visible:not(.current-fragment)>&]:opacity-0">
        // root</span>
    </Step>
    <Step fadeInThenSemiOut class="mr-auto block">├── packages</Step>
    <Step fadeInThenSemiOut class="mr-auto block whitespace-pre">
      │ └── reactivity <span
        class="italic opacity-50 transition-opacity [.visible:not(.current-fragment)>&]:opacity-0">
        // do work here</span>
    </Step>
    <Step fadeInThenSemiOut class="mr-auto block whitespace-pre">
      │ ├── src <span
        class="italic opacity-50 transition-opacity [.visible:not(.current-fragment)>&]:opacity-0">
        // our engine!</span>
    </Step>
    <Step fadeInThenSemiOut class="mr-auto block whitespace-pre">
      │ └── tests <span
        class="italic opacity-50 transition-opacity [.visible:not(.current-fragment)>&]:opacity-0">
        // tests, obviously</span>
    </Step>
    <Step fadeInThenSemiOut class="mr-auto block">
      ├── sandbox <span
        class="italic opacity-50 transition-opacity [.visible:not(.current-fragment)>&]:opacity-0">
        // for playing</span>
    </Step>
    <Step fadeInThenSemiOut class="mr-auto block">
      └── workshop <span
        class="italic opacity-50 transition-opacity [.visible:not(.current-fragment)>&]:opacity-0">
        // these slides</span>
    </Step>
  </div>
</Slide>
<Slide animate>
  <h2 class="font-semibold tracking-wider">Important Commands</h2>
  <dl class="mx-auto max-w-max text-left">
    <Step class="mt-4">
      <dt>pnpm run test:</dt>
      <dd class="ml-8 italic">Runs tests (Vitest)</dd>
    </Step>
    <Step class="mt-4">
      <dt>pnpm run sandbox:</dt>
      <dd class="ml-8 italic">Launches sandbox page (Vite)</dd>
    </Step>
    <Step class="mt-4">
      <dt>pnpm run slides:</dt>
      <dd class="ml-8 italic">Launches slideshow (Svelte)</dd>
    </Step>
  </dl>
</Slide>
