<template>
    <div class="home">
        this is home.
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'home',
    mounted() {
        this._loadData();
    },
    methods: {
        _loadData() {
            let vm = this;
            let params = {
                type: 'get',
                url: 'question',
                params: {
                    page: 1,
                    size: 10
                },
                sCallback(data) {
                    vm.type = data;
                },
                eCallback(e) {
                    console.log(e);
                }
            };
            this.http.request(params);
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>