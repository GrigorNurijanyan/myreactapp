
import React, { useEffect, useRef } from 'react';
import dashjs from 'dashjs';

const Player = () => {

    const videoRef = useRef(null);

    // useEffect(() => {
    //     const videoElement = videoRef.current;

    //     if (!videoElement) return;


    //     const player = dashjs.MediaPlayer().create();
    //     // player.initialize(videoElement, mpdUrl, true);
    //     player.initialize(videoElement, 'https://kinodaran.com/eefc3e5e-93e8-4cf0-a52f-6e9add29663b', true);

    //     return () => {
    //         player.reset();
    //     };
    // }, []);

    useEffect(() => {
        // for (let index = 0; index < 40; index++) {
        //     let id = 15835 + index
        //     const url = `https://cdn.kinodaran.com/MEDIA/1/TV_SHOW/819/${id}/STREAM/DASH/playlist.mpd`;
        //     const proxyUrl = "https://cors-anywhere.herokuapp.com/";

        //     const headers = new Headers({
        //         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        //         "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXJhcGV0eWFuMTk5N0BtYWlsLnJ1IiwiZXhwIjoxNzAzMDczNTU3LCJkZXZpY2UiOiJXRUJfQ0hST01FIiwiaWF0IjoxNzAyOTg3MTU3LCJqdGkiOjIyMTV9.2DmE2NLwmy5WwVV03ViGOvxYw2G3tlzNwgI1Sk01Vm631_KgV7_zqg96WJJgejlmNeY_PELsf_WABciB6CmOfw",
        //         "Accept": 'application/json, text/plain, */*',
        //         "Origin": "https://kinodaran.com",
        //         "Referer": "https://kinodaran.com",
        //         "Access-Control-Allow-Origin": '*'
        //     });

        //     fetch(url, { headers, mode: 'no-cors' })
        //         .then(response => {
        //             console.log("_________response", response)
        //             if (!response.ok) {
        //                 throw new Error(`_____HTTP error! Status: ${response.status}`);
        //             }
        //             return response.text();
        //         })
        //         .then(data => {
        //             // Handle the response data
        //             console.log("_____Content:", data);
        //         })
        //         .catch(error => {
        //             // Handle errors
        //             console.error("___Error:", error);
        //         });
        // }
        // for (let index = 0; index < 40; index++) {
        // let id = 15835 + index

        // const headers = new Headers({
        //     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        //     "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXJhcGV0eWFuMTk5N0BtYWlsLnJ1IiwiZXhwIjoxNzA1NTc5MTU3LCJkZXZpY2UiOiJXRUJfQ0hST01FIiwiaWF0IjoxNzAyOTg3MTU3LCJqdGkiOjIyMTV9.VLH4fXur1i3K0CBiRq9s8jGNmrTdcNfKyVFWVtGSEw4osFmf3gDK-6qxPjzp_f6reXIXL2gmXhSroYpgLByOPQ",
        //     "Accept": '*/*',
        //     "Origin": "https://kinodaran.com",
        //     "Referer": "https://kinodaran.com",
        //     "Access-Control-Allow-Origin": 'https://kinodaran.com, http://localhost:3000'
        // });

        // fetch(url)
        //     .then(response => {
        //         console.log("-------->res")
        //         return response
        //     }).then((data) => {
        //         console.log("_______data", data.body)
        //     });
        // .then(res => res.json().then(result => console.log(result)).catch(err => console.log('err ====>', err)));
        // }
        const url = `https://cdn.kinodaran.com/MEDIA/1/TV_SHOW/819/15658/STREAM/DASH/playlist_854x480_29_99fps_1.0mbps.mp4`;

        const fill = async () => {
            const res = await fetch(url, {
                method: 'GET',
            });

            const blob = await res.blob();
            const newBlob = new Blob([blob], { type: 'video/mp4' });

            const blobUrl = window.URL.createObjectURL(newBlob);

            const link = document.createElement('a');
            link.href = blobUrl;
            console.log("_______blobUrl", blobUrl)
            link.setAttribute('download', `555555555555`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);

            // clean up Url
            window.URL.revokeObjectURL(blobUrl);
        }

        fill()



    }, [])

    return (
        <div>
            <video ref={videoRef} controls width="640" height="360">
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Player;;