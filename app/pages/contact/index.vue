<template>
  <div style="border: double 2px orangered">
    <p style="background-color: #b1ec99">測試是否可以不build 去動態改變 config 數值</p>
    <p>網站名稱： {{appName}}</p>
    <p>網站描述： {{appDescription}}</p>
    <p>API密鑰： {{appkey}}</p>
    <p>(這個要build才可以改變)API密鑰測試： {{VITE_API_KEY}}</p>
    <p>(這個要build才可以改變, 沒加VITE看不到)API密鑰測試： {{APIKEY_ENV}}</p>

  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const appName = config.public.appName;
const appDescription = config.public.appDescription;
const appkey = config.appKeyTest;
const appkey2 = config.appKey;
const APIKEY_ENV = import.meta.env.API_KEY;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
console.log("這是apikey＝ " ,appkey);

</script>
