<template>
    <div class="container">
        <div class="block">
            <div class="header">
                <span>按钮区域</span>
            </div>
            <div class="btn-box">
                <div class="btn-warp">
                    <a class="btn-inner">增加</a>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="header">
                <span>列表区域</span>
            </div>
            <div>
                <Item
                    v-for="item in itemList"
                    :key="item.id"
                    :item="item"
                ></Item>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Item, { IItem } from "./Item.vue";

@Component({
    components: {
        Item
    }
})
export default class TabB extends Vue {
    itemList: Array<IItem> = [];

    mounted(): void {
        const count = 10;

        let idx = 0;

        while (idx < count) {
            const id = idx + 1;

            this.itemList.push({
                name: `item${id}`,
                id,
                type: "tab1"
            });

            idx += 1;
        }
    }

    appendItem(): void {
        const id = this.itemList.length + 1;

        this.itemList.push({
            name: `item${id}`,
            id,
            type: "tab1"
        });
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
