import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    
    {
      path: "/",
      name: "auth",
      component: () => import("../views/StartPage.vue"),
    },
    {
      path: "/main",
      name: "main page",
      component: Main,
    },
    {
      path: "/receive_address",
      name: "receive address",
      component: () => import("../views/ReceiveAddress.vue"),
    },
    {
      path: "/registerwallet",
      name: "registerwallet",
      component: () => import("../views/RegisterWallet.vue"),
    },
    {
      path: "/importwallet",
      name: "importwallet",
      component: () => import("../views/ImportWallet.vue"),
    },
    {
      path: "/reglogwalletpage",
      name: "register login wallet page",
      component: () => import("../views/RegLogWalletPage.vue"),
    },
    {
      path: "/scan_qr",
      name: "scan qr",
      component: () => import("../views/ScanQr.vue"),
    },
    {
      path: "/select_crypto_to_receive",
      name: "select crypto to receive",
      component: () => import("../views/SelectCryptoToReceive.vue"),
    },
    {
      path: "/select_crypto_to_send",
      name: "select crypto to send",
      component: () => import("../views/SelectCryptoToSend.vue"),
    },
    {
      path: "/send_crypto_page",
      name: "send crypto page",
      component: () => import("../views/SendCryptoPage.vue"),
    },
    {
      path: "/select_network",
      name: "select network",
      component: () => import("../views/SelectNetwork.vue"),
    },
    {
      path: "/swap",
      name: "swap",
      component: () => import("../views/Swap.vue"),
    },
    {
      path: "/confirm_swap_page",
      name: "confirm_swap_page",
      component: () => import("../views/ConfirmSwapPage.vue"),
    },
    {
      path: "/swap_select_crypto/:type",
      name: "swap_select_crypto",
      component: () => import("../assets/components/SwapSelectCrypto.vue"),
    },
    {
      path: '/info_crypto_page',
      component: () => import("../assets/components/InfoCryptoPage.vue"),
    },
    {
      path: "/settings_page",
      name: "settingspage",
      component: () => import("../views/SettingsPage.vue"),
    },
    {
      path: "/manual_page",
      name: "manualpage",
      component: () => import("../views/ManualPage.vue"),
    },
    {
      path: "/dapp_connection",
      name: "dappconnection",
      component: () => import("../views/DappConnection.vue"),
    },
    {
      path: "/history_page",
      name: "historypage",
      component: () => import("../views/HistoryPage.vue"),
    },
    {
      path: "/notifications_page",
      name: "notifications_page",
      component: () => import("../views/NotificationsPage.vue"),
    },
    {
      path: "/my_receive_adress",
      name: "myreceiveadress",
      component: () => import("../views/MyReceiveAdress.vue"),
    },
  ],
});

export default router;