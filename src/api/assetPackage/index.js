import ajax from "@/utils/ajax.js"

export function addProjectsList(data) {
  // 资产包管理==新增资产包
  return ajax({
    url: `/api/packages`,
    method: 'post',
    data
  })

}


export function projectsList(data) {
  // 资产包管理==》资产包列表
  return ajax({
    url: `/api/packages`,
    method: 'get',
    params: data
  })

}

export function projectsprojectId(data) {
  // 资产包管理==》获取资产包详情
  return ajax({
    url: `/api/packages/${data}`,
    method: 'get',
  })

}