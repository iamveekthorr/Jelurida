<template>
  <section class="container">
    <div class="one">
      <div class="dashboard">
        <h3>Dashboard</h3>
        <p>Monday 02 November 2020</p>
      </div>
      <div class="user">
        <img src="../assets/images/x10.png" alt="" />
        <h3>Ik Marvelous</h3>
      </div>
    </div>
    <div class="two">
      <div class="two-info">
        <h1>Hi, Marv</h1>
        <p>Ready to make decentralized certificates?</p>
      </div>
      <img src="../assets/images/x44.png" alt="" />
    </div>
    <div class="three">
      <h3>Overview</h3>
      <div class="certificates-created">
        <div class="board board-1">
          <div class="board-content">
            <h5>65</h5>
            <i class="far fa-file-alt"></i>
          </div>
          <p>Certificates created</p>
        </div>
        <div class="board board-2">
          <div class="board-content">
            <h5>65</h5>
            <i class="far fa-file-alt"></i>
          </div>
          <p>Certificates created</p>
        </div>
        <div class="board board-3">
          <div class="board-content">
            <h5>65</h5>
            <i class="far fa-file-alt"></i>
          </div>
          <p>Certificates created</p>
        </div>
        <div class="board board-4">
          <div class="board-content">
            <h5>65</h5>
            <i class="far fa-file-alt"></i>
          </div>
          <p>Certificates created</p>
        </div>
      </div>
    </div>
    <div class="four">
      <div class="upload-form">
        <h5>Create Decentralized Certificates</h5>
        <p>Upload a certificate template here</p>
        <form action="#" class="form-group">
          <div class="full-name">
            <input type="text" name="name" id="name" placeholder="Full Name" />
          </div>
          <div class="file-input">
            <input type="text" name="file" id="file" placeholder="File input" />
          </div>
          <base-button class="btn btn--blue">Upload</base-button>
        </form>
      </div>
      <div class="cert">
        <img src="../assets/images/x1.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
  position: relative;
  width: 80%;
  float: right;
  height: 100vh;
}

.one {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.7rem;
  }
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 2.5rem;
    margin-right: 1rem;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0.3rem;
  }
}

.two {
  border-radius: 0.3rem;
  height: 9rem;
  background: #a8ceff;
  box-shadow: 0px 3px 6px #00000029;
  margin-top: 0.6rem;
  opacity: 0.66;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
  }

  img {
    width: 20rem;
  }

  &-info {
    padding-left: 3rem;
  }
}

.three {
  margin-top: 0.6rem;

  h3 {
    font-size: 1rem;
    font-weight: normal;
  }

  .certificates-created {
    margin-top: 0.2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    .board {
      border-radius: 0.2rem;
      padding: 0.7rem;
      box-shadow: 0px 3px 6px #00000029;
      opacity: 0.66;

      &-1 {
        background: #ff0000;
      }
      &-2 {
        background: #4b99ff;
      }
      &-3 {
        background: #3dd0ff;
      }
      &-4 {
        background: #3fe634;
      }

      &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      h5 {
        font-size: 2rem;
      }

      i {
        font-size: 2rem;
        color: #fff;
      }

      p {
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  }
}

.four {
  margin-top: 0.8rem;
  display: flex;
  // column-count: 2;
  column-gap: 1rem;

  .upload-form {
    flex-basis: 60%;
    border-radius: 0.3rem;
    background-color: #e8e5fb;
    padding: 1rem;
    // height: 100%;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 0.56;

    .form-group {
      input {
        width: 100%;
        padding: 0.7rem 1rem;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: lighter;
        margin-bottom: 1rem;
        border: 2px solid #808080;

        &:focus {
          outline: none;
        }
      }
    }

    h5 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
      margin: 0.3rem;
    }

    button {
      opacity: 1;
    }
  }

  .cert {
    background: url('../assets/images/x1.png') no-repeat center center/cover;
    flex-basis: 40%;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 0.56;
    border-radius: 0.3rem;
    // object-fit: cover;
    border: transparent;

    img {
      visibility: hidden;
    }
  }
}
</style>