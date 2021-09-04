<template>
  <section class="Register_container">
    <panel class="Register_panel">
      <div>
        <label class="Register_field-label" type="text"> First Name</label>
        <input
          class="Register_field"
          id="firstName"
          v-model="firstName"
          type="text"
        />
      </div>
      <div>
        <label class="Register_field-label" type="text">Last Name</label>
        <input
          class="Register_field"
          v-model="lastName"
          type="text"
          autocomplete="false"
        />
      </div>
      <div>
        <label class="Register_field-label" type="text">Email address</label>
        <input
          class="Register_field"
          v-model="email"
          type="text"
          autocomplete="off"
        />
      </div>
      <div>
        <label class="Register_field-label" type="text">Password</label>
        <input
          class="Register_field"
          v-model="password"
          type="password"
          autocomplete="false"
        />
      </div>

      <button class="btn" type="button" @click="register">Register</button>
    </panel>

    <aside>
      <p v-if="showErrorMessage">{{ errorMessage }}</p>
    </aside>
  </section>
</template>
<script>
import Panel from "@/components/Panel.vue";
import { registerUser } from "../composable/Authentication";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Panel: Panel,
  },
  setup() {
    const router = useRouter();
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    let errorMessage = ref("");
    let showErrorMessage = ref(false);

    const register = async () => {
      await registerUser({
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
        email: email.value,
      }).catch((err) => {
        showErrorMessage.value = true;
        errorMessage.value = err.message;
      });
      debugger;
      router.push({ name: "Vitals" });
    };

    return {
      email,
      password,
      lastName,
      firstName,
      register,
      errorMessage,
      showErrorMessage,
    };
  },
};
</script>
<style scoped>
.Register_field-label {
  font-size: 14px;
}
.Register_panel {
  width: 500px;
}

.Register_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.Register_field {
  width: 300px;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 4px;
}
</style>
