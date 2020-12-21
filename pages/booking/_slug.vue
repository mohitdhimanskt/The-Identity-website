<template>
  <div>
    <div class="now">
      <h1>
        {{ vechicle.heading }}
      </h1>
    </div>
    <!-- <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ vechicle.title }}</h1>
      </div>
    </div>
    <p>{{ vechicle.description}}</p>
    <div class="phone">
    
    </div> -->
    <div class="row">
      <p>{{ vechicle.bookdescription }}</p>
    </div>
    <!-- Login Form -->
    <div class="login-form py-4">
      <div class="book-form">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card shadow-sm">
              <span class="shape"></span>

              <div class="card-body py-4">
                <div v-if="success" class="">
                  Great! Your message has been sent successfully. I will try to
                  respond quickly.
                </div>
                <form v-else v-on:submit.prevent="sendMessage"  id="uploadForm" action='upload_file' role="form" method="post" enctype=multipart/form-data>
                  <div v-if="errored" class="">
                    Bummer, Something went wrong. Did you fill out all of the
                    fields?
                  </div>
                  <div class="card-header text-center bg-transparent">
                    <div  id="app">
                      <div class="circle" v-if="!image">
                        <input name="file" id="file" type="file" v-on:change="handleFileUpload()"  @change="onFileChange" ref="file"  />
                      </div>
                      <div v-else>
                        <img :src="image" />
                        <button @click="removeImage">Remove image</button>
                      </div>
                    </div>

                    <h2>Upload Image</h2>
                  </div>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      v-model="name"
                      type="text"
                      class="form-control shadow-none"
                      placeholder="user name"
                      id="name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Email</label>
                    <input
                      v-model="email"
                      type="text"
                      class="form-control shadow-none"
                      placeholder="user email"
                      id="name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Phone</label>
                    <input
                      v-model="phone"
                      type="text"
                      class="form-control shadow-none"
                      placeholder="phone no"
                      id="name"
                      required
                    />
                  </div>
                  <hr />
                  <div class="uk-card-price">
                    <p class="uk-text">{{ vechicle.price }}</p>
                  </div>
                  <hr />

                  <div class="row setup-content" id="step-5">
                    <div class="col-xs-12">
                      <div class="col-md-12">
                        <label>Choose Payment Method</label> <br />
                        <select id="pay_method" v-on:change="displayPayment()">
                          <option value="NA" selected=""></option>
                          <option value="C">Credit Card</option>
                          <option value="B">Bank Debit</option>
                        </select>
                        <br />
                        <br /><br /><br />

                        <div
                          id="card-payment"
                          class="payment"
                          style="display:none"
                        >
                          <div class="payment owner">
                            <label for="owner">Cardholder Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="owner"
                            />
                          </div>
                          <div class="payment" id="card-number-field">
                            <label for="cardNumber">Card Number</label>
                            <input
                              type="text"
                              class="form-control"
                              id="cardNumber"
                            />
                          </div>
                          <div class="payment CVV">
                            <label for="cvv">CVC</label>
                            <input type="text" class="form-control" id="cvc" />
                          </div>
                          <div class="payment" id="expiration-date">
                            <label>Expiration Date</label> <br />
                            <select name="months" id="months">
                              <option value="01">January</option>
                              <option value="02">February </option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="09">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                            <select name="months" id="months">
                              <option value="18"> 2018</option>
                              <option value="19"> 2019</option>
                              <option value="20"> 2020</option>
                              <option value="21"> 2021</option>
                              <option value="22"> 2022</option>
                              <option value="23"> 2023</option>
                              <option value="24"> 2024</option>
                              <option value="25"> 2025</option>
                              <option value="26"> 2026</option>
                              <option value="27"> 2027</option>
                              <option value="28"> 2028</option>
                            </select>
                            <br /><br />

                            <i class="fab fa-cc-visa fa-3x"></i>
                            <i class="fab fa-cc-mastercard fa-3x"></i>
                            <i class="fab fa-cc-amex fa-3x"></i>
                            <i class="fab fa-cc-discover fa-3x"></i>
                          </div>
                        </div>

                        <div
                          id="bank-payment"
                          class="payment"
                          style="display:none"
                        >
                          <div class="" id="bankpaymentacct">
                            <label for="bankaccount">Bank Account #</label>

                            <input
                              type="text"
                              class="form-control"
                              id="bankaccount"
                            />
                          </div>
                          <div class="payment" id="accttype">
                            <label> Account Type</label> <br />
                            <select name="accounttype" id="accounttype">
                              <option value="check"> Checking</option>
                              <option value="save"> Savings</option>
                            </select>
                            <br />
                          </div>
                          <div class="payment" id="routing">
                            <label for="routing">Routing #</label>
                            <input
                              type="text"
                              class="form-control"
                              id="routing"
                            />
                          </div>
                          <div class="payment" id="debitday">
                            <label for="day">Debit Day</label> <br />
                            <select name="day" id="day">
                              <option value="10"> 10</option>
                              <option value="25"> 25</option>
                            </select>
                          </div>
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                    <hr />
                     <div class="days">
                       <div class="day">
                            <label for="name">Number of days:</label>
                    <input
                      v-model="name"
                      type="text"
                      class="form-control shadow-none"
                      placeholder=""
                      id="name"
                      required
                    />
                       </div>
                          </div>
                          <hr />
                          <div class="amount">
                               <label for="name">Total Amount:</label>
                    <input
                      v-model="name"
                      type="text"
                      class="form-control shadow-none"
                      placeholder=""
                      id="name"
                      required
                    />
                          </div>
                  <div class="payment">
                    <button  on:click="sendMessage" value="upload"  class="btn">
                      {{ loading ? "Sending Message..." : "Submit" }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="booking">
      <nuxt-link to="/">
        Back
      </nuxt-link>
    </div>
  </div>

  <!-- /Login Form -->
  <!-- <div>
      <h3>Personal Information</h3>
    </div>
    <div v-if="success" class="rounded bg-indigo-500 text-white text-lg p-4">
      Great! Your message has been sent successfully. I will try to respond
      quickly.
    </div>
    <form v-else v-on:submit.prevent="sendMessage" class="btn">
      <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
        Bummer, Something went wrong. Did you fill out all of the fields?
      </div>
      <div class="container">
        <div class="avatar-upload">
          <div class="avatar-edit">
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload"></label>
          </div>
          <div class="avatar-preview">
            <div
              id="imagePreview"
              style="background-image: url(https://image.shutterstock.com/image-vector/upload-contact-icon-add-user-600w-615974498.jpg);"
            ></div>
          </div>
        </div>
      </div>
      <div class="box bg-img">
        <div class="content">
          <h2>Welcome Back</h2>

          <div class="user-input">
            <input
              v-model="name"
              type="text"
              class="login-input"
              placeholder="user name"
              id="name"
              required
            />
          </div>

          <div class="pass-input">
            <input
              v-model="email"
              type="email"
              class="login-input"
              placeholder="email"
              id="my-email"
              required
            />
          </div>
          <div class="pass-input">
            <input
              v-model="phone"
              type="phone"
              class="login-input"
              placeholder="phone"
              id="phone"
              required
            />
          </div>
        </div>

        <div class="">
          <button type="submit" class="btn">
            {{ loading ? "Sending Message..." : "Submit" }}
          </button>
        </div>
      </div>
    </form>
    <div class="booking">
      <nuxt-link to="/">
        Back
      </nuxt-link>
    </div> -->
</template>

<script>
import { getMetaTags } from "../../utils/seo";
import { getStrapiMedia } from "../../utils/medias";

export default {
  //  middleware: "auth",
  async asyncData({ $strapi, params }) {
    const matchingVechicle = await $strapi.find("vehicles", {
      slug: params.slug
    });
    return {
      vechicle: matchingVechicle[0]
      // global: await $strapi.find("global"),
    };
  },
  // head() {
  //   const { defaultSeo, favicon, siteName } = this.global;

  //   // Merge default and article-specific SEO data
  //   const fullSeo = {
  //     ...defaultSeo,
  //     metaTitle: `${this.page.title} page`,
  //     metaDescription: `All articles about ${this.page.title}`,
  //   };

  //   return {
  //     title: fullSeo.metaTitle,
  //     titleTemplate: `%s | ${siteName}`,
  //     meta: getMetaTags(fullSeo),
  //     link: [
  //       {
  //         rel: "favicon",
  //         href: getStrapiMedia(favicon.url),
  //       },
  //     ],
  //   };
  // },
  data() {
    return {
      image: "",
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      phone: "",
      file: ''
    };
  },
  methods: {
     async sendMessage(){
      let rawData ={
        name: this.name,
        email: this.email,
        phone: this.phone,
        vehicle: this.vechicle.id
      }
      rawData = JSON.stringify(rawData)
      let formData = new FormData()
      formData.append('files.image', this.file)
      formData.append('data', rawData)
      console.log(formData)

        // formData.append('files', this.file)
        // formData.append('name', this.name) // optional, you need it if you want to link the image to an entry
        // formData.append('email', this.email) // optional, you need it if you want to link the image to an entry
        // formData.append('phone', this.phone)
        // formData.append('vehicle', this.vechicle.id)
      try{
      let response = await this.$axios.post('http://localhost:1337/bookings', formData)
        console.log(response, 'response')
      }
      catch(e){
      console.log(e, 'error');
      }
      
     },
    // sendMessage() {
    //   let formData = new FormData();
    //   formData.append('file', this.file);
    //   formData.append('name', this.name);
    //   formData.append('email', this.email);
    //   formData.append('phone', this.phone);
    //   console.log('>> formData >> ', formData);
    //   console.log("method called");
    //   this.loading = true;
    //   this.$axios
    //     .post("http://localhost:1337/bookings",
    //     formData,{
    //     headers: {
    //        'Content-Type': 'multipart/form-data'
    //     }
    //     })
    //     // {
    //     //   name: this.name,
    //     //   email: this.email,
    //     //   phone: this.phone,
         
    //     //   vehicle: this.vechicle.id
    //     // })
    //     .then(response => {
    //       this.success = true;
    //       this.errored = false;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       this.errored = true;
    //     })
    //     .finally(() => {
    //       this.loading = false;
    //     });
    // },
       
     handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log('>>>> 1st element in files array >>>> ', this.file);
    },
    displayPayment() {
      var pay_method = document.getElementById("pay_method");
      var divc = document.getElementById("card-payment");
      var divb = document.getElementById("bank-payment");
      divc.style.display = pay_method.value == "C" ? "block" : "none";
      divb.style.display = pay_method.value == "B" ? "block" : "none";
    },
    onFileChange() {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = e => {
        this.image = e.target.result;
        console.log(this.image);
      };
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    },
  }
};
</script>
<style scoped>
#app {
  text-align: center;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.login-form .card {
  position: relative;
  overflow: hidden;
}
.login-form .card .shape {
  width: 300px;
  height: 300px;
  border-radius: 40px;
  display: block;
  position: absolute;
  top: 0;
  right: -150px;
  background: rgba(0, 0, 0, 0.05);
  transform: rotate(45deg);
}

