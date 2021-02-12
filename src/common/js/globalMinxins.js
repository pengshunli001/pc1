export default {
    activated() {
        sc.setNavigationBarTitle(this.$route.query.text || this.$route.meta.title, function (res) {
            if (res.code === 0) {
            } else {
            }
        });
    },
    mounted() {
        // this.getBuildingInfo()
        sc.setNavigationBarTitle(this.$route.query.text || this.$route.meta.title, function (res) {
            if (res.code === 0) {
            } else {
            }
        });
    },
}