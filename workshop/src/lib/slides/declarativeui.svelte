<script lang="ts">
  import { Code, FitText, Slide, Step } from '@components';
  import Spinner from '@components/icons/spinner.svelte';
  import Cart from '@components/icons/cart.svelte';
  import { tweened } from 'svelte/motion';
  import { circOut } from 'svelte/easing';

  let cartValue = tweened(0, { duration: 2000, easing: circOut });
  let cartQuantity = tweened(0, { duration: 2000, easing: circOut });

  let pending = false;
  const submit = () => {
    pending = true;
    setTimeout(() => (pending = false), 2000);
  };
  let clicks = 0;
  const increment = () => (clicks += 1);
</script>

<Slide class="uppercase">
  <FitText type="h2" class="font-semibold tracking-widest">
    Declarative UI
  </FitText>
</Slide>
<Slide animate>
  <button
    type="button"
    class="grid-stack inline-grid max-w-max rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={submit}>
    <span class="mx-auto max-w-max" class:invisible={!pending}>
      <Spinner />
    </span>
    <span class="my-auto max-h-max" class:invisible={pending}>Submit</span>
  </button>
  <ul class="mx-auto max-w-max space-y-4 pl-4 text-left text-sm">
    <Step fadeInThenSemiOut type="li">
      When <span class="italic">button</span> is
      <span class="italic">pressed</span>
    </Step>
    <Step fadeInThenSemiOut type="li" class="ml-4">-> send request</Step>
    <Step fadeInThenSemiOut type="li" class="ml-4">
      -> show <span class="italic">spinner</span>
    </Step>
    <Step fadeInThenSemiOut type="li">
      when <span class="italic">request completes</span>
    </Step>
    <Step fadeInThenSemiOut type="li" class="ml-4">
      -> show <span class="italic">submit</span>
    </Step>
  </ul>
</Slide>
<Slide animate>
  <button
    type="button"
    class="grid-stack inline-grid max-w-max rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={submit}>
    <span class="mx-auto max-w-max" class:invisible={!pending}>
      <Spinner />
    </span>
    <span class="my-auto max-h-max" class:invisible={pending}>Submit</span>
  </button>
  <Code lang="ts" class="mx-auto max-w-[50ch]" lines="1-8|1,4,7|2-3,5-6|1-8">
    {`
      const makeRequest = async () => {
        buttonSpinner.classList.remove('hidden');
        buttonText.classList.add('hidden');
        const response = await fetch();
        buttonSpinner.classList.add('hidden');
        buttonText.classList.remove('hidden');
        return response.json();
      }
    `}
  </Code>
</Slide>
<Slide animate>
  <button
    type="button"
    class="grid-stack inline-grid max-w-max rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={submit}>
    <span class="mx-auto max-w-max" class:invisible={!pending}>
      <Spinner />
    </span>
    <span class="my-auto max-h-max" class:invisible={pending}>Submit</span>
  </button>
  <Code lang="ts" class="mx-auto max-w-[50ch]">
    {`
      const makeRequest = async () => {
        pending = true
        const response = await fetch();
        pending = false
        return response.json();
      }
    `}
  </Code>
</Slide>
<Slide animate>
  <button
    type="button"
    class="grid-stack inline-grid max-w-max rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={submit}>
    <span class="mx-auto max-w-max" class:invisible={!pending}>
      <Spinner />
    </span>
    <span class="my-auto max-h-max" class:invisible={pending}>Submit</span>
  </button>
  <ul class="mx-auto max-w-max space-y-4 pl-4 text-left text-sm">
    <Step fadeInThenSemiOut type="li">
      When request is <span class="italic">pending</span>
    </Step>
    <Step fadeInThenSemiOut type="li" class="ml-4">
      -> show <span class="italic">spinner</span>
    </Step>
    <Step fadeInThenSemiOut type="li">otherwise</Step>
    <Step fadeInThenSemiOut type="li" class="ml-4">
      -> show <span class="italic">submit</span>
    </Step>
  </ul>
