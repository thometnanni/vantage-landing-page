<script>
  const contact = {
    street: "RW1zZXIgU3RyLiA2OA==",
    town: "MTIwNTEgYmVybGlu",
    mail: "aGlAdGhvbWV0bmFubmkubmV0",
    vat: "REU0MDU4MDU0Njg=",
  };
</script>

<section class="bg-white p-2 sm:p-8 border-t flex justify-center">
  <div class="max-w-6xl w-full px-4 md:px-8">
    <!-- <p class="mb-4">Vantage is created by krisenstab / Thomet & Nanni GbR</p> -->
    <div class="flex gap-2 sm:gap-8 items-left max-w-2xl">
      <img
        src="/bmbf.svg"
        alt=""
        class="object-contain"
        style="max-width: 30%; height: 100px;"
      />
      <img
        src="/pf.svg"
        alt=""
        class="object-contain"
        style="max-width: 30%; height: 100px;"
      />
      <img
        src="/openc.svg"
        alt=""
        class="object-contain"
        style="max-width: 30%; height: 100px;"
      />
    </div>

    <div class="max-w-2x pt-2 sm:pt-10 leading-tight text-gray-400">
      <p class="text-black mb-2">Imprint</p>
      <div class="flex gap-8">
        <p>
          Krisenstab<br />
          Thomet & Nanni GbR<br />
          {atob(contact.street)}<br />
          {atob(contact.town)}<br />
        </p>
        <p>
          {atob(contact.mail)}<br />
          {atob(contact.vat)}
        </p>
      </div>
    </div>
  </div>
</section>
