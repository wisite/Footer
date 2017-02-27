class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <div className="neo-footer">
        <div className="neo-footer-links">
          <a href="#">官方微博</a>
          <a href="#">微信公众号</a>
          <a href="#">友情连接1</a>
          <a href="#">友情连接2</a>
        </div>
        <div className="neo-footer-pic">
          <img src="images/wechat.png" />
          <span>扫描二维码加好友</span>
        </div>
        <div className="neo-footer-copy">版权所有&copy;{`2014-${year}`} E站工作室</div>
      </div>
    );
  }
}

export default Footer;