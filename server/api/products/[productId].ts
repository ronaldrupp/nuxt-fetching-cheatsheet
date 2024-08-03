function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

export default defineEventHandler(async (event) => {
  await sleep(1000)
  const productId = getRouterParam(event, 'productId')
  return await $fetch(`https://dummyjson.com/products/${productId}`)
})
