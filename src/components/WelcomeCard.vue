<template>
    <section class="ml-welcome-card">
        <section class="ml-welcome-center">
            <h1 class="title">·欢迎来自北京朝阳的王梓睿加入~</h1>
            <section class="card-content">
                <figure class="user-logo"></figure>
                <div class="line"></div>
                <article class="user-info">
                    <div class="user-item">王梓睿 - HR</div>
                    <div class="user-item">1991年4月20日</div>
                    <div class="user-item">山东 - 青岛</div>
                    <div class="user-item">北京 - 朝阳</div>
                </article>
            </section>
            <div class="welcomeBtn">点击欢迎</div>
            <article class="love-word">愿得一人心白首不分离愿得一人心白首不分离愿得一人心白首不分离</article>
        </section>
    </section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
    @function rem($px, $base-font-size: 75px) {
        @return ($px / $base-font-size) * 1rem;
    }
    .ml-welcome-card{
        width:rem(750px);
        height:rem(400px);
        background:rgba(255,255,255,1);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .ml-welcome-center{
            width:rem(710px);
            height:rem(334px);
            padding: rem(20px) 0 0 0;
            background:linear-gradient(135deg,rgba(255,181,170,1) 0%,rgba(255,126,113,1) 100%);
            box-shadow:0px rem(4px) rem(20px) rem(-2px) rgba(0,0,0,0.07);
            border-radius:rem(12px);
            background: url("../assets/components/banner/welcomeCard.png") no-repeat rem(-24px) rem(-16px);
            background-size:rem(758px) rem(402px);
            position: relative;
            .title{
                width:rem(500px);
                height:rem(52px);
                letter-spacing: rem(2px);
                background:linear-gradient(90deg,rgba(246,62,104,0.5) 0%,rgba(255,75,44,0.55) 100%);
                border-radius:rem(26px);
                margin: 0 auto;
                margin-bottom: rem(30px);
                font-size:rem(28px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                line-height: rem(52px);
                color:rgba(255,255,255,1);
                text-align: center;

            }
            .card-content{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                height: rem(158px);
                .user-logo{
                    width:rem(116px);
                    height:rem(116px);
                    border-radius:rem(75px);
                    margin-right: rem(44px);
                    background: url("https://dpic2.tiankong.com/lt/9v/QJ6170661618.jpg?x-oss-process=style/240h") no-repeat center center/cover;
                }
                .line{
                    width:rem(8px);
                    height:rem(158px);
                    background:rgba(255,255,255,1);
                    border-radius:rem(4px);
                    margin-right: rem(60px);
                }
                .user-info{
                    width: rem(300px);
                    height:rem(158px);
                    .user-item{
                        height:rem(40px);
                        font-size:rem(28px);
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:rem(40px);
                        letter-spacing: rem(2px);
                    }
                }
            }
            .welcomeBtn{
                width:rem(168px);
                height:rem(54px);
                background:rgba(255,255,255,1);
                box-shadow:0px rem(4px) rem(20px) rem(-2px) rgba(255,105,86,0.09);
                border-radius:rem(12px);
                position: absolute;
                right: rem(28px);
                bottom:rem(28px);
                font-size:rem(28px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                line-height: rem(54px);
                text-align: center;
                color:rgba(255,105,84,1);
            }
            .love-word{
                width:rem(404px);
                height:rem(28px);
                font-size:rem(20px);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:rem(28px);
                position: absolute;
                left: rem(82px);
                bottom:rem(40px);
                letter-spacing: rem(2px);
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }

        }
    }
</style>
