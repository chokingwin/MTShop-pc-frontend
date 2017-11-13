<template>
    <div class="circle-single-select">
        <span class="params-name">{{spec.name}}</span>
        <ul class="params-colors">
            <li class="true cur" @click="chooseParams(item.spec_value_id)" v-for="(item,index) in spec.value" :key="index">
                <a :title="item.title">
                    <i><img :src="item.url"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'circle-single-select',
  props: {
    p_num: Number,
    spec: Object
  },
  computed: {
    // splitPNum
  },
  methods: {
    chooseParams(id) {
      this.$emit('changeParams', {
        spec_id: this.spec.spec_id,
        value: id
      });
    }
  }
};
</script>

<style>

</style>


