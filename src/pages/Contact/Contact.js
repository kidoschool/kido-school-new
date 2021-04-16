import React from 'react';
import ContactBanner from '../../assets/Contact-banner.jpg';
import RelatedCenters from "../../components/RelatedCenters";

function Contact(props) {
  

  return(
    <>
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={ContactBanner} className="img-fluid w-100" alt="contact-banner"/>
       </div>
      </div>
    </section>

    <section className="contact-text py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
          <h1>聊聊吧！</h1>
            <div className="contact-para pt-3">
                <p>您有兴趣了解更多吗？随时与我们联系。</p>
                <p>只需选择您感兴趣的学前班并填写表格即可直接向我们的团队发送消息</p>
                <p>如果您有兴趣与我们合作，请选择人员团队，如果还有其他疑问，请选择一般咨询。谢谢！</p>
            </div>
          </div>
       </div>
      </div>
    </section>

    <section className="contact-form py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="c-form">
              <form className="contact-form" id="validateform">
                <div className="row">
                    <div className="form-group col-lg-12">
                        <label htmlFor="select-team">请选择您要联系的团队*</label>
                        <select className="form-control" name="select_team" id="select_team" >
                            <option Value="">选择团队</option>
                            <option value="People Team">人队</option>
                            <option value="General Enquiries">通用查询</option>
                            <option value="Unites States (Houston) - Rice Village Preschool">美国（休斯顿）-赖斯村学前班</option>
                            <option value="Unites States (Austin) - River Place Preschool">美国（奥斯汀）-河坊幼儿园</option>
                            <option value="United Kingdom (London) - Camden Nursery &amp; Preschool">英国（伦敦）-卡姆登幼儿园和学前班</option>
                            <option value="United Kingdom (London) - Chiswick Nursery &amp; Preschool">英国（伦敦）-奇斯威克幼儿园与学龄前儿童</option>
                            <option value="United Kingdom (London) - Clerkenwell Nursery &amp; Preschool">英国（伦敦）-克莱肯韦尔幼儿园与学龄前儿童</option>
                            <option value="United Kingdom (London) - Crouch End Nursery &amp; Preschool">英国（伦敦）-克劳奇幼儿园和学前班</option>
                            <option value="United Kingdom (London) - Golders Green Nursery &amp; Preschool">英国（伦敦）-戈德斯绿色幼儿园和幼儿园</option>
                            <option value="United Kingdom (London) - Wandsworth Nursery &amp; Preschool">英国（伦敦）-Wandsworth苗圃和学前班</option>
                            <option value="United Kingdom (London) - Windsor Nursery &amp; Preschool">英国（伦敦）-温莎幼儿园和学前班</option>
                            <option value="United Kingdom (London) - Greenwich Nursery and Preschool">英国（伦敦）-格林威治幼儿园和学前班</option>
                            <option value="Dubai (Kido Meydan)">迪拜（基多（Kido Meydan））</option>
                            <option value="Dubai (Kido Sheikh Zayed Road)">迪拜（基多谢赫·扎耶德路）</option>
                            <option value="Dubai (Kido JBR)">迪拜（Kido JBR）</option>
                            <option value="Hong Kong - Pok Fu Lam">香港-薄扶林</option>
                            <option value="Hong Kong - Repulse Bay">香港-浅水湾</option>
                        </select>                    
                        </div>
                    <div className="form-group col-lg-12 pt-3">
                        <label htmlFor="select-country">请选择你的国家 *</label>
                        <select className="form-control" name="select_country" id="select_country">
                          <option Value="">选择国家</option>
                          <option value="United Kingdom">英国</option>
                          <option value="USA">美国</option>
                          <option value="Hong Kong">香港</option>
                          <option value="UAE">阿联酋</option>
                          <option value="India">印度</option>    
                        </select>                
                      </div>
                    <div className="form-group col-lg-12 pt-3">
                        <label htmlFor="name">全名 *</label>
                        <input id="name" type="text" name="name" className="form-control" placeholder="输入您的全名" required/>
                    </div>
                    <div className="form-group col-lg-6 pt-3">
                        <label htmlFor="email">电子邮件 *</label>
                        <input id="email" type="text" name="email" className="form-control" placeholder="输入您的电子邮件地址" required/>
                    </div>
                    <div className="form-group col-lg-6 pt-3">
                        <label htmlFor="phone">电话 *</label>
                        <input id="phone" type="text" name="phone" className="form-control" placeholder="输入你的电话号码" required/>
                    </div>
                    <div className="form-group col-lg-12 pt-3">
                        <label htmlFor="message">你是怎么找到我们的？*</label>
                        <select className="form-control" name="find_out" id="find_out">
                            <option Value="">请选择</option>
                            <option value="Advertisement (print ads, outdoor ads, tv ads etc.)">广告（平面广告，户外广告，电视广告等）</option>
                            <option value="Friend or colleague">朋友或同事</option>
                            <option value="Event">事件</option>
                            <option value="Social Media (Facebook, Twitter, YouTube etc.)">社交媒体（Facebook，Twitter，YouTube等）</option>
                            <option value="Web search (Google, Bing, Yahoo etc.)">网络搜索（Google，Bing，Yahoo等）</option>    
                        </select>
                    </div>
                    <div className="form-group col-lg-12 pt-3">
                        <label htmlFor="message">信息 *</label>
                        <textarea id="message" type="text" name="message" className="form-control" placeholder="输入您的留言"></textarea>
                    </div>
                    <div className="form-group col-lg-12 pt-3">
                    <label htmlFor="tcheck">同意</label>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" name="tcheck" id="tcheck"/>
                      <label class="form-check-label" for="tcheck"><small>是的，我想收到相关的营销材料。我可以随时通过privacy@kido.school退出。</small></label>
                    </div>
                    </div>
                    <div className="form-group col-lg-4 pt-3">
                        <button type="submit" name="submit" className="btn btn-outline-primary w-100">提交</button>
                    </div>
                </div>
                {/* {thankuMessage ? <span className="text-success text-center my-2">"Thank you for making Appointment!"</span> : null} */}
            </form>
            </div>
          </div>
       </div>
      </div>
    </section>

    
      <section className="related_centers bg-light py-5" id="related-centers">
        <div className="container">
          <h4 className="basics-subtitle text-align-left pb-3">您可能喜欢的其他中心</h4>
          <div className="find-our-centers row">
            <div className="col-lg-12">
                <RelatedCenters/>
          </div>
        </div>
        </div>
      </section>







    </>
  );

  

}

export default Contact;
