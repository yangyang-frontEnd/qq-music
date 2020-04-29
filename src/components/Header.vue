<template>
    <div class="heads">
        <div class="heads_box">
            <img src="./logo.png" class="log">
            <div class="download">
                <span>个人中心</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
    @import '../common/stylus/variable';

    .heads {
        width: 100%;
        height: 80px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.02);
        background-color: $color-background;

        .heads_box {
            width: 94%;
            height: 80px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .log {
                width: 34%;
            }

            .download {
                width: 70px;
                height: 25px;
                border: 1px solid $color-theme;
                font-size: $font-size-medium;
                border-radius: 15px;
                text-align: center;
                line-height: 25px;
                color: $color-text;
            }
        }
    }
</style>