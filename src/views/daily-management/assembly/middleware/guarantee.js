
const dataFn = (_this, name) => {
  let entrustProps = { label: "label", value: "value" };
  // 保证人  数据
  const data = {
    guarantor: [
      {
        type: "Input",
        label: "保证人名称:",
        prop: "name",
        placeholder: "请输入",
        rules: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
      {
        type: "Select",
        label: "保证人类型",
        prop: "type",
        options: [
          { label: "法人", value: "法人" },
          { label: "自然人", value: "自然人" },
        ],
        props: entrustProps,
        placeholder: "请选择保证人类型",
      },
      {
        type: "Input",
        label: "证件号:",
        prop: "licenseNumber",
        placeholder: "请输入证件号",
      },
      {
        type: "Select",
        label: "状况:",
        prop: "status",
        options: [
          {
            value: "法人-存续",
            label: "法人-存续",
          },
        ],
        props: entrustProps,
        placeholder: "请选择状况",
      },
      {
        type: "Input",
        label: "担保责任最高限额:",
        prop: "quota",
        placeholder: "请输入担保责任最高限额",
      },
      {
        type: "Input",
        label: "保证估值:",
        prop: "valuation",
        placeholder: "请输入保证估值",
      },
      {
        type: "Textarea",
        label: "保证人情况说明:",
        prop: "situationComment",
        maxlength: 200,
        placeholder: "请输入保证人情况说明",
      },
      {
        type: "Textarea",
        label: "保证人估值说明:",
        prop: "valuationComment",
        maxlength: 200,
        placeholder: "请输入保证人估值说明",
      },
    ],
    // 其他保证
    otherGuarantees: [
      {
        type: "Input",
        label: "其他保证名称:",
        prop: "name",
        placeholder: "请输入其他保证名称",
        rules: [
          { required: true, message: "请输入其他保证名称", trigger: "blur" },
        ],
      },
      {
        type: "Input",
        label: "权证情况",
        prop: "warrantSituation",
        placeholder: "请选择权证情况",
      },
      {
        type: "Input",
        label: "证件号",
        prop: "licenseNumber",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "所有人",
        prop: "owner",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "责任最高限额",
        prop: "quota",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "诉讼进展",
        prop: "lawsuitProgress",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "优先级",
        prop: "priority",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "最可能市场价值",
        prop: "mostLikelyMarketValue",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "最高市场价值",
        prop: "highestMarketValue",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "最低市场价值",
        prop: "lowestMarketValue",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "最可能到手价值",
        prop: "mostLikelyValue",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "最高到手价值",
        prop: "highestValue",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "最低到手价值",
        prop: "lowestValue",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "扣除因素_欠缴税费",
        prop: "dfOutstandingTaxes",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "扣除因素_清场难度",
        prop: "dfClearanceDifficulty",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "扣除因素_权属瑕疵",
        prop: "dfDefectsOfOwnership",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "扣除因素_交易税费",
        prop: "dfTransactionTax",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "扣除因素_其他因素",
        prop: "dfOthers",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "保证期间",
        prop: "guaranteePeriod",
        placeholder: "请选择证件号",
      },
      {
        type: "Input",
        label: "诉讼时效",
        prop: "lawsuitAging",
        placeholder: "请选择证件号",
      },

    ]
  }


  return data[name]
}


export default dataFn