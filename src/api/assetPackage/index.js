import ajax from "@/utils/ajax.js"

export function addProjectsList(data) {
    // 资产包管理==新增资产包
    return ajax({
      url: `/api/packages`,
      method: 'post',
      params: data
    })
  
  }

/*
export function projectsList(data) {
  // 项目管理==》项目列表
  return ajax({
    url: `/api/projects`,
    method: 'get',
    params: data
  })

}
*/

  export function projectsList(data) {
    // 资产包管理==》资产包列表
    return ajax({
      url: `/api/packages`,
      method: 'get',
      params: data
    })
  
  }

  export function newAssetProjects(data) {
      console.log('fn')
    // 资产包管理==》新增资产包
    return ajax({
      url: `/api/projects`,
      method: 'post',
      data
    })
  
  }


  export function projectsprojectId(data) {
    // 资产包管理==》获取资产包详情
    return ajax({
      url: `/api/packages/${data}`,
      method: 'get',
    })
  
  }