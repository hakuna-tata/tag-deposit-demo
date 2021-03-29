<template>
    <div class="container"
        td-appid="tagdeposit_demo_tabA"
        td-pageid="tabA_page"
    >
        <div class="block">
            <div class="header">
                <span>按钮区域</span>
            </div>
            <div class="btn-box">
                <div
                    v-for="(btn, idx) in btns"
                    :key="idx"
                    class="btn-warp"
                >
                    <a  class="btn-inner">{{ btn.name }}</a>
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
                    @showDialog="setDialog"
                ></Item>
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
import Item, { IItem } from "./Item.vue";
import Dialog from "./Dialog.vue";

interface Btn {
    name: string;
    type: number;
}


@Component({
    components: {
        Item,
        Dialog
    }
})
export default class TabA extends Vue {
    itemList: Array<IItem> = [];

    btns: Array<Btn> = [];

    showDialog = false;

    dialogItem: IItem = null;

    currItemEl: Element = null;

    mounted(): void {
        const count = 20;

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

        this.btns.push({ name: "无处理", type: 1 });
        this.btns.push({ name: "NoTrace", type: 2 });
        this.btns.push({ name: "Trace", type: 3 });
    }

    appendItem(): void {
        const id = this.itemList.length + 1;

        this.itemList.push({
            name: `item${id}`,
            id,
            type: "tab1"
        });
    }

    setDialog({
        show,
        item,
        el
    }: {
        show: boolean;
        item: IItem;
        el: Element;
    }): void {
        this.dialogItem = item;

        this.showDialog = !!show;

        this.currItemEl = el;
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
    font-size: 0.8em;
}
</style>
