<template>
            <div
              class="card shadow p-3 mb-5 bg-white rounded"
              style="width: 22rem;"
            >
              <img
                src="https://picsum.photos/600/300/?image=20"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="row d-flex justify-content-between">
                  <div class="">
                    <p class="card-text">New york</p>
                    <p class="font-weight-bolder card-text">Fairly used</p>
                  </div>
                  <div>
                    icon
                  </div>
                </div>
                <div class="d-flex justify-content-between row">
                  <p>BMW X5</p>
                  <p>2010</p>
                  <p>1500KM</p>
                  <p>$1200</p>
                </div>
                <div class="d-flex justify-content-between row">
                  <p>Dealer</p>
                  <button type="button" class="order-btn btn btn-primary">Order Inspection</button>
                </div>
              </div>
            </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 0px 10px;
}
.card-body {
  padding: 10px ;
}
.card {
  padding: 0px
}
.order-btn {
  background-color: #8B8DC3;
  border: none;
  color: white;
  padding: 0px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
}
p{
  margin-bottom: 5px;
}
</style>
