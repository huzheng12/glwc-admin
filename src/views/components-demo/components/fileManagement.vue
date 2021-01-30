<template>
    <div class="valuation">
       <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>一个标题</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
          <el-card class="box-card card2">
            <div slot="header" class="clearfix">
                <span></span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    </div>

</template>

<script>
export default {
    
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.valuation{
    overflow: hidden;
    .box-card{
        width: 48%;
        float: left;

    }
    .card2{
        margin-left: 2%;
    }
}
</style>