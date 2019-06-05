import request from 'utils/request';

export function getPostsAPI() {
  return request.get('v1/posts?limit=100');
}

export function postPostsAPI(payload) {
  const formData = new FormData();
  formData.set('title', payload.title);
  formData.set('text', payload.text);
  payload.file && formData.set('photo', payload.file);

  return request.post('v1/posts', formData);
}
