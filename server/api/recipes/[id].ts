function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

export default defineEventHandler(async (event) => {
  await sleep(1000)
  const id = getRouterParam(event, 'id')
  return await $fetch(`https://dummyjson.com/recipes/${id}`)
})
