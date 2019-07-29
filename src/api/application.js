import axios from 'axios'
import { toast } from '../utils/global'

// 登录
export function login(data) {
  if (!data.username || !data.password) {
    toast("用户名或密码不能为空");
  }
  return axios.post('/user', {
    username: data.username,
    password: data.password
  })
    .then(function (res) {
      if (res.) {

      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