</Slide>
<Slide animate>
  <button
    type="button"
    class="grid-stack inline-grid max-w-max rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={submit}>
    <span class="mx-auto max-w-max" class:invisible={!pending}>
      <Spinner />
    </span>
    <span class="my-auto max-h-max" class:invisible={pending}>Submit</span>
  </button>
  <Code lang="html" class="mx-auto max-w-max" data-id="ifelse">
    {`
      <button type="button" class="btn" onClick={submit}>
        {pending ? <Spinner/> : 'Submit'}
      </button>
    `}
  </Code>
</Slide>
<Slide animate>
  <button
    type="button"
    class="grid-stack inline-grid max-w-max rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={submit}>
    <span class="mx-auto max-w-max" class:invisible={!pending}>
      <Spinner />
    </span>
    <span class="my-auto max-h-max" class:invisible={pending}>Submit</span>
  </button>
  <Code lang="svelte" class="mx-auto max-w-max" data-id="ifelse">
    {`
      <button type="button" class="btn" on:click={submit}>
        {# if pending}
          <Spinner/>
        {:else}
          Submit
        {/if}
      </button>
    `}
  </Code>
</Slide>
<Slide animate>
  <button
    type="button"
    class="grid-stack inline-grid max-w-max rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={submit}>
    <span class="mx-auto max-w-max" class:invisible={!pending}>
      <Spinner />
    </span>
    <span class="my-auto max-h-max" class:invisible={pending}>Submit</span>
  </button>
  <Code lang="ts" class="mx-auto max-w-[50ch]">
    {`
      const makeRequest = async () => {
        buttonSpinner.classList.remove('hidden');
        buttonText.classList.add('hidden');
        const response = await fetch();
        buttonSpinner.classList.add('hidden');
        buttonText.classList.remove('hidden');
        return response.json();
      }
    `}
  </Code>
</Slide>
<Slide animate>
  <button
    type="button"
    class="grid-stack inline-grid max-w-max rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={submit}>
    <span class="mx-auto max-w-max" class:invisible={!pending}>
      <Spinner />
    </span>
    <span class="my-auto max-h-max" class:invisible={pending}>Submit</span>
  </button>
  <Code lang="ts" class="mx-auto max-w-[50ch]">
    {`
      const makeRequest = async () => {
        pending = true
        const response = await fetch();
        pending = false
        return response.json();
      }
    `}
  </Code>
</Slide>
<Slide
  animate
  animateRestart
  on:in={() => (($cartValue = 42.69), ($cartQuantity = 2))}>
  <div
    data-id="cartInfo"
    class="flex flex-row items-center justify-center gap-2">
    <span>$<span>{$cartValue.toFixed(2)}</span></span>
    <div class="relative">
      <Cart />
      <div
        class="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[0.5rem] font-bold text-white">
        {$cartQuantity.toFixed(0)}
      </div>
    </div>
  </div>
</Slide>
<Slide animate on:in={() => (($cartValue = 69.42), ($cartQuantity = 3))}>
  <div
    data-id="cartInfo"
    class="flex flex-row items-center justify-center gap-2">
    <span>$<span>{$cartValue.toFixed(2)}</span></span>
    <div class="relative">
      <Cart />
      <div
        class="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[0.5rem] font-bold text-white">
        {$cartQuantity.toFixed(0)}
      </div>
    </div>
  </div>
  <div data-id="add"><span class="italic">Add</span> an item</div>
</Slide>
<Slide animate on:in={() => (($cartValue = 27.53), ($cartQuantity = 1))}>
  <div
    data-id="cartInfo"
    class="flex flex-row items-center justify-center gap-2">
    <span>$<span>{$cartValue.toFixed(2)}</span></span>
    <div class="relative">
      <Cart />
      <div
        class="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[0.5rem] font-bold text-white">
        {$cartQuantity.toFixed(0)}
      </div>
    </div>
  </div>
  <div data-id="add" class="opacity-50">
    <span class="italic">Add</span> an item
  </div>
  <div data-id="remove"><span class="italic">Remove</span> an item</div>
