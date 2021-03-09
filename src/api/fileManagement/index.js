import ajax from "@/utils/ajax.js"

export function getList(data) {
  return ajax({
    url: `/api/folders`,
    method: 'get',
    params: data
  })

}

export function upload(data) {
  return ajax({
    url: `/api/files`,
    method: 'post',
    data:data
  })
}

export function download(id) {
  return ajax({
    url: `/api/files/${id}/downloadUrl`,
    method: 'get',
  })
}