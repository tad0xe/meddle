<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">
            <h2>{{$t('modals.rejectInspector.title')}}</h2>
          </div>
          <div class="btn-close-upper" @click="close()">
            x
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit="onSubmit">
              <p>
                {{$t('modals.rejectInspector.body', {inspectorFirstName: inspector.firstName, inspectorLastName: inspector.lastName})}}
              </p>
              <div>
               <button type="submit" class="signupbtn">{{$t('buttons.reject')}}</button> 
              </div>
          </form>
        </div>
        <footer class="modal-footer">
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
        orderId:"",
        inspector:""
      },
    data: function () {
      return {
        reject: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      onSubmit() {
        const formData = {
          reject: this.reject,
          orderId: this.orderId,
          inspectorId: this.inspector.inspectorId
        };
        this.$store.dispatch("orders/storeRejectInspector", formData)
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
    color: black;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    font-family: sans-serif, Arial, Helvetica;
    padding: 15px;
    width: 300px;
  }


  .modal__header {
  }

  .modal__header__content {
    font-size: 14px;
    float: left;
  }

    .modal__header__content u {
      cursor: pointer;
    }

  .modal-footer {
    border-top: 1.5px solid #eeeeee;
    justify-content: flex-end;
    font-size: 13px;
  }

  .modal-body {
    position: relative;
    font-size: 13px;
    padding-bottom: 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-close-upper {
    float: right;
    font-weight: bold;
    border: 1.5px solid;
    cursor: pointer;
    padding-left: 3px;
    padding-right: 3px;
  }

  .text-input {
    padding: 7px;
    margin-top: 7px;
    margin-bottom: 7px;
    width: 100%;
  }

  .signupbtn {
    background-color: #2BC4E2;
    color: white;
    padding: 10px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    border-radius: 40px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .link {
    color: dodgerblue
  }

  .fpw {
    float: right;
  }

  .fpw:hover{
    text-decoration-line:underline;
    cursor:pointer;

  }
  .cursor-pointer{
    cursor:pointer;
  }
</style>

