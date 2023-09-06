<script>
  import { Slide, Step, FitText, Code } from '@components';
</script>

<Slide animate>
    <FitText type="h2" class="font-extrabold tracking-widest uppercase">What the hecks a Signal?</FitText>
</Slide>
<Slide animate>
    <FitText type="h2" class="font-extrabold tracking-widest uppercase">What the hecks a Signal?</FitText>
    <p>a <i>reactive</i> primitive</p>
</Slide>
<Slide animate>
  <Code lang="ts" data-id="code" class="w-[40ch] mx-auto">
    {`
      let a = 42;
      let b = a + 27;
      b; // 69
      a = 99;
      b // 69
    `}
  </Code>
</Slide>
<Slide animate>
  <Code lang="ts" data-id="code" class="w-[40ch] mx-auto">
    {`
      const a = signal(42);
      const b = signal(() => a() + 27);
      b(); // 69
      a(99);
      b(); // 126
    `}
  </Code>
</Slide>
<Slide animate>
  <FitText as="h3" class="font-extrabold tracking-widest uppercase">Basic Signal API</FitText>
  <Code lang="ts" data-id="othercode" class="w-[40ch] mx-auto">
    {`
      // create a signal
      const a = new Signal(42)

      // read a signal
      a.get()

      // write a signal
      a.set(99)
    `}
  </Code>
</Slide>
<Slide animate>
  <p class="font-extrabold tracking-widest uppercase">Let's write some code!</p>
</Slide>