.login-form .card .card-header i {
  font-size: 54px;
  margin-bottom: 15px;
}

.login-form .card .card-header h2 {
  font-size: 25px;
  font-weight: 700;
}

.login-form .card .card-body {
  position: relative;
}

.login-form .card .card-body label {
  font-size: 13px;
}
.uk-card-price {
  text-align: center;
  font-style: italic;
}
.login-form .card .card-body input,
.login-form .card .card-body textarea {
  border: 1px solid #aaa;
  border-radius: 0;
}
.login-form .card .card-body input:focus,
.login-form .card .card-body textarea:focus {
  border: 1px solid #222;
}

.login-form .card .card-body .btn {
  background: #222;
  color: #fff;
  border-radius: 0;
}
.login-form .card .card-body .btn:hover {
  background: #555;
  color: #fff;
}
.login-form .card .card-body .custom-control label {
  font-size: 16px;
}
.now {
  text-align: center;
  font-style: italic;
  padding: 15px;
}
.row {
  text-align: left;
  font-family: sans-serif;
  font-size: 15pt;
  color: #444;
  width: 85%;

  margin: 0 auto;
  font-style: italic;

  padding: 15px;
}
.booking {
  text-align: center;
  font-style: italic;
  font-size: 20px;
  width: 200px;
  height: 3rem;

  padding: 0.3rem 1rem;
  margin-left: 646px;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #888;
  border-radius: 20px;
  transition: background-color 0.5s ease;
  background-color: black;
  color: white;
}
.btn {
  margin-left: 177px;
}
/*General Styles*/

