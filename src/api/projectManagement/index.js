import ajax from "@/utils/ajax.js"

export function projectsList(data) {
  // 项目管理==》项目列表
  return ajax({
    url: '/projects',
    method: 'get',
    params: data
  })

}
export function projectsprojectId(data) {
  // 项目管理==》获取项目详情
  return ajax({
    url: `/projects/${data}`,
    method: 'get',
  })

}
export function newProjects(data) {
  // 项目管理==》新增项目
  return ajax({
    url: `/projects`,
    method: 'post',
    data
  })

}
export function updateProjects(id, data) {
  // 项目管理==》修改项目
  return ajax({
    url: `/projects/${id}`,
    method: 'PUT',
    data
  })
}

export function delProjects(id) {
  // 项目管理==》修改项目
  // DELETE /projects/:projectId
  return ajax({
    url: `/projects/${id}`,
    method: 'DELETE',
  })
}
