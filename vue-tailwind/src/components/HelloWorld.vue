<template>
  <div class="bg-gray-700 p-3 text-yellow-600 text-xl shadow-xl">
    <div class="flex gap-5  justify-around">
      <div class=" whitespace-nowrap overflow-ellipsis overflow-hidden">
        divst Item 1
      </div>
      <div class="whitespace-nowrap overflow-ellipsis overflow-hidden">
        divst Item 2
      </div>
      <div class="whitespace-nowrap overflow-ellipsis overflow-hidden">
        divst Item 3
      </div>
      <div class="whitespace-nowrap overflow-ellipsis overflow-hidden">
        divst Item 4
      </div>
      <div class="whitespace-nowrap overflow-ellipsis overflow-hidden">
        divst Item 5
      </div>
    </div>
  </div>
  <div class="grid gap-5 p-3 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
    <div class="shadow-lg p-2 rounded-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque unde
      saepe ad iure ratione mollitia, iste consectetur facere temporibus.
    </div>

    <div class="shadow-lg p-2 rounded-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque unde
      saepe ad iure ratione mollitia, iste consectetur facere temporibus.
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped></style>
