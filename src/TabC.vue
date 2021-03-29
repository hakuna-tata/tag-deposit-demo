<template>
    <div
        class="container"
        td-moduleid="tabC_container"
        td-expose="1"
    >
        <div class="block">
            <div class="header">
                <span>按钮区域</span>
            </div>
            <div class="btn-box">
                <div class="btn-warp">
                    <a class="btn-inner" @click="setDialog({show: true})">浮层</a>
                </div>
            </div>
        </div>
        <div v-show="showDialog">
            <Dialog
                @showDialog="setDialog"
            ></Dialog>
        </div>
    </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Dialog from "./Dialog.vue";

@Component({
    components: {
        Dialog
    }
})
export default class TabC extends Vue {
    showDialog = false;

    setDialog({
        show
    }: {
        show: boolean;
    }): void {
        this.showDialog = !!show;
    }
}
</script>

<style scoped>
.container {
    margin: 20px;
}

.block {
    border: 1px solid #eee;
    margin-top: 20px;
}

.header {
    margin: 10px;
    font-weight: 500;
}

.btn-box {
    display: flex;
    flex-direction: row;
    height: 80px;
}

.btn-warp {
    flex: 1;
    text-align: center;
}

.btn-inner {
    width: 60px;
    height: 60px;
    display: inline-block;
    margin: 10px 0px;
    border: 1px solid #ddd;
    border-radius: 30px;
    color: black;
    line-height: 60px;
}
</style>