</Slide>
<Slide animate on:in={() => (($cartValue = 57.72), ($cartQuantity = 2))}>
  <div
    data-id="cartInfo"
    class="flex flex-row items-center justify-center gap-2">
    <span>$<span>{$cartValue.toFixed(2)}</span></span>
    <div class="relative">
      <Cart />
      <div
        class="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[0.5rem] font-bold text-white">
        {$cartQuantity.toFixed(0)}
      </div>
    </div>
  </div>
  <div data-id="add" class="opacity-50">
    <span class="italic">Add</span> an item
  </div>
  <div data-id="remove" class="opacity-50">
    <span class="italic">Remove</span> an item
  </div>
  <div data-id="change"><span class="italic">Change</span> quantity</div>
</Slide>
<Slide animate on:in={() => ($cartValue = 42.69)}>
  <div
    data-id="cartInfo"
    class="flex flex-row items-center justify-center gap-2">
    <span>$<span>{$cartValue.toFixed(2)}</span></span>
    <div class="relative">
      <Cart />
      <div
        class="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[0.5rem] font-bold text-white">
        {$cartQuantity.toFixed(0)}
      </div>
    </div>
  </div>
  <div data-id="add" class="opacity-50">
    <span class="italic">Add</span> an item
  </div>
  <div data-id="remove" class="opacity-50">
    <span class="italic">Remove</span> an item
  </div>
  <div data-id="change" class="opacity-50">
    <span class="italic">Change</span> quantity
  </div>
  <div data-id="discount"><span class="italic">Add</span> Discounts</div>
</Slide>
<Slide animate on:in={() => (($cartValue = 42.69), ($cartQuantity = 2))}>
  <div
    data-id="cartInfo"
    class="flex flex-row items-center justify-center gap-2">
    <span>$<span>{$cartValue.toFixed(2)}</span></span>
    <div class="relative">
      <Cart />
      <div
        class="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[0.5rem] font-bold text-white">
        {$cartQuantity.toFixed(0)}
      </div>
    </div>
  </div>
</Slide>
<Slide animate on:in={() => (($cartValue = 42.69), ($cartQuantity = 2))}>
  <div
    data-id="cartInfo"
    class="flex flex-row items-center justify-center gap-2">
    <span>$<span>{$cartValue.toFixed(2)}</span></span>
    <div class="relative">
      <Cart />
      <div
        class="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[0.5rem] font-bold text-white">
        {$cartQuantity.toFixed(0)}
      </div>
    </div>
  </div>
  <Code lang="ts" class="mx-auto max-w-max">
    {`
      <div>{
        cart.items.reduce(
          (total, item) => total + (item.price * item.quantity)
        , 0)
      }</div>
      <div>{
        cart.items.reduce(
          (quant, item) => quant + item.quantity)
        , 0)
      }</div>
    `}
  </Code>
</Slide>
<Slide animate animateRestart>
  <Code lang="ts" data-id="code">
    {`
        let clicks = 0;
        const button = document.querySelector('button')
        button.textContent = \`\${clicks} clicks\`
        button.addEventListener('click', () => clicks++)
      `}
  </Code>
  <button
    type="button"
    class="rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none">
    0 clicks
  </button>
</Slide>
<Slide animate>
  <Code lang="ts" lines="1,3" data-id="code">
    {`
        let clicks = signal(${clicks});
        const button = document.querySelector('button')
        effect(() => button.textContent = \`\${clicks} clicks\`)
        button.addEventListener('click', () => clicks++)
      `}
  </Code>
  <button
    type="button"
    class="rounded-lg bg-blue-700 px-4 py-2 shadow-lg transition-all hover:bg-blue-600 hover:shadow-none"
    on:click={increment}>{clicks} clicks</button>
</Slide>
