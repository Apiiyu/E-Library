<template>
  <section id="sidebar" class="col-2 pt-4">
    <div class="row">
      <div class="col-12">
        <img src="@/assets/images/app-logo.svg" alt="app-logo">
      </div>
    </div>

    <div class="row">
      <div class="col-12 mt-4">
        <div class="text-muted text-left">
          Menu
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mt-4 p-0">
        <router-link :to="{ name: 'dashboard'}">
          <div class="d-flex w-100">
            <img src="@/assets/icons/home-active.svg" alt="icon" class="mr-3">
            Dashboard
          </div>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mt-4 p-0">
        <router-link :to="{ name: 'employee-management'}">
          <div class="d-flex w-100">
            <img src="@/assets/icons/message.svg" alt="icon" class="mr-3">
            Employee Managem...
          </div>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mt-4 p-0">
        <router-link :to="{ name: 'books-management'}">
          <div class="d-flex w-100">
            <img src="@/assets/icons/message.svg" alt="icon" class="mr-3">
            Books Management
          </div>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mt-4 p-0">
        <router-link :to="{ name: 'borrow-management'}">
          <div class="d-flex w-100">
            <img src="@/assets/icons/wallet.svg" alt="icon" class="mr-3">
            Borrow Management
          </div>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mt-4 p-0">
        <router-link :to="{ name: 'request-management'}">
          <div class="d-flex w-100">
            <img src="@/assets/icons/wallet.svg" alt="icon" class="mr-3">
            Books Request
          </div>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mt-4 p-0">
        <router-link :to="{ name: 'penalty'}">
          <div class="d-flex w-100">
            <img src="@/assets/icons/wallet.svg" alt="icon" class="mr-3">
            Penalty
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>