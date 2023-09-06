<script>
  import { Code, Slide, Step, FitText } from '@components'
</script>

<Slide animate class="">
  <FitText type="h2" class="font-semibold tracking-widest uppercase">
    Starter Repo
  </FitText>
  <Code data-id="bash" lang="sh" lines={false} class="max-w-max mx-auto">
    git clone https://github.com/ekwoka/reactivity-workshop
    cd reactivity-workshop
    pnpm i
    code .
  </Code>
</Slide>
<Slide animate>
  <div class="text-1xl max-w-max flex flex-col gap-0 leading-normal mx-auto">
  <Step fadeInThenSemiOut class="block mr-auto">reactivity-workshop <span class="opacity-50 [.visible:not(.current-fragment)>&]:opacity-0 transition-opacity">// root</span></Step>
  <Step fadeInThenSemiOut class="block mr-auto">├── packages</Step>
  <Step fadeInThenSemiOut class="block mr-auto whitespace-pre">│  └── reactivity <span class="opacity-50 [.visible:not(.current-fragment)>&]:opacity-0 transition-opacity">// do work here</span></Step>
  <Step fadeInThenSemiOut class="block mr-auto whitespace-pre">│     ├── src <span class="opacity-50 [.visible:not(.current-fragment)>&]:opacity-0 transition-opacity">// our engine!</span></Step>
  <Step fadeInThenSemiOut class="block mr-auto whitespace-pre">│     └── tests <span class="opacity-50 [.visible:not(.current-fragment)>&]:opacity-0 transition-opacity">// tests, obviously</span></Step>
  <Step fadeInThenSemiOut class="block mr-auto">├── sandbox <span class="opacity-50 [.visible:not(.current-fragment)>&]:opacity-0 transition-opacity">// for playing</span></Step>
  <Step fadeInThenSemiOut class="block mr-auto">└── workshop <span class="opacity-50 [.visible:not(.current-fragment)>&]:opacity-0 transition-opacity">// these slides</span></Step>
  </div>
</Slide>
