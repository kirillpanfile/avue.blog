<script setup lang="ts">
import type { image } from '~/types'

const MyImage = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "MyImage" */ '@/components/ui/MyImage.vue'
  )
})

const bgImage: image = {
  file: 'https://4kwallpapers.com/images/wallpapers/material-design-minimalist-orange-stripes-blue-flat-3840x2160-6718.png',
  alt: 'bg image',
  title: 'bg image',
}

const authorImage: image = {
  file: 'https://mangostudios.com/wp-content/uploads/2018/09/headshot3.jpg',
  alt: 'author image',
  title: 'author image',
}
</script>

<template>
  <div class="w-full">
    <MyImage class="max-h-48 w-full object-cover" :image="bgImage" />

    <div class="max-w-4xl mx-auto px-4">
      <section class="w-full mt-6 flex items-center font-semi">
        <Icon name="material-symbols:home-rounded" /> - Article Page -
        Optimizing CSS for faster page loads
      </section>

      <section class="mx-auto mt-12 flex flex-col items-center">
        <div class="flex items-center gap-4">
          <span>
            <Icon name="material-symbols:calendar-today" /> - 2021-09-09
          </span>
          |
          <span> <Icon name="material-symbols:visibility" /> - 1000 </span>
          |
          <span>
            <Icon name="material-symbols:category-outline" /> Nuxt.js
          </span>
        </div>
        <h1 class="text-2xl font-bold mt-4">
          Optimizing CSS for faster page loads
        </h1>
        <div class="flex gap-2 items-center mt-2">
          <h2>Writen By</h2>
          <MyImage
            :image="authorImage"
            class="w-10 h-10 rounded-full object-cover p-1"
          />
          <h2>Elizabeth Warren</h2>
        </div>
      </section>

      <section class="flex flex-col gap-8 mt-12">
        <p class="block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          aliquid tempore id libero cum est officiis nostrum accusamus, optio
          natus, doloremque quam. Nesciunt quibusdam itaque, atque libero sint
          fugit aut repellat, quos aliquid accusantium dolores natus pariatur
          reprehenderit exercitationem repudiandae optio delectus illum maxime
          qui dolorem. Reprehenderit, eveniet voluptatem corporis ullam esse,
          itaque error magnam rem ea, unde saepe! Corporis earum quibusdam qui
          quod? Facere id tempora distinctio iure fugit aliquam unde tenetur
          error expedita, odio voluptas officia aperiam facilis laboriosam natus
          placeat accusantium nulla reiciendis excepturi omnis corporis quas et.
          Alias beatae necessitatibus, laudantium dolorem deserunt hic nihil
          ipsam eum neque quod animi temporibus maiores fugit amet sapiente.
          Omnis, ullam obcaecati reiciendis similique deserunt explicabo ea?
          Voluptates et minus ipsum hic doloribus vel, iste voluptas explicabo
          cum?
        </p>
        <p class="block">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eum
          soluta numquam magnam enim ab, eaque dolores ea nihil amet libero,
          asperiores eos repudiandae tenetur. Error deserunt quia molestiae
          ducimus distinctio quasi nulla soluta temporibus, tenetur quaerat
          quod? Vero reprehenderit tempora ad, minus optio, nemo vel corporis
          facere, cum laudantium dicta molestiae quam repudiandae ducimus
          assumenda porro consequatur incidunt voluptatibus placeat? Eius, modi
          consequatur impedit velit dolore, dolorem rerum necessitatibus
          reprehenderit perferendis minus repudiandae, at nostrum sapiente.
          Provident corporis fugit dolores temporibus quod quisquam aut, rem
          nihil optio eum autem. Quasi cupiditate quod ullam ducimus aliquid
          labore maxime quia earum. Excepturi voluptatem corrupti id fugiat est
          suscipit? Quidem doloremque rerum asperiores. Laudantium ipsum dolor
          et sint at obcaecati tempora deleniti nostrum, consequatur vel, esse
          sunt fugiat animi alias similique quasi necessitatibus sapiente ipsam
          ratione! Molestias consequatur, quaerat, fuga, porro ea ratione
          asperiores deserunt veniam debitis aperiam esse quis possimus maiores
          fugit necessitatibus. Alias impedit cumque necessitatibus ex aliquam
          sequi minima eum libero earum inventore officiis nihil debitis,
          adipisci ad deleniti animi rerum dolorum at quidem facilis illum
          dignissimos mollitia architecto nam! Delectus consequuntur commodi,
          minus ab sit ducimus minima impedit porro animi modi iure a, doloribus
          corrupti at nulla nisi molestias nihil unde ipsa similique possimus
          fuga! Sequi dolore delectus deleniti quibusdam beatae facere
          repellendus officiis culpa dolorem ea enim cum sunt dicta quaerat,
          nihil eius iure iste tempore eaque.
        </p>

        <img
          src="https://repository-images.githubusercontent.com/130268121/b4fd5300-b585-11ea-8718-1e141e78842e"
          alt="Tailwindcss"
        />

        <p class="block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          praesentium laborum alias nobis quas possimus debitis officiis modi
          nam eveniet aliquid suscipit voluptatum at aperiam iure obcaecati,
          accusantium pariatur eaque ex aliquam. Impedit, cumque laudantium.
          Dolor illo autem totam exercitationem ea natus quas esse numquam, nam
          repudiandae sit tempore nulla soluta assumenda, minima iure sapiente
          repellat architecto impedit cumque laborum ratione. Dicta vitae dolore
          maxime! Sed corporis eos placeat sit quod sint debitis. Molestiae
          consequuntur minus maiores minima recusandae beatae ad, natus
          voluptatum corporis voluptas inventore aspernatur quae nam, facilis
          quisquam blanditiis accusamus. Culpa expedita deleniti animi officiis
          nostrum laboriosam doloremque voluptatem sunt debitis? Pariatur
          consectetur quod libero architecto. Saepe voluptates inventore sint
          error natus possimus culpa illo odio cumque?
        </p>
      </section>

      <!-- component -->
      <div class="antialiased mx-auto mt-12 mb-12">
        <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

        <div class="space-y-4">
          <div class="flex">
            <div class="flex-shrink-0 mr-3">
              <img
                class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
            </div>
            <div
              class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
            >
              <strong>Sarah</strong>
              <span class="text-xs text-gray-400">3:34 PM</span>
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div class="mt-4 flex items-center">
                <div class="flex -space-x-2 mr-2">
                  <img
                    class="rounded-full w-6 h-6 border border-white"
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt=""
                  />
                  <img
                    class="rounded-full w-6 h-6 border border-white"
                    src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt=""
                  />
                </div>
                <div class="text-sm text-gray-500 font-semibold">5 Replies</div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0 mr-3">
              <img
                class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
            </div>
            <div
              class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
            >
              <strong>Sarah</strong>
              <span class="text-xs text-gray-400">3:34 PM</span>
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>

              <h4
                class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs"
              >
                Replies
              </h4>

              <div class="space-y-4">
                <div class="flex">
                  <div class="flex-shrink-0 mr-3">
                    <img
                      class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                      src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                      alt=""
                    />
                  </div>
                  <div
                    class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
                  >
                    <strong>Sarah</strong>
                    <span class="text-xs text-gray-400">3:34 PM</span>
                    <p class="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0 mr-3">
                    <img
                      class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                      src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                      alt=""
                    />
                  </div>
                  <div
                    class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
                  >
                    <strong>Sarah</strong>
                    <span class="text-xs text-gray-400">3:34 PM</span>
                    <p class="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
