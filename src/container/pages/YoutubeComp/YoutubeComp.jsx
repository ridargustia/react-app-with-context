//TODO LIBRARY
import React, {Component, Fragment} from "react";

//TODO PAGES
import VideoComp from '../../../component/VideoThumbComponent/VideoThumbComponent';

class YoutubeComp extends Component{
    render(){
        return(
            <Fragment>
                <p className="section-title">Youtube</p>
                <VideoComp
                    time="8.56"
                    title="Latian Pemrograman React JS"
                    desc="320x ditonton. 2 hari yang lalu"/>
                <VideoComp
                    time="17.22"
                    title="Tutorial Express JS"
                    desc="821x ditonton. 3 menit yang lalu"/>
                <VideoComp
                    time="5.34"
                    title="PODCAST - Sisi Lain Pemrograman"
                    desc="2.3k ditonton. 3 jam yang lalu"/>
                <VideoComp
                    time="6.02"
                    title="How Many Create Website With React JS"
                    desc="509x ditonton. 2 menit yang lalu"/>
                <VideoComp />
            </Fragment>
        )
    }
}

export default YoutubeComp;