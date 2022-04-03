<template>
  <div class="contant max-w-sm m-4 p-5 flex flex-col gap-4 items-center rounded-md shadow-lg">

    <!-- header -->
    <img class="logo" src="/android-chrome-512x512.png" alt="Cria Link">
    <h1 class="title">Cria Link</h1>
    <h2 class="subtitle">Crie links personalizados para compartilhar seu WhatsApp, <span>ou inicie uma conversa sem salvar o contato.</span></h2>

    <!-- forms -->
    <form @submit.prevent="" action="" class="w-full">
      
      <label class="input-label" for="number">Nº do celular</label>
      <input class="input-tel" v-model="tel" type="tel" name="number" id="number" required placeholder="(62) 98888-7777" v-mask="['(##) ####-####', '(##) #####-####']">

      <label class="input-label" for="message">Mensagem <span>(Opcional)</span></label>
      <textarea class="text-area" name="message" v-model.trim="message" id="message" rows="2"></textarea>

      <label class="input-label" for="message">Link gerado</label>
      <input class="input-link" v-model="link" type="url" name="url" id="ulr" :disabled="disabled" placeholder="https://api.whatsapp.com/send?phone...">
      
      <!-- Form functions for link -->
      <div class="flex justify-between">
        <button class="btn-linkaction" title="Limpar campos" type="button" @click="reset">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <div class="flex">
          <button class="btn-linkaction" title="Compartilhar" type="button" @click="shareLink">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button class="btn-linkaction" title="Copiar" type="button" @click="copyMessage">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>
          <button class="btn-linkaction" title="Abrir no Whatsapp" type="button" @click="openWhatsapp">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" class="w-5 h-5 svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
          </button>
        </div>
      </div>
    
      <!-- Form get link -->
      <button class="btn-getlink" @click="getLink">Gerar link</button> 

    </form>

    <!-- Footer -->
    <div>
      <p class="block text-xs text-center mb-1">Não guardamos nenhum dado informado.</p>
      <a class="block text-xs text-center font-bold text-sky-700" href="https://github.com/Karytonn/crialink" rel="noreferrer noopener" target="_blank">Código fonte</a>
    </div>
    <div class="w-1/2 flex flex-col gap-2 items-center my-1">
      <a href="https://karytonn.dev" rel="noreferrer noopener" target="_blank">
        <img src="/logo-karytonndev.png" alt="Karytonn DEV">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      tel: '',
      message: '',
      link: '',
      disabled: true,
    };
  },
  methods: {
    getLink() {
      if (this.link && this.tel ) {
        if(this.message.length <= 0)  {
          this.link = `https://api.whatsapp.com/send?phone=55${this.telSanitize(this.tel)}`;
        } else {
          this.link = `https://api.whatsapp.com/send?phone=55${this.telSanitize(this.tel)}&text=${this.messageSanitize(this.message)}`;
        }
        this.disabled = false;
        alert('Novo link gerado!');
      } if (!this.tel) {
        alert('Preencha o campo com o número do telefone!');
        this.disabled = true;
      } else {
        if(this.message.length <= 0)  {
          this.link = `https://api.whatsapp.com/send?phone=55${this.telSanitize(this.tel)}`;
        } else {
          this.link = `https://api.whatsapp.com/send?phone=55${this.telSanitize(this.tel)}&text=${this.messageSanitize(this.message)}`;
        }
        this.disabled = false;
      }
    },
    shareLink() {
      alert('Função ainda não disponível!');
    },
    copyMessage() {
      if (this.link) {
        try {
          navigator.clipboard.writeText(this.link);
          alert('Link copiado!');
        } catch (error) {
          const el = document.createElement('textarea');
          el.value = this.link;
          el.setAttribute('readonly', '');
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
          alert('Link copiado!');
          console.log(error);
        }
      } else {
        alert('Por favor, gere o link antes de copiar.');
      }
    },
    openWhatsapp() {
      if (this.link) {
        window.open(this.link, '_blank');
      } else {
        alert('Por favor, gere o link antes de abrir o Whatsapp.');
      }
    },
    reset() {
      this.tel = '';
      this.message = '';
      this.link = '';
      this.disabled = true;
    },
    telSanitize(tel : string): string {
      return tel.replace(/\D/g, '');
    },
    messageSanitize(message : string): string {
      return message.replace(/\s+/g, "%20");
    },
  }
});
</script>

<style lang="scss" scoped>
.contant {
  background-color: #d8e8ea;
}

.logo {
  @apply w-20 h-20 rounded-full
}

.title {
  @apply block font-display font-bold text-5xl text-slate-700
}

.subtitle {
  @apply block my-4 text-center text-base text-slate-600 font-normal
}

.subtitle span {
  @apply font-bold
}

.input-label {
  @apply block text-slate-600
}

.input-tel {
  @apply w-full mb-4 rounded-lg placeholder:text-slate-400
}

.input-link {
  @apply w-full rounded-lg text-xs placeholder:text-slate-400
}

.text-area {
  @apply w-full mb-3 rounded-lg
}

.btn-linkaction {
  @apply flex items-center gap-1 p-2 w-min
}

.btn-getlink {
  @apply block mx-auto my-4 px-6 py-2 bg-teal-800 text-gray-50 rounded-lg font-bold text-lg shadow-lg shadow-teal-800/50
}
</style>