<script>
  import { Code, Slide, FitText } from '@components'
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
