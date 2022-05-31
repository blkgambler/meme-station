<template>
  <div class="lg:w-1/2 custom-border">
    <div class="text-mineshaft-60 text-xs uppercase py-2">
      PNG, GIF, WEBP, or JPG. (Max 30mb)
    </div>
    <div class="text-mineshaft-100 text-center font-bold text-2xl">
      Drag & drop memes here
    </div>
    <div class="text-mineshaft-60 pt-3">
      One or more memes here
    </div>
    <div>
      <a href="/connection">
      <span class="upload-button">
        <img src="/images/icons/upload.png" alt="Upload icon" class="h-4">
        Or choose file
      </span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadBox'
}
</script>

<style scoped>
.custom-border {
  background-image: linear-gradient(to right, #5C5C5C 50%, transparent 50%), linear-gradient(to right, #5C5C5C 50%, transparent 50%), linear-gradient(to bottom, #5C5C5C 50%, transparent 50%), linear-gradient(to bottom, #5C5C5C 50%, transparent 50%);
  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 10px 1px, 10px 1px, 1px 10px, 1px 10px;
  border-color: #e3e7ea;
  box-shadow: 5px 5px #e3e7ea;
  margin-right: 5px;
  @apply flex flex-col w-full items-center justify-center p-8;
}
.upload-button {
  @apply mx-2 my-5 py-3 px-5 text-white bg-elm-100 border border-solid border-elm-100 cursor-pointer flex items-center gap-2;
  box-shadow: 5px 5px #7AB8B2; /* elm-60*/
}
</style>
