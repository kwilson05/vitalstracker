<template>
  <section class="SignIn_container">
    <panel class="SignIn_panel">
      <div>
        <label class="SignIn_field-label" type="text">Email address</label>
        <input
          class="SignIn_field"
          v-model="email"
          type="text"
          autocomplete="off"
        />
      </div>
      <div>
        <label class="SignIn_field-label" type="text">Password</label>
        <input
          class="SignIn_field"
          v-model="password"
          type="password"
          autocomplete="false"
        />
      </div>

      <button class="btn" type="button" @click="signin">Sign In</button>
    </panel>

    <aside>
      <p v-if="showErrorMessage">{{ errorMessage }}</p>
    </aside>
  </section>
</template>
<script>
import Panel from "@/components/Panel.vue";
import { signInUser } from "../composable/Authentication";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Panel: Panel,
  },
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    let errorMessage = ref("");
    let showErrorMessage = ref(false);

    const signin = async () => {
      await signInUser({
        password: password.value,
        email: email.value,
      }).catch((err) => {
        showErrorMessage.value = true;
        errorMessage.value = err.message;
      });

      router.push({ name: "Vitals" });
    };

    return {
      email,
      password,
      signin,
      errorMessage,
      showErrorMessage,
    };
  },
};
</script>
<style scoped>
.SignIn_field-label {
  font-size: 14px;
}
.SignIn_panel {
  width: 500px;
}

.SignIn_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.SignIn_field {
  width: 300px;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 4px;
}
</style>
