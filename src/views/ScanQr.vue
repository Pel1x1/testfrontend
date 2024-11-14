<template>
  <div class="main-container">
    <div class="back"></div>
    <span class="scan-qr-code">Scan QR Code</span
    ><span class="find-qr-address">Find QR that contains address</span>
    <div class="flex-row-d">
      <div class="vector"></div>
      <div class="rectangle">
        <div class="vector-1"></div>
        <div class="vector-2"></div>
      </div>
      <div class="vector-3"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.back {
  position: absolute;
  width: calc(10 * var(--rpx));
  height: calc(20 * var(--rpx));
  top: calc(10 * var(--rpx));
  left: calc(30.5 * var(--rpx));
  background: url(../assets/images/80c6e76d-d2e0-4f0a-bb6e-2865912be671.png) no-repeat center;
  background-size: 100% 100%;
  z-index: 1;
}
.scan-qr-code {
  display: block;
  position: relative;
  height: calc(30 * var(--rpx));
  margin: calc(39.99999998711053 * var(--rpx)) 0 0 calc(122 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
  font-weight: 700;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  top: calc(10 * var(--rpx));
}
.find-qr-address {
  display: block;
  position: relative;
  height: calc(20 * var(--rpx));
  margin: calc(15 * var(--rpx)) 0 0 calc(92 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 500;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 1;
}
.flex-row-d {
  position: relative;
  width: calc(222.5 * var(--rpx));
  height: calc(221 * var(--rpx));
  margin: calc(95 * var(--rpx)) 0 0 calc(104 * var(--rpx));
  z-index: 6;
}
.vector {
  position: absolute;
  width: calc(49.5 * var(--rpx));
  height: calc(49.5 * var(--rpx));
  top: calc(-1.4999999999999982 * var(--rpx));
  left: calc(174.5 * var(--rpx));
  background: url(../assets/images/52655f23-48fe-4538-8843-6b0e427049af.png)
    no-repeat center;
  background-size: cover;
  z-index: 3;
}
.rectangle {
  position: absolute;
  width: calc(220 * var(--rpx));
  height: calc(220 * var(--rpx));
  top: calc(1.0000000000000018 * var(--rpx));
  left: calc(1.5 * var(--rpx));
  background: rgba(217, 217, 217, 0.3);
  z-index: 6;
}
.vector-1 {
  position: relative;
  width: calc(49.5 * var(--rpx));
  height: calc(49.5 * var(--rpx));
  margin: calc(-1.5 * var(--rpx)) 0 0 calc(-2.5 * var(--rpx));
  background: url(../assets/images/b4cd0da1-499c-4a89-896e-3c48af0b00ea.png)
    no-repeat center;
  background-size: cover;
  z-index: 2;
}
.vector-2 {
  position: relative;
  width: calc(49.5 * var(--rpx));
  height: calc(49.5 * var(--rpx));
  margin: calc(124 * var(--rpx)) 0 0 calc(173 * var(--rpx));
  background: url(../assets/images/3e2fac6d-96cc-4fbc-91ea-af4e77102040.png)
    no-repeat center;
  background-size: cover;
  z-index: 5;
}
.vector-3 {
  position: absolute;
  width: calc(49.5 * var(--rpx));
  height: calc(49.5 * var(--rpx));
  top: calc(172.5 * var(--rpx));
  left: calc(-1.5 * var(--rpx));
  background: url(../assets/images/e64b14e0-2a14-4a58-ac39-bc8ebebc83bd.png)
    no-repeat center;
  background-size: cover;
  z-index: 4;
}

</style>
