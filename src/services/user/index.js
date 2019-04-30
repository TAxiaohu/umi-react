import request from '@/utils/request';

export async function queryCurrentUser() {
  return request('/api/user/currentUser');
}