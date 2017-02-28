class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <div className="neo-footer">
        <div className="neo-footer-links">
          <a href="//digitalocean.com">DigitalOcean</a>
          <a href="//aliyun.com">阿里云主机</a>
          <a href="//wanwang.aliyun.com">中国万网</a>
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