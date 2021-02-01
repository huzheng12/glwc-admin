import ajax from "@/utils/ajax.js"
export function projects(data) {
  // 项目管理==》添加单个项目
  return ajax({
    url: '/projects',
    method: 'get',
    params: data
  })

}
