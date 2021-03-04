import ajax from "@/utils/ajax.js"

export function add(data) {
  return ajax({
    url: `/api/lawsuits`,
    method: 'post',
    params: data
  })

}

export function getList(data) {
  return ajax({
    url: `/api/lawsuits`,
    method: 'get',
    params: data
  })

}

export function getDetail(data) {
  return ajax({
    url: `/api/lawsuits/${data}`,
    method: 'get'
  })
}

export function update(data) {
  return ajax({
    url: `/api/lawsuits/${data}`,
    method: 'put',
    params: data
  })
}

export function del(data) {
  return ajax({
    url: `/api/lawsuits/${data}`,
    method: 'delete',
  })
}
