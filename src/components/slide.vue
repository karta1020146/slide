<script setup>
    import { computed, onMounted, ref, watch } from 'vue'
    defineOptions({
        inheritAttrs:false
    })

    // const data = ref()
    const props = defineProps({
        data:Array
    })
    const firstId = ref(1)
    const name = ref(true)
    const nameShow = computed(() => {
        return name.value ? 'next' : 'pre'
    })
    const carShow = (id) => {
        firstId.value = id
    }
    const nextHandler = () => {
        name.value = true
        if (firstId.value < 5) {
            firstId.value += 1
        } else {
            firstId.value = 1
        }
    }
    const preHandler = () => {
        name.value = false
        if (firstId.value <= 5 && firstId.value >= 2) {
            firstId.value -= 1
        } else {
            firstId.value = 5
        }
    }
    const autoSlide = onMounted(() => {
        setInterval(nextHandler, 5000)
    })
</script>

<template>
    <div class="aaa">
        <div class="data">
            <TransitionGroup :name="nameShow">
                <div v-for="item of props.data" :key="item.id" v-show="item.id == firstId">
                    <img :src="item.url">
                </div>
            </TransitionGroup>
        </div>
        <div class="control">
            <button @click="preHandler">&larr;</button>
            <div class="center">
                <span v-bind="$attrs" v-for="item of props.data" :key="item.id" @click="carShow(item.id)"> </span>
            </div>
            <button @click="nextHandler">&rarr;</button>
        </div>
    </div>
</template>

<style scoped>
.center {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        margin: 0 4%;
        border-radius: 50%;
        width: 7px;
        height: 7px;
        background-color: #353535;
        cursor: pointer;
        padding: -3% 0;
    }
}

.data {
    border: 1px solid blue;
    position: relative;
    width: 500px;
    height: 500px;
    overflow: hidden;
    margin: auto;

    div {
        width: 100%;
        text-align: center;
        position: absolute;
        margin: auto;

        img {
            width: 100%;
            overflow: hidden;
        }
    }
}

.control {
    width: 100%;
    margin: .3rem 0;
    display: flex;
    justify-content: center;

    button {
        margin: 0 20px;
        cursor: pointer;
        font-size: 25px;
    }
    .center{
        width: 15%;
    }
}

.next-leave-from {
    left: 0%;
}

.next-leave-active {
    transition: .3s ease;
}

.next-leave-to {
    left: -100%;
}

.next-enter-from {
    left: 100%;
}

.next-enter-active {
    transition: .3s ease;
}

.next-enter-to {
    left: 0%;
}

.pre-leave-from {
    right: 0;
}

.pre-leave-active {
    transition: .3s ease;
}

.pre-leave-to {
    right: -100%;
}

.pre-enter-from {
    right: 100%;
}

.pre-enter-active {
    transition: .3s ease;
}

.pre-enter-to {
    right: 0%;
}</style>