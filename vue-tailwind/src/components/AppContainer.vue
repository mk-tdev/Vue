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

  <div class="m-5 p-8 bg-gray-700 text-white">
    <div
      class="flex items-center flex-wrap md:gap-11 gap-y-4 md:flex-row sm:flex-row"
    >
      <div class="">Need Help?</div>

      <div class=" flex md:gap-11 md:flex-row sm:flex-col flex-wrap gap-y-4 ">
        <div class="flex flex-nowrap">
          <div class="self-center">
            <img
              class="md:block hidden"
              style="height: 3.5rem;"
              src="../assets/phone.svg"
              alt="mail"
            />
            <img
              class="md:hidden block"
              style="height: 1.5rem;"
              src="../assets/phone.svg"
              alt="mail"
            />
          </div>
          <div class="self-center flex sm:flex-row md:flex-col gap-x-3 ">
            <div class="whitespace-nowrap">1800 222 8888</div>
            <div>Mon to Fri(6am to 7pm)</div>
          </div>
        </div>

        <div class="flex flex-nowrap gap-2">
          <img style="height: 1.5rem;" src="../assets/mail.svg" alt="mail" />
          <div>Email us</div>
        </div>
      </div>
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
