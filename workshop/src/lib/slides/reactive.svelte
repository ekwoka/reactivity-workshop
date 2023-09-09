<script lang="ts">
  import { Slide, Code, FitText } from '@components';
</script>

<Slide animate animateRestart>
  <FitText as="h2" class="uppercase tracking-widest">
    🎉🚀👍⚡️🔥 Bonus Round 🎉🚀👍⚡️🔥
  </FitText>
</Slide>

<Slide animate animateRestart>
  <h2 class="uppercase tracking-widest" data-id="title">
    Reactive Data Stores
  </h2>
</Slide>
<Slide animate>
  <h2 class="uppercase tracking-widest" data-id="title">
    Reactive Data Stores
  </h2>
  <Code lang="ts" class="mx-auto max-w-[72ch]">
    {`
        const items = [new Signal(42), new Signal(27)]

        new Effect(() =>
          total.textContent = items.reduce((a, b) => a + b.get(), 0)
        )
      `}
  </Code>
</Slide>
<Slide animate>
  <h2 class="uppercase tracking-widest" data-id="title">
    Reactive Data Stores
  </h2>
  <Code lang="ts" class="mx-auto max-w-[72ch]">
    {`
        const items = reactive([42, 27])

        new Effect(() =>
          total.textContent = items.reduce((a, b) => a + b)
        )
      `}
  </Code>
</Slide>
<Slide animate>
  <h2 class="uppercase tracking-widest" data-id="title">
    Reactive Data Stores
  </h2>
  <Code lang="ts" class="mx-auto max-w-[72ch]">
    {`
        const item = reactive({
          price: 42,
          quantity: 27
        })

        new Effect(() =>
          total.textContent = item.price * item.quantity
        )
      `}
  </Code>
</Slide>
<Slide animate>
  <h2 class="uppercase tracking-widest" data-id="title">
    Reactive Data Stores
  </h2>
  <Code lang="ts" class="mx-auto max-w-[72ch]" lines="2,3">
    {`
        const item = reactive({
          price: 42, // Signal(42)
          quantity: 27 // Signal(27)
        })

        new Effect(() =>
          total.textContent = item.price * item.quantity
        )
      `}
  </Code>
</Slide>
<Slide animate>
  <h2 class="uppercase tracking-widest" data-id="title">
    Reactive Data Stores
  </h2>
  <Code lang="ts" class="mx-auto max-w-[72ch]">
    {`
        const cart = reactive({
          owner: 'ekwoka',
          items: [
            {
              price: 42,
              quantity: 27
            }
          ],
          get totalPrice() {
            return this.items.reduce((a, b) => a + b.price * b.quantity, 0)
          }
        })

        new Effect(() =>
          total.textContent = cart.totalPrice
        )
      `}
  </Code>
</Slide>
<Slide animate>
  <h2 class="uppercase tracking-widest" data-id="title">
    Reactive Data Stores
  </h2>
  <Code lang="ts" class="mx-auto max-w-[72ch]" lines="2,5,6,7,8,11|10,15">
    {`
        const cart = reactive({
          owner: 'ekwoka', // Signal('ekwoka')
          items: [
            {
              price: 42, // Signal(42)
              quantity: 27 // Signal(27)
            } // Signal({ ... }])
          ] // Signal([ ... ])
          get totalPrice() {
            return this.items.reduce((a, b) => a + b.price * b.quantity, 0)
          } // Signal(()=>{})
        })

        new Effect(() =>
          total.textContent = cart.totalPrice
        )
      `}
  </Code>
</Slide>
<Slide animate>
  <h2 class="text-5xl uppercase tracking-widest" data-id="title">🤯</h2>
  <Code lang="ts" class="mx-auto max-w-[72ch]">
    {`
        const cart = reactive({
          owner: 'ekwoka', // Signal('ekwoka')
          items: [
            {
              price: 42, // Signal(42)
              quantity: 27 // Signal(27)
            } // Signal({ ... }])
          ] // Signal([ ... ])
          get totalPrice() {
            return this.items.reduce((a, b) => a + b.price * b.quantity, 0)
          } // Signal(()=>{})
        })

        new Effect(() =>
          total.textContent = cart.totalPrice
        )
      `}
  </Code>
</Slide>
