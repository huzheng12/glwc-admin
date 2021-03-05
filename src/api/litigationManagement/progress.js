import ajax from "@/utils/ajax.js"

export function add(id,data) {
  return ajax({
    url: `/api/lawsuits/${id}/progresses`,
    method: 'post',
    data: data
  })

}

export function getList(id,data) {
  return ajax({
    url: `/api/lawsuits/${id}/progresses`,
    method: 'get',
    params: data
  })

}

export function getDetail(id,progressId) {
  return ajax({
    url: `/api/lawsuits/${id}/progresses/${progressId}`,
    method: 'get'
  })
}

export function update(id,progressId,data) {
  return ajax({
    url: `/api/lawsuits/${id}/progresses/${progressId}`,
    method: 'PUT',
    data: data
  })
}

export function del(progressId,data) {
  return ajax({
    url: `/api/lawsuits/${data}/progresses/${progressId}`,
    method: 'DELETE',
  })
}
