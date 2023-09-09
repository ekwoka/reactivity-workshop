<script lang="ts">
  import { Slide, Step, FitText, Code } from '@components';
</script>

<Slide class="group">
  <div
    class="!leading-loose transition-all duration-1000 group-[:has(p.fragment.visible)]:text-xs">
    <h2 class="font-semibold tracking-widest">What are some pitfalls?</h2>
    <p>Where does this implementation fall short?</p>
  </div>
  <Step>
    <div
      role="textbox"
      tabindex="0"
      on:keypress={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
      contenteditable
      on:click={(e) => {
        if (e.currentTarget?.textContent?.includes('write here'))
          e.currentTarget.textContent = '';
      }}
      class="!ring-none mx-auto my-4 h-full w-[40ch] max-w-max p-4 text-left italic leading-normal tracking-widest outline-none">
      // write here
    </div>
  </Step>
</Slide>
<Slide>
  <dl class="mx-auto max-w-max text-left text-xs">
    <dt class="mt-4">Can't disable effects</dt>
    <dd class="ml-8 italic">
      <ul>
        <Step fadeInThenSemiOut>
          <li>components added and removed</li>
        </Step>
        <Step fadeInThenSemiOut>
          <li>memory leaks</li>
        </Step>
      </ul>
    </dd>
    <Step>
      <dt class="mt-4">Can rerun effects too often</dt>
      <dd class="ml-8 italic">
        <ul>
          <Step fadeInThenSemiOut>
            <li>multiple updates to dependants at once</li>
          </Step>
          <Step fadeInThenSemiOut>
            <li>effects registering on same signal twice</li>
          </Step>
        </ul>
      </dd>
    </Step>
    <Step>
      <dt class="mt-4">Doesn't handle branching dependents</dt>
      <dd class="ml-8 italic">
        <ul>
          <Step fadeInThenSemiOut>
            <li>won't hook in to dependents not accessed</li>
          </Step>
          <Step fadeInThenSemiOut>
            <li>reacts to currently inactive dependents</li>
          </Step>
        </ul>
      </dd>
    </Step>
  </dl>
</Slide>
<Slide animate animateRestart>
  <h3 class="font-semibold tracking-widest">Releasing Effects</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-max">
    {`
        const price = new Signal(42)
        new Effect(() => button.textContent = price.get())
      `}
  </Code>
  <button
    type="button"
    class="rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none">
    42
  </button>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Releasing Effects</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-max">
    {`
        const price = new Signal(42)
        new Effect(() => button.textContent = price.get())
      `}
  </Code>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Releasing Effects</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-max">
    {`
        const price = new Signal(42)
        new Effect(() => button.textContent = price.get())
      `}
  </Code>
  <div class="flex items-center justify-between px-4 text-xs" data-id="map">
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-blue-500 p-2 text-neutral-900"
      data-id="price">
      <span>price</span> <span class="text-[.75em] italic">{`<Signal>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-green-500 p-2 text-neutral-900"
      data-id="effect">
      <span class="text-[.75em] italic">{`<Effect>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-red-500 p-3 text-neutral-900"
      data-id="button">
      <span>button</span>
      <span class="text-[.75em] italic">{`<Element>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-pink-500 p-3 text-neutral-900">
      <span class="text-[.75em] italic">{`<Document>`}</span>
    </div>
  </div>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Releasing Effects</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-max">
    {`
        const price = new Signal(42)
        new Effect(() => button.textContent = price.get())
      `}
  </Code>
  <div
    class="flex items-center justify-between px-4 text-xs transition-all"
    data-id="map">
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-blue-500 p-2 text-neutral-900"
      data-id="price">
      <span>price</span> <span class="text-[.75em] italic">{`<Signal>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-green-500 p-2 text-neutral-900"
      data-id="effect">
      <span class="text-[.75em] italic">{`<Effect>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-red-500 p-3 text-neutral-900"
      data-id="button">
      <span>button</span>
      <span class="text-[.75em] italic">{`<Element>`}</span>
    </div>
  </div>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Releasing Effects</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-max">
    {`
        const price = new Signal(42)
        new Effect(() => button.textContent = price.get())
      `}
  </Code>
  <div
    class="flex items-center justify-between px-4 text-xs transition-all"
    data-id="map">
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-orange-500 p-2 text-neutral-900">
      <span class="text-[.75em] italic">{`<Scope>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-blue-500 p-2 text-neutral-900"
      data-id="price">
      <span>price</span> <span class="text-[.75em] italic">{`<Signal>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-green-500 p-2 text-neutral-900"
      data-id="effect">
      <span class="text-[.75em] italic">{`<Effect>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-red-500 p-3 text-neutral-900"
      data-id="button">
      <span>button</span>
      <span class="text-[.75em] italic">{`<Element>`}</span>
    </div>
  </div>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Releasing Effects</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-max">
    {`
        const price = new Signal(42)
        new Effect(() => button.textContent = price.get())
      `}
  </Code>
  <div
    class="flex items-center justify-center -space-x-10 px-4 text-xs transition-all"
    data-id="map">
    <div
      class="z-20 flex aspect-square flex-col items-center justify-center rounded-full bg-blue-500 p-2 text-neutral-900"
      data-id="price">
      <span>price</span> <span class="text-[.75em] italic">{`<Signal>`}</span>
    </div>
    <div
      class="z-10 flex aspect-square flex-col items-center justify-center rounded-full bg-green-500 p-2 text-neutral-900"
      data-id="effect">
      <span class="text-[.75em] italic">{`<Effect>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-red-500 p-3 text-neutral-900"
      data-id="button">
      <span>button</span>
      <span class="text-[.75em] italic">{`<Element>`}</span>
    </div>
  </div>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Releasing Effects</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-max">
    {`
        const price = new Signal(42)
        new Effect(() => button.textContent = price.get())
      `}
  </Code>
  <div
    class="flex items-center justify-center -space-x-16 px-4 text-xs transition-all"
    data-id="map">
    <div
      class="z-20 flex aspect-square flex-col items-center justify-center rounded-full bg-blue-500 p-2 text-neutral-900"
      data-id="price">
      <span>price</span> <span class="text-[.75em] italic">{`<Signal>`}</span>
    </div>
    <div
      class="z-10 flex aspect-square flex-col items-center justify-center rounded-full bg-green-500 p-2 text-neutral-900"
      data-id="effect">
      <span class="text-[.75em] italic">{`<Effect>`}</span>
    </div>
    <div
      class="flex aspect-square flex-col items-center justify-center rounded-full bg-red-500 p-3 text-neutral-900"
      data-id="button">
      <span>button</span>
      <span class="text-[.75em] italic">{`<Element>`}</span>
    </div>
  </div>
  <div class="mx-auto !-mt-16 max-w-max">
    <div class="relative z-50 text-8xl">🗑️</div>
  </div>
</Slide>

<Slide animate animateRestart>
  <h3 class="font-semibold tracking-widest">Unnecessary Reruns</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-[72ch]">
    {`
        const items = [new Signal(42), new Signal(27)]
        new Effect(() =>
          total.textContent = items.reduce((a, b) => a + b.get(), 0)
        )
      `}
  </Code>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Unnecessary Reruns</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-[72ch]" lines="6-7">
    {`
        const items = [new Signal(42), new Signal(27)]
        new Effect(() =>
          total.textContent = items.reduce((a, b) => a + b.get(), 0)
        )

        const randomize = () =>
          items.forEach(num => num.set(Math.random() * 100))
      `}
  </Code>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Unnecessary Reruns</h3>
  <Code lang="ts" data-id="code" class="mx-auto max-w-[72ch]" offset="6">
    {`
        const randomize = () =>
          items.forEach(num => num.set(Math.random() * 100))
      `}
  </Code>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Unnecessary Reruns</h3>
  <Code
    lang="ts"
    data-id="code"
    class="mx-auto max-w-[72ch]"
    lines="2-3"
    offset="6">
    {`
        const randomize = () => {
          items[0].set(Math.random() * 100))
          items[1].set(Math.random() * 100))
        }
    `}
  </Code>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Unnecessary Reruns</h3>
  <Code
    lang="ts"
    data-id="code"
    class="mx-auto max-w-[72ch]"
    lines="2-5"
    offset="6">
    {`
        const randomize = () => {
          items[0].set(Math.random() * 100))
          total.textContent = items.reduce((a, b) => a + b.get(), 0)
          items[1].set(Math.random() * 100))
          total.textContent = items.reduce((a, b) => a + b.get(), 0)
        }
    `}
  </Code>
</Slide>
<Slide animate animateRestart>
  <h3 class="font-semibold tracking-widest">Branching Dependencies</h3>
  <Code
    lang="ts"
    data-id="code"
    class="mx-auto max-w-[40ch]"
    lines="1-10|5-10|1,6|6,9|1,3,6,9|2,7">
    {`
      const a = new Signal(42)
      const b = new Signal(27)
      const c = new Signal(99)

      new Effect(() => {
        if (a.get() > 50)
          total = a.get() + b.get()
        else
          total = a.get() + c.get()
      })
      // 143
    `}
  </Code>
</Slide>
<Slide animate>
  <h3 class="font-semibold tracking-widest">Branching Dependencies</h3>
  <Code
    lang="ts"
    data-id="code"
    class="mx-auto max-w-[40ch]"
    lines="13|1,6|1,2,7|14|5-10|1,3,6,9|15|5-10|1,3|1,2">
    {`
      const a = new Signal(42)
      const b = new Signal(27)
      const c = new Signal(99)

      new Effect(() => {
        if (a.get() > 50)
          total = a.get() + b.get()
        else
          total = a.get() + c.get()
      })

      // 143
      a.set(99) // reruns effect - 126
      b.set(3) // doesn't rerun effect - 126
      c.set(12) // reruns effect - 102
    `}
  </Code>
</Slide>
