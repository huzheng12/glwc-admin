import request from '@/utils/request'

export function projects(data) {
  // 项目管理==》添加单个项目
  return request({
    url: '/projects',
    method: 'post',
    data
  })
}
