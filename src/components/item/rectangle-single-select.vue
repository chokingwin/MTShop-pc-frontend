<template>
    <div class="rectangle-single-select">
        <span class="params-name">{{spec.name}}</span>
        <ul class="params-normal">
            <li class="cur params-text" @click="chooseParams(item.spec_value_id)" v-for="(item,index) in spec.value" :key="index">
                <a :title="item.title">
                    <span>{{item.name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'rectangle-single-select',
  props: {
    p_num: Number,
    spec: Object
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


