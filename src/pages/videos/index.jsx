import React from 'react'
import video from '../../../public/video/video-chat.mp4'


export default function Videos() {
    return (
        <>
            <div className="App">
                <p>hello</p>
                <video width="750" height="500" controls >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </>
    )
}
