import ajax from "@/utils/ajax.js"

export function add(data) {
  return ajax({
    url: `/api/lawsuits`,
    method: 'post',
    data: data
  })

}

export function getList(data) {
  return ajax({
    url: `/api/lawsuits`,
    method: 'get',
    params: data
  })

}

export function getDetail(id) {
  return ajax({
    url: `/api/lawsuits/${id}`,
    method: 'get'
  })
}

export function update(id,data) {
  return ajax({
    url: `/api/lawsuits/${id}`,
    method: 'PUT',
    data: data
  })
}

export function del(data) {
  return ajax({
    url: `/api/lawsuits/${data}`,
    method: 'DELETE',
  })
}
