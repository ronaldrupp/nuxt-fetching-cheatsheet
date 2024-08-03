<template>
  <div class="grid grid-cols-[300px_1fr] grid-rows-[calc(100dvh-2rem)] gap-5">
    <div class="bg-white dark:bg-gray-900 rounded-md overflow-scroll p-4 flex flex-col gap-6">
      <div class="flex justify-between items-baseline">
        <Nuxt-Link to="/">
          <h1 class="text-2xl font-bold hover:bg-slate-100 p-2 rounded-md">
            🌎  Fetching Demo
          </h1>
        </Nuxt-Link>
        <Nuxt-Link to="/tldr">
          <span class="text-lg font-bold hover:bg-slate-100 p-2 rounded-md">
            TL;DR
          </span>
        </Nuxt-Link>
      </div>
      <UAlert
        icon="fe:warning"
        title="All Server Endpoints are 1s delayed on purpose."
      />
      <UAlert
        icon="fe:github"
      >
        <template #title>
          <div>
            <Nuxt-link
              to="https://github.com/ronaldrupp/nuxt-fetching-cheatsheet"
              external
            >
              Source Code
            </Nuxt-link>
          </div>
        </template>
      </UAlert>

      <div class="flex flex-col gap-7">
        <div class="flex flex-col gap-2">
          <h2 class="px-2">
            3 main ways to fetch data:
          </h2>
          <ul class="flex flex-col gap-2">
            <li class="flex">
              <BaseLink
                to="/dollar-fetch"
                title="$fetch"
              />
            </li>
            <li class="flex">
              <BaseLink
                to="/use-async-data"
                title="useAsyncData + $fetch"
              />
            </li>
            <li class="flex">
              <BaseLink
                to="/use-fetch"
                title="useFetch"
              />
            </li>
            <li class="flex">
              <BaseLink
                to="/use-fetch-with-get-cached-data"
                title="useFetch with getCachedData"
              />
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="px-2">
            Lazy
          </h2>
          <ul>
            <li>
              <Nuxt-Link
                to="/lazy/use-lazy-fetch"
                active-class="bg-slate-100"
              >
                <div class="hover:bg-slate-100 p-2 rounded-md">

                  <div>
                    <h2 class="text-lg font-bold">
                      💜 useLazyFetch
                    </h2>
                    <p>triggers navigation immediately</p>
                  </div>
                </div>
              </Nuxt-Link>
            </li>
          </ul>
        </div>
        <!-- <div class="flex flex-col gap-1">
          <h2 class="px-2">
            Other demos
          </h2>
          <ul>
            <li>
              <Nuxt-Link
                to="/swr-demo"
                active-class="bg-slate-100"
              >
                <div class="hover:bg-slate-100 p-2 rounded-md">

                  <div>
                    <h2 class="text-lg font-bold">
                      SWR (always snappy)
                    </h2>
                    <p>page generated on demand, revalidates in background, cached until API response changes</p>
                  </div>
                </div>
              </Nuxt-Link>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="rounded-md bg-white dark:bg-gray-950 overflow-scroll px-4 relative">
      <main class="max-w-5xl mx-auto py-5">
        <slot />
      </main>
    </div>
  </div>
</template>