html {
  font-size: 12px;
  font: Roboto, sans-serif;
}

@media (min-width: 768px) {
  html {
    font-size: 14px;
  }
}

/*Subscription Page Content Styles*/

.container {
  max-width: 960px;
}

.pricing-header {
  max-width: 700px;
}

.card-deck .card {
  min-width: 200px;
  height: 400px;
}

.card-body li {
  /* Adds line spacing for card descriptions */
  padding: 8px 0;
}

.card-header {
  border-bottom: 4px solid #086495;
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

.img-responsive {
  /* Measurements for KPC Logo on top */
  height: 90px;
  width: 150px;
}

.font-weight-normal {
  /* For the title on the cards */
  text-transform: uppercase;
}

.btn-primary {
  /* Sign up Button Style */
  background: #086495;
  color: #ffffff;
  border: none;
}

.btn-primary:hover {
  background: #0a7ab6;
  color: #ffffff;
}

/*Print and Online Page Styles*/

.stepwizard-step p {
  margin-top: 10px;
  color: #086495;
}

.stepwizard-row {
  display: table-row;
}

.stepwizard {
  display: table;
  width: 100%;
  position: relative;
}

.stepwizard-row:before {
  top: 14px;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 100%;
  height: 2px;
  background-color: #086495;
}

.stepwizard-step {
  display: table-cell;
  text-align: center;
  position: relative;
}

.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.p-image {
  position: absolute;
  top: 167px;
  right: 30px;
  color: #666666;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.p-image:hover {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
h3 {
  font: Roboto, sans-serif;
  font-weight: 400;
}

label {
  color: #086495;
  font: Roboto, sans-serif;
  font-weight: 200;
}

.nextBtn {
  background-color: #086495;
  width: 100px;
  margin-right: 150px;
}

.form-control {
  width: 50%;
}

.selectpicker {
  width: 50%;
  height: 35px;
}

select {
  width: 142%;
  height: 32px;
}
/* .circle{
      border-radius: 1000px !important;
    overflow: hidden;
    width: 128px;
    height: 128px;
    border: 8px solid #999;
    position: absolute;
    
} */
.day{
  width: 65px;
}
</style>
