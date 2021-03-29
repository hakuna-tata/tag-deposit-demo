<template>
    <div class="item">
        <div class="item-wrap">
            <div
                class="item-inner"
                @click="
                    $emit('showDialog', {
                        show: true,
                        item: itemData,
                        el: $event.currentTarget
                    })
                "
            ></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

export interface IItem {
    name: string;
    id: number;
    type: string;
    rule?: string;
    position?: string;
}

@Component
export default class Item extends Vue {
    @Prop()
    item: IItem;

    get itemData(): IItem {
        return this.item;
    }

}
</script>

<style scoped>
.item {
    width: 33.33%;
    display: inline-block;
}

.item-wrap {
    padding-bottom: 100%;
    position: relative;
}

.item-inner {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: beige;
}
</style>
