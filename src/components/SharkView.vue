<template>
  <div>
    <button type="button" class="btn btn-primary">{{ msg }}</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SharkView",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    getReponse() {
      const path = "https://backend.forward-mario.com/shark";
      axios
        .get(path)
        .then((res) => {
          console.log(res.data);
          this.msg = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.getReponse();
  },
};
</script>
