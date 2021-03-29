<template>
    <div class="dialog">
        <div class="btn-bar">
            <div class="btn-wrap">
                <div
                    class="btn"
                    @click="$emit('showDialog', { show: false })"
                >
                    <span class="txt">关闭</span>
                </div>
            </div>
            <div class="btn-wrap">
                <div
                    class="btn"
                    @click="$emit('showDialog', { show: false })"
                >
                    <span class="txt">设置</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class InlinePage extends Vue {}
</script>


<style scoped>
.dialog {
    position: absolute;
    top: 50%;
    background: #a0a0a0;
    left: 10%;
    right: 10%;
    padding-bottom: 80%;
    margin-top: -50%;
    border-radius: 4px;
    box-shadow: #bbbbbb 1px 1px 6px 0px;
}

.btn-bar {
    height: 40px;
    position: absolute;
    bottom: 40px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: row;
}

.btn-wrap {
    flex: 1;
    position: relative;
}

.btn {
    height: 40px;
    position: absolute;
    background: white;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    border-radius: 4px;
    text-align: center;
}

.txt {
    line-height: 40px;
}
</style>
