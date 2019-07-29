import { Toast } from 'vant'

// 普通提示
export function toast(msg) {
  return Toast({
    message: msg,
    duration: 1500
  });
}

// 登录验证表单
export function loginInputVerify(data) {
  if (!data.username || !data.password) {
    toast("请输入用户名或密码");
    return false;
  }
  return true;
}

// 注册验证表单
export function registerInputVerify(data) {
  if (!data.username) {
    toast("用户名不能为空");
    return false;
  }
  if (data.username.length > 10) {
    toast("用户名太长了");
    return false;
  }
  if (!data.password) {
    toast("密码不能为空");
    return false;
  }
  if ((data.password.length < 6 || data.password.length > 18)) {
    toast("请设置密码长度为6-18个字符");
    return false;
  }
  if (!data.repassword) {
    toast("二次密码不能为空");
    return false;
  }
  if (data.repassword !== data.password) {
    toast("二次密码不一致");
    return false;
  }

  return true;
}
