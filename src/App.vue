<template>
    <div
        class="root"
        td-appid="tagdeposit_demo_app"
        td-pageid="app_page"
    >
        <div class="tab-bar" td-moduleid="tab_bar">
            <div
                v-for="(item, key) in tabMap"
                :key="key"
                class="tab-item"
                @click="changeTab(key)"
                :td-itemid="item.name"
            >
                <span class="tab-name">{{ item.name }}</span>
            </div>
        </div>
        <div class="tab-container">
            <Component :is="currTab"></Component>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TabA from "./TabA.vue";
import TabB from "./TabB.vue";
import TabC from "./TabC.vue";

interface Tab {
    name: string;
    comp: typeof Vue;
}

@Component({
    components: {
        TabA,
        TabB,
        TabC,
    }
})
export default class App extends Vue {
    currTab: typeof Vue = TabA;

    tabMap: { [Key: string]: Tab } = {
        a: {
            name: "Tab A",
            comp: TabA
        },
        b: {
            name: "Tab B",
            comp: TabB
        },
        c: {
            name: "Tab C",
            comp: TabC
        }
    };

    changeTab(key: string): void {
        this.currTab = (this.tabMap[key] || this.tabMap["a"]).comp;
    }
}
</script>


<style scoped>
.root {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.tab-bar {
    height: 60px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
    background: white;
    cursor: pointer;
}

.tab-item {
    flex: 1;
    text-align: center;
    border-right: 1px solid #eee;
}

.tab-name {
    line-height: 60px;
}

.tab-container {
    flex: 1;
}
</style>
