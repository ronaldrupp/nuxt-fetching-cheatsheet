function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

export default defineEventHandler(async () => {
  await sleep(1000)
  return await $fetch('https://dummyjson.com/recipes')
})
