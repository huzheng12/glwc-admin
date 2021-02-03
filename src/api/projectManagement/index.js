import ajax from "@/utils/ajax.js"

export function projectsList(data) {
  // 项目管理==》项目列表
  return ajax({
    url: '/api/projects',
    method: 'get',
    params: data
  })

}
export function projectsprojectId(data) {
  // 项目管理==》获取项目详情
  return ajax({
    url: `/api/projects/${data}`,
    method: 'get',
  })

}
export function newProjects(data) {
  // 项目管理==》新增项目
  return ajax({
    url: `/api/projects`,
    method: 'post',
    data
  })

}
export function updateProjects(id, data) {
  // 项目管理==》修改项目
  return ajax({
    url: `/api/projects/${id}`,
    method: 'PUT',
    data
  })
}

export function delProjects(id) {
  // 项目管理==》修改项目
  // DELETE /projects/:projectId
  return ajax({
    url: `/api/projects/${id}`,
    method: 'DELETE',
  })
}
export function projectslawsuits(id) {
  // 项目管理==》修改项目
  // GET /projects/:projectId/lawsuits
  return ajax({
    url: `/api/projects/${id}/lawsuits`,
    method: 'GET',
  })
}
export function projectsbails(id) {
  // 项目管理==》获取保证人列表
  // GET /projects/:projectId/bails
  return ajax({
    url: `/api/projects/${id}/bails`,
    method: 'GET',
  })
}
export function addprojectsbails(id, data) {
  // 项目管理==》添加保证人列表
  // POST /projects/:projectId/bails
  return ajax({
    url: `/api/projects/${id}/bails`,
    method: 'POST',
    data
  })
}
export function unpdataprojectsbails(projectId, bailId, data) {
  // 项目管理==》修改保证人列表
  // PUT /projects/:projectId/bails/:bailId
  return ajax({
    url: `/api/projects/${projectId}/bails/${bailId}`,
    method: 'PUT',
    data
  })
}
export function delprojectsbails(projectId, bailId) {
  // 项目管理==》删除保证人列表
  // DELETE /projects/:projectId/bails/:bailId
  return ajax({
    url: `/api/projects/${projectId}/bails/${bailId}`,
    method: 'DELETE',

  })
}
