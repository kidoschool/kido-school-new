import React from 'react';
import programBanner from '../../assets/Our-Programs-banner.jpg';
import programCard1 from '../../assets/programs-card-img1.jpg';
import programCard2 from '../../assets/programs-card-img2.jpg';
import programCard3 from '../../assets/programs-card-img3.jpg';
import programCard4 from '../../assets/programs-card-img4.jpg';
import programCard5 from '../../assets/programs-card-img5.jpg';
import programCard6 from '../../assets/programs-card-img6.jpg';
import programIcon1 from '../../assets/programs-icon1.svg';
import programIcon2 from '../../assets/programs-icon2.svg';


function OurPrograms(props) {

  return(
    <>
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <img src={programBanner} className="img-fluid w-100" alt="contact-banner"/>
       </div>
      </div>
    </section>

    <section className="days-at-kido pt-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>奇道的日子</h1>
            <p className="description pt-3">我们的国际专家团队创建了一套综合的教学法，称为“Kïdo早期计划”。这个创新的系统融合了蒙台梭利，雷焦艾米利亚和多元智能理论等世界各地的教学哲学的最佳实践。结果是一种基于游戏的学习体验，将儿童和老师主导的活动与鼓舞人心的环境中的自由且结构化的游戏结合在一起。该程序是针对每个孩子的发育能力而定制的。我们会针对所运营的每个国家/地区修改课程设置，以遵守其现有的国家课程框架。在英国，对Kïdo课程进行了修改，以符合EYFS框架。</p>
          </div>
       </div>
      </div>
    </section> 


    <section className="who-we-teach pt-5">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1>我们教谁</h1>
            <div className="who-we-teach-para pt-3">
                <p>我们的程序分为六个级别。虽然每个级别都大致对应于一个年龄组，但实际上，我们通常会在认为孩子准备好后将他们转移到下一个级别。在英国，对Kïdo课程进行了修改以符合EYFS框架，并且未提供此处列出的所有要素。</p>
            </div>

            <div className="row pt-5">
              <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard1} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center">
                    <h3 className="card-title">发现者</h3>
                    <a type="button" data-toggle="modal" data-target="#exampleModalCenter">
                      <small className="text-info pl-2"><i className="fas fa-info-circle"></i></small>
                    </a>
                    </div>
                    <hr/>
                    <p className="card-text">年龄段 &nbsp;|&nbsp; <strong>6至15个月</strong></p>
                  </div>
                  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">发现者</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>在奇道，您的孩子的旅程从六周大开始。我们通过免费和引导游戏，艺术和音乐以及凌乱游戏的结合来发展他们的核心认知，情感和社交技能。我们的身体发展计划有助于提高他们的运动技能，同时通过互动学习，歌曲和社交圈时间来提高他们的自信心和社交技能。孩子们会以适合他们个人的速率发现数字，语音，形状，声音和颜色的基本概念。我们训练有素的员工在决定用餐和午睡时间时会与每个家庭进行协调，以确保从学校到家庭的平稳过渡，反之亦然。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard2} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center">
                      <h3 className="card-title">冒险家</h3>
                      <a type="button" data-toggle="modal" data-target="#exampleModalCenter2">
                        <small className="text-info pl-2"><i className="fas fa-info-circle"></i></small>
                      </a>
                    </div>
                    <hr/>
                    <p className="card-text">年龄段 &nbsp;|&nbsp; <strong>12至27个月</strong></p>
                  </div>
                   <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">冒险家</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>我们的冒险者计划会在您的孩子走路时立即开始，通常会在两岁时结束，尽管孩子可以在准备就绪后立即进入下一阶段。冒险者在我们课程的所有开发领域中建立信心和技能，他们的一周分为三个技能日和两个探索者日。在“技能日”上，冒险家将学习数学，识字，科学，艺术等内容，作为他们发展的一部分。在“探索者日”中，冒险家通过一个跨学科的项目（每个项目持续六个星期）进行工作，使他们获得新的技能，知识和理解。我们还开始在Adventurers上厕所训练，并与每个家庭进行咨询，以创建一个过程来帮助他们的孩子，同时让他们感到安全和在家。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard3} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center">
                      <h3 className="card-title">实验者</h3>
                      <a type="button" data-toggle="modal" data-target="#exampleModalCenter3">
                        <small className="text-info pl-2"><i className="fas fa-info-circle"></i></small>
                      </a>
                    </div>
                    <hr/>
                    <p className="card-text">年龄段 &nbsp;|&nbsp; <strong>24-39个月</strong></p>
                  </div>
                   <div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">实验者</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>我们全面了解每个孩子的理想学习环境，并使用这些知识为其创建量身定制的教学计划。这些个性化的体验有助于他们变得更有创造力，并激发他们从小就热爱学习。在四岁的时候，我们的学生应该在学前（或更高）水平上学习数学和英语，到五岁时达到1年级（美国通用核心）或1年级（英国国家课程）的水平。在此过程中，我们还将通过应用程序，摄影，视频编辑，编写故事等内容来引入编码。周分为三个“技能日”和两个“资源管理器日”。每天都会进行室内和室外的表演，舞蹈，音乐和瑜伽。儿童通常从两岁开始上学前班（尽管有些可能会更早开始），并一直持续到六岁到我们的四个阶段：</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard4} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center">
                      <h3 className="card-title">探路者</h3>
                      <a type="button" data-toggle="modal" data-target="#exampleModalCenter4">
                        <small className="text-info pl-2"><i className="fas fa-info-circle"></i></small>
                      </a>
                    </div>
                    <hr/>
                    <p className="card-text">年龄段 &nbsp;|&nbsp; <strong>61-51个月</strong></p>
                  </div>
                   <div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">探路者</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>我们全面了解每个孩子的理想学习环境，并使用这些知识为其创建量身定制的教学计划。这些个性化的体验有助于他们变得更有创造力，并激发他们从小就热爱学习。在四岁的时候，我们的学生应该在学前（或更高）水平上学习数学和英语，到五岁时达到1年级（美国通用核心）或1年级（英国国家课程）的水平。在此过程中，我们还将通过应用程序，摄影，视频编辑，编写故事等内容来引入编码。周分为三个“技能日”和两个“资源管理器日”。每天都会进行室内和室外的表演，舞蹈，音乐和瑜伽。儿童通常从两岁开始上学前班（尽管有些可能会更早开始），并一直持续到六岁到我们的四个阶段：</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard5} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center">
                        <h3 className="card-title">寻求者</h3>
                        <a type="button" data-toggle="modal" data-target="#exampleModalCenter5">
                          <small className="text-info pl-2"><i className="fas fa-info-circle"></i></small>
                        </a>
                    </div>
                    <hr/>
                    <p className="card-text">年龄段 &nbsp;|&nbsp; <strong>48-63个月</strong></p>
                  </div>
                   <div class="modal fade" id="exampleModalCenter5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">寻求者</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>我们全面了解每个孩子的理想学习环境，并使用这些知识为其创建量身定制的教学计划。这些个性化的体验有助于他们变得更有创造力，并激发他们从小就热爱学习。在四岁的时候，我们的学生应该在学前（或更高）水平上学习数学和英语，到五岁时达到1年级（美国通用核心）或1年级（英国国家课程）的水平。在此过程中，我们还将通过应用程序，摄影，视频编辑，编写故事等内容来引入编码。周分为三个“技能日”和两个“资源管理器日”。每天都会进行室内和室外的表演，舞蹈，音乐和瑜伽。儿童通常从两岁开始上学前班（尽管有些可能会更早开始），并一直持续到六岁到我们的四个阶段：</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  py-4">
                <div className="card">
                  <img className="card-img-top-khome img-fluid" src={programCard6} alt="kido highlights"/>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center">
                      <h3 className="card-title">先驱者</h3>
                      <a type="button" data-toggle="modal" data-target="#exampleModalCenter7">
                        <small className="text-info pl-2"><i className="fas fa-info-circle"></i></small>
                      </a>
                    </div>
                    <hr/>
                    <p className="card-text">年龄段 &nbsp;|&nbsp; <strong>60-75个月</strong></p>
                  </div>
                   <div class="modal fade" id="exampleModalCenter7" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">先驱者</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>我们全面了解每个孩子的理想学习环境，并使用这些知识为其创建量身定制的教学计划。这些个性化的体验有助于他们变得更有创造力，并激发他们从小就热爱学习。在四岁的时候，我们的学生应该在学前（或更高）水平上学习数学和英语，到五岁时达到1年级（美国通用核心）或1年级（英国国家课程）的水平。在此过程中，我们还将通过应用程序，摄影，视频编辑，编写故事等内容来引入编码。周分为三个“技能日”和两个“资源管理器日”。每天都会进行室内和室外的表演，舞蹈，音乐和瑜伽。儿童通常从两岁开始上学前班（尽管有些可能会更早开始），并一直持续到六岁到我们的四个阶段：</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


    <section className="how-we-teach pt-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>我们如何教学</h1>
            <p className="description pt-3">我们将学年分为六个周期，每个周期持续六周。在每个周期的末尾，将为父母提供孩子工作的档案。在英国，对Kïdo课程进行了修改以符合EYFS框架，并且未提供此处列出的所有要素。发现者享受自己的专用学习系统。对于其他级别，周分为两种不同的日期类型：</p>
                <div className="row justify-content-center pt-4">
                  <div className="col-lg-6">
                    <div className="we-teach-data bg-light border p-4">
                        <img src={programIcon1} className="img-fluid" width="50"/>
                        <h3 className="teact-head pt-4 pb-2">技能天数</h3>
                        <p>这些天致力于我们在数学，读写能力，STEM，艺术等领域的专有计划。我们为每个活动使用不同的学习站，并将感官游戏，指导性学习和练习册活动结合在一起。</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="we-teach-data bg-light border p-4">
                        <img src={programIcon2} className="img-fluid" width="50"/>
                        <h3 className="teact-head pt-4 pb-2">探索者日</h3>
                        <p>儿童应对成人主导的项目，基于问题和探究的学习计划，这些计划整合了他们在技能日期间学到的知识。在六个星期的过程中，孩子们将通过手工艺品，数学，科学，识字或音乐相关活动开发一个项目。</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section> 


    <section className="what-we-teach py-5">
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10">
            <h1>我们教什么</h1>
            <p className="description pt-3">找出您的小孩子将在我们的学校学习什么。我们的大多数学习中心都使用我们专有的课程KEYS。在没有KEYS的地区，我们按照相关的国家框架教授同等的课程。</p>

            <div className="row justify-content-center pt-4">
                  <div className="col-lg-6">
                  <div className="accordion" id="accordionExample">
                    <div className="card1">
                      <div className="card-header card-header1" id="headingOne">
                        <h2 className="card-text mb-0">
                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          工作室K
                          </button>
                        </h2>
                        <p className="px-3">艺术是我们课程的核心部分</p>
                      </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">艺术是我们课程的核心部分。我们的艺术活动可促进自我表达，并帮助建立自信，运动技能和想象力</li>
                            <li className="what-we-teach-list pb-3">每所学校都设有工作室-一个创意的空间，孩子们可以在这里进行实验和表达自己的见解</li>
                            <li className="what-we-teach-list pb-3">孩子们喜欢我们的老师或特别嘉宾贡献的活动</li>
                            <li className="what-we-teach-list pb-3">我们带孩子们去有趣的艺术博物馆之旅和适合年龄的展览</li>
                        </ul>
                      </div>
                    </div>
                  </div><hr/>
                  <div className="card1">
                    <div className="card-header card-header1" id="headingTwo">
                      <h2 className="card-text mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        斯科尔
                        </button>
                      </h2>
                      <p className="px-3">我们的独家英语和扫盲计划</p>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">我们利用儿童文学来唤起学生对学习的热爱。</li>
                            <li className="what-we-teach-list pb-3">我们鼓励好奇心，这有助于开发课堂内外的学习工具。</li>
                            <li className="what-we-teach-list pb-3">孩子们给className小小的演讲，以提高他们的自信心。</li>
                            <li className="what-we-teach-list pb-3">我们为孩子们进行小规模的写作活动，以便他们开始写他们知道的声音，这是他们书写完整单词和短语的第一步。</li>
                        </ul>
                      </div>
                    </div>
                  </div><hr/>
                  <div className="card1">
                    <div className="card-header card-header1" id="headingThree">
                      <h2 className="card-text mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        健身房
                        </button>
                      </h2>
                      <p className="px-3">我们通过K-Gym鼓励健康快乐的学生</p>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">在我们的员工或客座专家的配合下，我们提供一系列有趣的，结构化的活动。</li>
                            <li className="what-we-teach-list pb-3">孩子们通过舞蹈课发展自己的运动技能。</li>
                            <li className="what-we-teach-list pb-3">孩子们参加团队运动和体操运动，以帮助他们建立协调和平衡。</li>
                            <li className="what-we-teach-list pb-3">每天分为三部分：热身（例如角色扮演或跳舞游戏），主要活动（例如障碍课程或体操课）和冷静（例如瑜伽或冥想）。</li>
                        </ul>
                      </div>
                    </div>
                  </div><hr/>
                  <div className="card1">
                    <div className="card-header card-header1" id="headingFour">
                      <h2 className="card-text mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        阿拉伯
                        </button>
                      </h2>
                      <p className="px-3">我们的阿拉伯语计划是迪拜所有年龄段的Kido早期计划的组成部分。</p>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">白天的阿拉伯语时间（半天课程每天30-45分钟，扩展天课程每天90分钟）在结构上反映了英语课程。</li>
                            <li className="what-we-teach-list pb-3">然后，在阿拉伯语时期使用英语课程中使用的故事，因此孩子们可以将语言进行上下文化并更快地学习。</li>
                            <li className="what-we-teach-list pb-3">通过进行社交活动，例如点心时间，午餐时间或部分免费游戏时间，也将重点放在发展阿拉伯语的社交技巧上。</li>
                            <li className="what-we-teach-list pb-3">和我们的主要课程一样，孩子们在阿拉伯语中从一个层次前进到另一个层次。</li>
                            <li className="what-we-teach-list pb-3">这些课程包括阅读，写作和口语方面的进一步练习；阿拉伯语的公共演讲和建立信任模块；阿拉伯语的数学教学，以及以阿拉伯语进行的促进社交和情感发展的游戏和活动。</li>
                            <li className="what-we-teach-list pb-3">迪拜的所有Kido中心都将阿拉伯语融入了该计划。年龄段：3岁以上</li>
                        </ul>
                      </div>
                    </div>
                  </div><hr/>
                  <div className="card1">
                    <div className="card-header card-header1" id="headingFIve">
                      <h2 className="card-text mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        双语西班牙语
                        </button>
                      </h2>
                      <p className="px-3">在我们得克萨斯州的学校有双语经验。</p>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                      <div className="card-body  bg-light">
                        <ul className="">
                            <li className="what-we-teach-list pb-3">在我们德克萨斯州的所有学校中，我们的英语课程都以西班牙语为镜像。孩子们不仅会说，读和写该语言，而且还在数学，美术和STEM活动中使用它</li>
                            <li className="what-we-teach-list pb-3">最重要的是，社交时间也用西班牙语进行，以鼓励社交场合的口语流利度。</li>
                            <li className="what-we-teach-list pb-3">中心：莱斯村-休斯顿，河坊-奥斯汀年龄组：6周至5年</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="accordion" id="accordionExample">
                        <div className="card1">
                          <div className="card-header card-header1" id="headingOne1">
                            <h2 className="card-text mb-0">
                              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                K-STEM
                              </button>
                            </h2>
                            <p className="px-3">我们如何整合科学，技术和编码</p>
                          </div>
                        <div id="collapseOne1" className="collapse" aria-labelledby="headingOne1" data-parent="#accordionExample">
                          <div className="card-body  bg-light">
                            <ul className="">
                                <li className="what-we-teach-list pb-3">我们通过有趣的活动（例如，将积木或东西粘在一起）来发展学生的手眼协调能力。</li>
                                <li className="what-we-teach-list pb-3">我们通过简单而有趣的挑战帮助学生了解特定工具和材料的功能。</li>
                                <li className="what-we-teach-list pb-3">我们使用计算机技术来提高素养和词汇量。</li>
                                <li className="what-we-teach-list pb-3">我们为学生提供解决问题的任务，需要团队合作来克服，并教会他们如何评估情况。</li>
                            </ul>
                          </div>
                        </div>
                      </div><hr/>
                      <div className="card1">
                        <div className="card-header card-header1" id="headingTwo2">
                          <h2 className="card-text mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                            K数学
                            </button>
                          </h2>
                          <p className="px-3">一种有趣而有趣的学习数学的方式</p>
                        </div>
                        <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#accordionExample">
                          <div className="card-body  bg-light">
                            <ul className="">
                                <li className="what-we-teach-list pb-3">我们从小就向孩子们介绍数学概念，并通过他们的水平反复对他们进行复习。</li>
                                <li className="what-we-teach-list pb-3">孩子们喜欢数学挑战和游戏，旨在保持他们的参与和动力。</li>
                                <li className="what-we-teach-list pb-3">随着儿童的进步，挑战逐渐变得越来越复杂。</li>
                                <li className="what-we-teach-list pb-3">我们的活动使孩子们将数学应用到日常生活中。</li>
                            </ul>
                          </div>
                        </div>
                      </div><hr/>
                      <div className="card1">
                        <div className="card-header card-header1" id="headingThree3">
                          <h2 className="card-text mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                            语言能力
                            </button>
                          </h2>
                          <p className="px-3">我们的许多学校都实行双语课程。</p>
                        </div>
                        <div id="collapseThree3" className="collapse" aria-labelledby="headingThree3" data-parent="#accordionExample">
                          <div className="card-body  bg-light">
                            <ul className="">
                                <li className="what-we-teach-list pb-3">我们鼓励我们的孩子与英语和西班牙语建立牢固的关系。</li>
                                <li className="what-we-teach-list pb-3">首先，我们课程的80％用西班牙语授课，而20％用英语授课。</li>
                                <li className="what-we-teach-list pb-3">从两岁起，这将过渡为50/50双语课程。</li>
                                <li className="what-we-teach-list pb-3">我们使用动手，以游戏为基础的探索性活动来增强他们的沟通技巧。</li>
                            </ul>
                          </div>
                        </div>
                      </div><hr/>
                      <div className="card1">
                        <div className="card-header card-header1" id="headingFour4">
                          <h2 className="card-text mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4">
                            双语普通话
                            </button>
                          </h2>
                          <p className="px-3">我们提供完全双语的计划，始终有一名英语老师和一名普通话老师在场。</p>
                        </div>
                        <div id="collapseFour4" className="collapse" aria-labelledby="headingFour4" data-parent="#accordionExample">
                          <div className="card-body  bg-light">
                            <ul className="">
                                <li className="what-we-teach-list pb-3">普通话以母语授课，即使非母语人士也可以在上小学时提高普通话水平。</li>
                                <li className="what-we-teach-list pb-3">孩子们可以通过各种活动来学习，例如：讲故事的时间，富有想象力的游戏，手工艺品，科学，协作游戏以及由老师领导的专注时间，这些时间可以建立词汇和语言。</li>
                                <li className="what-we-teach-list pb-3">我们提供延长的普通话沉浸时间，通过社交互动，自由活动，零食时间和重点突出的课程，为进一步发展儿童的普通话技能提供了多种机会。</li>
                                <li className="what-we-teach-list pb-3">中心：我们在香港的所有Kido中心都完全双语。年龄段：3岁以上</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>

       </div>
      </div>
    </section> 
  
    </>
  );

  

} 

export default OurPrograms;
