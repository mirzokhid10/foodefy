<template>
  <!-- <div class="d-flex">
    <Sidebar />
    <div class="flex-grow-1">
      <Header />
      <StatsCards />
      <BudgetSalesChart />
      <TopProducts />
    </div>
  </div> -->
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-lg p-4 hidden md:block">
      <div class="flex items-center mb-8">
        <div
          class="bg-primary w-10 h-10 rounded-lg flex items-center justify-center"
        >
          <i class="fas fa-chart-line text-white text-xl"></i>
        </div>
        <h1 class="text-xl font-bold text-dark ml-3">STREAK</h1>
      </div>

      <div class="mb-8">
        <h2 class="text-xs uppercase tracking-wider text-gray-500 mb-2">
          DataflowID
        </h2>
        <ul class="space-y-1">
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-dark font-medium flex items-center"
          >
            <i class="fas fa-tachometer-alt mr-3 text-gray-500"></i>
            Dashboard
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-chart-pie mr-3"></i>
            General Dashboard
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center bg-primary/10 text-primary"
          >
            <i class="fas fa-shopping-cart mr-3"></i>
            Ecommerce Dashboard
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-xs uppercase tracking-wider text-gray-500 mb-2">
          STARTER
        </h2>
        <ul class="space-y-1">
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-th-large mr-3"></i>
            Layout
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-file mr-3"></i>
            Blank Page
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-layer-group mr-3"></i>
            Duetstage
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-fire mr-3"></i>
            STREAK
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-puzzle-piece mr-3"></i>
            Components
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-edit mr-3"></i>
            Forms
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-map-marker-alt mr-3"></i>
            Google Maps
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-cubes mr-3"></i>
            Modules
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-file-alt mr-3"></i>
            PAGES
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-lock mr-3"></i>
            Auth
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-exclamation-triangle mr-3"></i>
            Errors
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-star mr-3"></i>
            Features
          </li>
          <li
            class="sidebar-item px-3 py-2 rounded-lg text-gray-600 flex items-center"
          >
            <i class="fas fa-tools mr-3"></i>
            Utilities
          </li>
        </ul>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 overflow-auto">
      <!-- Header -->
      <header class="bg-white shadow-sm p-4 flex justify-between items-center">
        <div class="flex items-center">
          <button class="md:hidden mr-3 text-gray-600">
            <i class="fas fa-bars text-xl"></i>
          </button>
          <h2 class="text-xl font-bold text-gray-800">Ecommerce Dashboard</h2>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <i class="fas fa-bell text-gray-500 text-xl"></i>
            <span
              class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
              >3</span
            >
          </div>
          <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="p-4 md:p-6">
        <div class="mb-6">
          <h1 class="text-2xl font-bold text-gray-800">
            Order Statistics - August
          </h1>
          <p class="text-gray-600">
            Track your sales and orders for this month
          </p>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="stat-card bg-white rounded-xl shadow p-6 transition-all">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-gray-500 mb-2">Pending</p>
                <h3 class="text-3xl font-bold text-gray-800">24</h3>
              </div>
              <div
                class="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center"
              >
                <i class="fas fa-clock text-orange-500 text-xl"></i>
              </div>
            </div>
            <div class="mt-4 flex items-center text-sm text-green-500">
              <i class="fas fa-arrow-up mr-1"></i>
              <span>12% from last month</span>
            </div>
          </div>

          <div class="stat-card bg-white rounded-xl shadow p-6 transition-all">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-gray-500 mb-2">Shipping</p>
                <h3 class="text-3xl font-bold text-gray-800">12</h3>
              </div>
              <div
                class="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center"
              >
                <i class="fas fa-shipping-fast text-blue-500 text-xl"></i>
              </div>
            </div>
            <div class="mt-4 flex items-center text-sm text-green-500">
              <i class="fas fa-arrow-up mr-1"></i>
              <span>8% from last month</span>
            </div>
          </div>

          <div class="stat-card bg-white rounded-xl shadow p-6 transition-all">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-gray-500 mb-2">Combined</p>
                <h3 class="text-3xl font-bold text-gray-800">23</h3>
              </div>
              <div
                class="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center"
              >
                <i class="fas fa-boxes text-purple-500 text-xl"></i>
              </div>
            </div>
            <div class="mt-4 flex items-center text-sm text-green-500">
              <i class="fas fa-arrow-up mr-1"></i>
              <span>5% from last month</span>
            </div>
          </div>

          <div class="stat-card bg-white rounded-xl shadow p-6 transition-all">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-gray-500 mb-2">Total Orders</p>
                <h3 class="text-3xl font-bold text-gray-800">59</h3>
              </div>
              <div
                class="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center"
              >
                <i class="fas fa-shopping-cart text-green-500 text-xl"></i>
              </div>
            </div>
            <div class="mt-4 flex items-center text-sm text-green-500">
              <i class="fas fa-arrow-up mr-1"></i>
              <span>18% from last month</span>
            </div>
          </div>
        </div>

        <!-- Charts and Products Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Budget vs Sales -->
          <div class="lg:col-span-2 bg-white rounded-xl shadow p-6">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-lg font-bold text-gray-800">Budget vs Sales</h3>
              <div class="flex items-center space-x-2">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span class="text-sm text-gray-600">Budget</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-success rounded-full mr-2"></div>
                  <span class="text-sm text-gray-600">Sales</span>
                </div>
              </div>
            </div>

            <div class="space-y-5">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm text-gray-600">STROK</span>
                  <span class="text-sm font-medium text-gray-800">$8,000</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    class="bg-primary h-2.5 rounded-full progress-bar"
                    style="width: 80%"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm text-gray-600">Project B</span>
                  <span class="text-sm font-medium text-gray-800">$4,000</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    class="bg-primary h-2.5 rounded-full progress-bar"
                    style="width: 65%"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm text-gray-600">Project C</span>
                  <span class="text-sm font-medium text-gray-800">$3,000</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    class="bg-primary h-2.5 rounded-full progress-bar"
                    style="width: 50%"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm text-gray-600">Project D</span>
                  <span class="text-sm font-medium text-gray-800">$2,000</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    class="bg-primary h-2.5 rounded-full progress-bar"
                    style="width: 40%"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm text-gray-600">Project E</span>
                  <span class="text-sm font-medium text-gray-800">$1,000</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    class="bg-primary h-2.5 rounded-full progress-bar"
                    style="width: 30%"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Balance and Total Price -->
          <div class="space-y-6">
            <div class="bg-white rounded-xl shadow p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4">Balance</h3>
              <div class="flex justify-between items-end">
                <h4 class="text-3xl font-bold text-gray-800">$187,13</h4>
                <div
                  class="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center"
                >
                  <i class="fas fa-wallet text-green-500 text-xl"></i>
                </div>
              </div>
              <div class="mt-4 flex items-center text-sm text-green-500">
                <i class="fas fa-arrow-up mr-1"></i>
                <span>8.2% from last month</span>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4">
                Total Price (USD)
              </h3>
              <div class="flex justify-between items-end">
                <h4 class="text-3xl font-bold text-gray-800">4,732</h4>
                <div
                  class="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center"
                >
                  <i class="fas fa-dollar-sign text-blue-500 text-xl"></i>
                </div>
              </div>
              <div class="mt-4 flex items-center text-sm text-green-500">
                <i class="fas fa-arrow-up mr-1"></i>
                <span>14.5% from last month</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Products Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <!-- Top 5 Products -->
          <div class="lg:col-span-2 bg-white rounded-xl shadow p-6">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Top 5 Products</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-4 border-b">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i class="fas fa-mobile-alt text-gray-600"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">iPhone S9 Limited</h4>
                    <p class="text-sm text-gray-500">Electronics</p>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-gray-800">$80,700</p>
                  <p class="text-sm text-green-500 text-right">+12.4%</p>
                </div>
              </div>

              <div class="flex items-center justify-between pb-4 border-b">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i class="fas fa-laptop text-gray-600"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">MacBook Pro M2</h4>
                    <p class="text-sm text-gray-500">Computers</p>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-gray-800">$60,714</p>
                  <p class="text-sm text-green-500 text-right">+8.2%</p>
                </div>
              </div>

              <div class="flex items-center justify-between pb-4 border-b">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i class="fas fa-tablet-alt text-gray-600"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">iPad Pro</h4>
                    <p class="text-sm text-gray-500">Tablets</p>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-gray-800">$70,000</p>
                  <p class="text-sm text-green-500 text-right">+9.7%</p>
                </div>
              </div>

              <div class="flex items-center justify-between pb-4 border-b">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i class="fas fa-headphones text-gray-600"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">AirPods Max</h4>
                    <p class="text-sm text-gray-500">Audio</p>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-gray-800">$50,713</p>
                  <p class="text-sm text-green-500 text-right">+6.5%</p>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i class="fas fa-watch text-gray-600"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">Apple Watch</h4>
                    <p class="text-sm text-gray-500">Wearables</p>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-gray-800">$40,733</p>
                  <p class="text-sm text-green-500 text-right">+4.3%</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Headphone BItz and Trading Price -->
          <div class="space-y-6">
            <div class="bg-white rounded-xl shadow p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4">
                Headphone BItz
              </h3>
              <div class="flex justify-between">
                <div>
                  <p class="text-2xl font-bold text-gray-800">$2,737</p>
                  <p class="text-sm text-gray-500">Last Month</p>
                </div>
                <div>
                  <p class="text-2xl font-bold text-gray-800">$2,935</p>
                  <p class="text-sm text-gray-500">This Month</p>
                </div>
              </div>
              <div class="mt-4">
                <div class="flex justify-between mb-1">
                  <span class="text-sm text-gray-600">Sales Progress</span>
                  <span class="text-sm font-medium text-gray-800">78%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    class="bg-purple-500 h-2.5 rounded-full progress-bar"
                    style="width: 78%"
                  ></div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4">
                Trading Price
              </h3>
              <div class="space-y-3">
                <div
                  class="flex justify-between items-center p-3 bg-blue-50 rounded-lg"
                >
                  <div>
                    <p class="font-medium text-gray-800">Q3 Earnings</p>
                    <p class="text-sm text-gray-500">August 15, 2025</p>
                  </div>
                  <p class="text-xl font-bold text-gray-800">$1,445</p>
                </div>
                <div
                  class="flex justify-between items-center p-3 bg-green-50 rounded-lg"
                >
                  <div>
                    <p class="font-medium text-gray-800">Product Launch</p>
                    <p class="text-sm text-gray-500">August 22, 2025</p>
                  </div>
                  <p class="text-xl font-bold text-gray-800">$1,844</p>
                </div>
                <div
                  class="flex justify-between items-center p-3 bg-orange-50 rounded-lg"
                >
                  <div>
                    <p class="font-medium text-gray-800">Holiday Sales</p>
                    <p class="text-sm text-gray-500">August 29, 2025</p>
                  </div>
                  <p class="text-xl font-bold text-gray-800">$1,864</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../../components/AdminLayouts/Sidebar.vue";
import Header from "../../components/AdminLayouts/Header.vue";
import StatsCards from "../../components/AdminLayouts/StatsCards.vue";
</script>
