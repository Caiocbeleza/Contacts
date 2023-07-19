<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Confirmar Exclusão</h2>
        <p>Deseja realmente excluir o registro?</p>
        <div class="buttons">
          <button class="btn btn-cancel" @click="cancel">Cancelar</button>
          <button class="btn btn-confirm" @click="confirm">Confirmar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConfirmDialog",
    methods: {
      cancel() {
        // Lógica para cancelar a exclusão
        this.$emit('cancel');
      },
      confirm() {
        // Lógica para confirmar a exclusão
        this.$emit('confirm');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
  }
  
  h2 {
    margin-top: 0;
  }
  
  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  
  .btn {
    margin-left: 10px;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-cancel {
    background-color: #ccc;
  }
  
  .btn-confirm {
    background-color: #dc3545;
    color: #fff;
  }
  </style>