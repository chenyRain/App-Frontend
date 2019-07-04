<template>
  <div class="goods">
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant"

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
}
</script>
