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



export function projectslawsuitslist(projectId) {
  // 项目管理==》获取诉讼情况列表
  // GET /projects/:projectId/lawsuits
  return ajax({
    url: `/api/projects/${projectId}/lawsuits`,
    method: 'GET',

  })
}

export function addprojectslawsuits(projectId, data) {
  // 项目管理==》新增诉讼情况
  // POST /projects/:projectId/lawsuits
  return ajax({
    url: `/api/projects/${projectId}/lawsuits`,
    method: 'POST',
    data
  })
}

export function updataprojectslawsuits(projectId, lawsuitId, data) {
  // 项目管理==》编辑诉讼情况
  // PUT /projects/:projectId/lawsuits/:lawsuitId
  return ajax({
    url: `/api/projects/${projectId}/lawsuits/${lawsuitId}`,
    method: 'PUT',
    data
  })
}
export function delprojectslawsuits(projectId, lawsuitId) {
  // 项目管理==》删除诉讼情况
  //DELETE /projects/:projectId/lawsuits/:lawsuitId
  return ajax({
    url: `/api/projects/${projectId}/lawsuits/${lawsuitId}`,
    method: 'DELETE',

  })
}
export function projectsotherGuaranteeslist(projectId) {
  // 项目管理==获取其他保证列表
  //GET /projects/:projectId/otherGuarantees
  return ajax({
    url: `/api/projects/${projectId}/otherGuarantees`,
    method: 'GET',
  })
}
export function addprojectsotherGuarantees(projectId, data) {
  // 项目管理==添加其他保证
  //POST /projects/:projectId/otherGuarantees
  return ajax({
    url: `/api/projects/${projectId}/otherGuarantees`,
    method: 'POST',
    data
  })
}
export function undataprojectsotherGuarantees(projectId, id, data) {
  // 项目管理==更新其他保证
  // PUT /projects/:projectId/otherGuarantees/:id
  return ajax({
    url: `/api/projects/${projectId}/otherGuarantees/${id}`,
    method: 'PUT',
    data
  })
}
export function delprojectsotherGuarantees(projectId, id) {
  // 项目管理==删除其他保证
  // DELETE /projects/:projectId/otherGuarantees/:id
  return ajax({
    url: `/api/projects/${projectId}/otherGuarantees/${id}`,
    method: 'DELETE',

  })
}

export function projectsmortgageslist(projectId) {
  // 项目管理==获取项目抵押物列表
  // GET /projects/:projectId/mortgages
  return ajax({
    url: `/api/projects/${projectId}/mortgages`,
    method: 'GET',

  })
}

export function addprojectsmortgages(projectId, data) {
  // 项目管理==添加项目抵押物
  // POST /projects/:projectId/mortgages

  return ajax({
    url: `/api/projects/${projectId}/mortgages`,
    method: 'POST',
    data
  })
}
export function undataprojectsmortgages(projectId, mortgageId, data) {
  // 项目管理==编辑项目抵押物
  // PUT /projects/:projectId/mortgages/:mortgageId

  return ajax({
    url: `/api/projects/${projectId}/mortgages/${mortgageId}`,
    method: 'PUT',
    data
  })
}
export function delprojectsmortgages(projectId, mortgageId) {
  // 项目管理==删除项目抵押物
  // DELETE /projects/:projectId/mortgages/:mortgageId

  return ajax({
    url: `/api/projects/${projectId}/mortgages/${mortgageId}`,
    method: 'DELETE',

  })
}
export function addProPledges(projectId, data) {
  // 项目管理==新增项目质押物
  // POST /projects/:projectId/pledges
  return ajax({
    url: `/api/projects/${projectId}/pledges`,
    method: 'POST',
    data
  })
}
export function proPledgesList(projectId) {
  // 项目管理==获取项目质押物列表
  // GET /projects/:projectId/pledges
  return ajax({
    url: `/api/projects/${projectId}/pledges`,
    method: 'GET',

  })
}
export function updProPledges(projectId, pledgeId, data) {
  // 项目管理==修改项目质押物列表
  //PUT /projects/:projectId/pledges/:pledgeId
  return ajax({
    url: `/api/projects/${projectId}/pledges/${pledgeId}`,
    method: 'PUT',
    data
  })
}
export function delProPledges(projectId, pledgeId) {
  // 项目管理==删除项目质押物列表
  //DELETE /projects/:projectId/pledges/:pledgeId
  return ajax({
    url: `/api/projects/${projectId}/pledges/${pledgeId}`,
    method: 'DELETE',

  })
}
