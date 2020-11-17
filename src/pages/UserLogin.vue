<template>
  <section class="container">
    <div class="main">
      <div class="main__item main__item--1">
        <div class="logo">Jelurida</div>
        <div class="main__item--1__bg-image">
          <img src="@/assets/images/login-img.png" alt="" />
        </div>
        <div class="main__item--1__info">
          <h3>Welcome</h3>
          <p>
            Welcome to a new age of decentralized certificates. Create or
            receive certifications from the comfort of your home.
          </p>
        </div>
      </div>
      <div class="main__item main__item--2">
        <div class="input-section">
          <h3 class="input-section__header">User Login</h3>
          <h6 class="input-section__sub-heading">
            do you have an account?
            <span class="input-section__sub-heading--bold">create account</span>
          </h6>
        </div>

        <form action="#" class="form-group">
          <div class="email-address">
            <label for="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email-address"
              placeholder="example@email.com"
            />
          </div>
          <div class="password">
            <label for="password">Password</label>
            <input
              type="password"
              name="email"
              id="password"
              placeholder="***********"
            />
            <!-- <i class="far fa-eye"></i>
            <i class="far fa-eye-slash"></i> -->
          </div>
        </form>
        <div class="form-group__options">
          <div class="form-group__options--remember-me">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label for="remember-me"> Remember me</label>
          </div>

          <div class="form-group__options--forgot-password">
            <h6>forgot password ?</h6>
          </div>
        </div>

        <base-button class="btn btn--blue">login</base-button>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';
export default {
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  // padding: 3rem 3rem;
  // min-height: 100vh;
  background: linear-gradient(to left, #fefefe 50%, #e3edff 50%);
}

.main {
  display: flex;
  // justify-content: center;
  // background-color: #fefefe;
  width: 85vw;
  margin: 0 auto;
  min-height: 100vh;

  &__item {
    // width: 100vw;
    // padding: 2.5rem;

    &--1 {
      padding: 3.5rem;
      flex-basis: 50%;

      &__bg-image {
        margin: 4.7rem auto 0 auto;
      }

      &__info {
        text-align: center;
        margin: auto 2.3rem;

        h3 {
          text-transform: capitalize;
          color: #005eff;
          font-weight: 600;
        }

        p {
          font-size: 1rem;
        }
      }
      // background-color: #e3edff;
    }
    &--2 {
      padding: 3.5rem;
      flex-basis: 50%;
      // background-color: #fefefe;
      align-self: center;
    }
  }
}

.logo {
  color: #005eff;
  font-size: 2rem;
  font-weight: bold;
}

.input-section {
  // display: flex;
  // flex-direction: column;
  margin-bottom: 3rem;

  &__sub-heading {
    text-transform: capitalize;
    font-weight: normal;
  }
  &__header {
    text-transform: capitalize;
    color: #005eff;
    font-weight: 600;
  }

  &__sub-heading--bold {
    font-weight: bold;
    color: #005eff;
  }
}

.form-group {
  // display: flex;
  // flex-direction: column;

  &__options--remember-me {
    margin-right: auto;
    label {
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }

  &__options--forgot-password {
    text-transform: capitalize;
    color: #005eff;
  }

  &__options {
    margin-bottom: 1rem;
  }
  &__options,
  &__options--remember-me {
    display: flex;
    align-items: center;
  }

  .email-address,
  .password {
    display: flex;
    flex-direction: column;
    color: #005eff;
    font-weight: normal;
    margin-bottom: 1.5rem;

    label {
      margin-bottom: 1rem;
    }
  }

  // .password {
  //   i {
  //     position: absolute;
  //     top: 27rem;
  //     right: 9.5rem;
  //     visibility: visible;
  //   }
  // }

  input {
    // input adjusted
    width: 100%;
    border: 2px solid #808080;
    padding: 0.7rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: lighter;

    &:focus {
      outline: none;
    }
  }
}
</style>