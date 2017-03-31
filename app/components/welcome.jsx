import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return (
      <div style="height:100%;" className="ng-scope">
        <div className="mr_container ng-scope">
          <div className="ng-scope">
            <input type="text" className="mr_input dummy_input" style="display: none;"/>
              </div>
              <div className="resume_container">
                <div className="site_links_wrap"><span className="my_res_link">
                  <button className=" brand_btn br_btn">Clean Resume</button></span>
                  <div className="site_links"><a target="_blank" href="https://docs.google.com/document/d/1AT8qlITItP4dHbxeGhB8px-FT-wTBQAp5-E0QUJqtLw" className="linksy">About</a><br><a target="_blank" href="https://www.resyum.com/sample" className="linksy">Sample</a></br>
                    <a target="_blank" href="googleform.html" className="linksy">Feedback</a>
                        </div><span style="cursor:pointer" className="linksy" ng-hide="__userData.is_logged_in == 1" ng-click="showModal('login')">Login</span><span className="linksy" style="cursor:pointer" ng-show="__userData.is_logged_in == 1" ng-click="logoutUser()"
                      className="ng-hide">Logout</span></div>
                    <div className="resume_outer_wrap">
                      <div style="text-align:center;width:100%;">
                        <div ng-hide="enableEdit" resume-view-directive="" enable-edit="enableEdit" resume-view-data="resumeViewData" show-edit="showEdit" className="ng-isolate-scope ng-hide">
                          <div style="text-align:right;height:43px margin-bottom:-1px;"></div>
                          <div className="resume_view_content_wrap">
                            <div className="resume_content">
                              <div style="max-width:600px;margin:0 auto">
                                <div className="row mr_row">
                                  <div className="col-sm-12 mr_col">
                                    <div className="name_input ng-binding"></div>
                                  </div>
                                </div>
                                </div>
                                );
  }
}

