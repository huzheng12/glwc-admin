import ajax from "@/utils/ajax.js"

export function packagesList(data) {
  // 资产包 ==》项目列表
  // GET /packages?query=&sort=
  return ajax({
    url: '/api/packages',
    method: 'get',
    params: data
  })
}
