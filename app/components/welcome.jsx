import React from 'react';

export default class Welcome extends React.Component {
    render() {
        return (
<div> 
    <div className= "divHeight">

    <div className="mr_container ">
        <div>
            <input type="text " className="mr_input dummy_input " />
        </div>
        <div className="resume_container ">
            <div className="site_links_wrap ">
                <span className="my_res_link">
                    <button className=" brand_btn br_btn ">Clean Resume</button>
                </span>
                <div className="site_links ">
                    <a
                        target="_blank "
                        href="https://docs.google.com/document/d/1AT8qlITItP4dHbxeGhB8px-FT-wTBQAp5-E0QUJqtLw "
                        className="linksy ">About</a><br/>
                    <a target="_blank " href="https://www.resyum.com/sample " className="linksy ">Sample</a><br/>
                    <a target="_blank " href="googleform.html " className="linksy ">Feedback</a>
                </div>
                <span className="linksy">Login</span>
                <span className="linksy">Logout</span>
            </div>
            <div className="resume_outer_wrap ">
                <div></div>
                <div></div>
                <div className="row mr_row "></div>
            </div>
        </div>
    </div>
</div> 
</div>);
    }
}