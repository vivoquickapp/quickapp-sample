Page({
  data: {},
  getProvider() {
    const provider = qa.getAccountProvider();
    qa.showModal({
      title: "当前获取的提供商：",
      content: provider
    });
  },
  getAuthorizeCode() {
    qa.accountAuthorize({
      type: "code",
      success: data => {
        qa.showModal({
          title: "handling success, code: ",
          content: data.code
        });
      },
      fail: data => {
        qa.showModal({
          title: "handling fail, errCode: ",
          content: data.errCode
        });
      }
    });
  },
  getAuthorizeToken() {
    qa.accountAuthorize({
      type: "token",
      success: data => {
        qa.showModal({
          title: "handling success, code: ",
          content: data.accessToken
        });
      },
      fail: data => {
        qa.showModal({
          title: "handling fail, errCode: ",
          content: data.errCode
        });
      }
    });
  },
  getUserInfo() {
    qa.accountAuthorize({
      type: "token",
      success: data => {
        const authorizeToken = data.accessToken;
        qa.getAccountProfile({
          token: authorizeToken,
          success: data => {
            qa.showModal({
              title: "用户信息",
              content: "nickname: " + data.nickname + " openid:" + data.openid
            });
          },
          fail: data => {
            qa.showModal({
              title: "handling fail, errCode：",
              content: data.errCode
            });
          }
        });
      },
      fail: data => {
        qa.showModal({
          title: "handling fail, errCode: ",
          content: data.errCode
        });
      }
    });
  },
  getPhoneNum() {
    qa.getAccountPhoneNumber({
      encrypt: true,
      success: data => {
        qa.showModal({
          title: "phoneNumber: ",
          content: data.phoneNumber
        });
      },
      fail: data => {
        qa.showModal({
          title: "handling fail, errCode=",
          content: data.errCode
        });
      }
    });
  },
  isAccountLogin() {
    qa.isAccountLogin({
      success: data => {
        qa.showModal({
          title: "是否登录",
          content: data.isLogin ? "已登录" : "未登录"
        });
      },
      fail: data => {
        qa.showModal({
          title: "handling fail, errCode：",
          content: data.errCode
        });
      }
    });
  }
});
