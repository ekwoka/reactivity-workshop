<script lang="ts">
	import { FitText, Slide, Code } from '@components'
  let clicks = 0;
  const increment = () => clicks += 1
</script>

<Slide class="uppercase">
    <FitText type="h1" class="font-extrabold tracking-widest">What is reactivity?</FitText>
</Slide>
<Slide animate>
    <Code lang="ts">
      {`
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="1">
      {`
        let clicks = 0;
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="2">
      {`
        let clicks = 0;
        const button = document.querySelector('button')
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="3">
      {`
        let clicks = 0;
        const button = document.querySelector('button')
        button.textContent = \`\${clicks} clicks\`
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">0 clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="4|1-4|4">
      {`
        let clicks = 0;
        const button = document.querySelector('button')
        button.textContent = \`\${clicks} clicks\`
        button.addEventListener('click', () => clicks++)
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">0 clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="4|1">
      {`
        let clicks = 0;
        const button = document.querySelector('button')
        button.textContent = \`\${clicks} clicks\`
        button.addEventListener('click', () => clicks++)
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">0 clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="1|4">
      {`
        let clicks = 1;
        const button = document.querySelector('button')
        button.textContent = \`\${clicks} clicks\`
        button.addEventListener('click', () => clicks++)
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">0 clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="4|1">
      {`
        let clicks = 1;
        const button = document.querySelector('button')
        button.textContent = \`\${clicks} clicks\`
        button.addEventListener('click', () => clicks++)
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">0 clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="1|3">
      {`
        let clicks = 2;
        const button = document.querySelector('button')
        button.textContent = \`\${clicks} clicks\`
        button.addEventListener('click', () => clicks++)
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2">0 clicks</button>
</Slide>
<Slide animate>
    <Code lang="ts" lines="3">
      {`
        let clicks = ${clicks};
        const button = document.querySelector('button')
        button.textContent = \`\${clicks} clicks\`
        button.addEventListener('click', () => clicks++)
      `}
    </Code>
    <button type="button" class="rounded-lg bg-blue-700 shadow-lg hover:bg-blue-600 hover:shadow-none transition-all px-4 py-2" on:click={increment}>{clicks} clicks</button>
</Slide>
