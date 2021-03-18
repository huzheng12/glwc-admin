import ajax from "@/utils/ajax.js"

export function add(id,data) {
  return ajax({
    url: `/api/finances/${id}/repayments`,
    method: 'post',
    data: data
  })

}

export function getList(id,data) {
  return ajax({
    url: `/api/finances/${id}/repayments`,
    method: 'get',
    params: data
  })

}

export function getDetail(id,progressId) {
  return ajax({
    url: `/api/finances/${id}/repayments/${progressId}`,
    method: 'get'
  })
}

export function update(id,progressId,data) {
  return ajax({
    url: `/api/finances/${id}/repayments/${progressId}`,
    method: 'PUT',
    data: data
  })
}

export function del(progressId,data) {
  return ajax({
    url: `/api/finances/${data}/repayments/${progressId}`,
    method: 'DELETE',
  })
}
