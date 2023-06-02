import React, { useRef, useState, userCallback, forwardRef, useImperativeHandle, useCallback, useEffect } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    // timeout,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    CanvasSnipperPlugin,
    // DiamondPlugin,
    // FrameFadePlugin,
    // GLTFAnimationPlugin,
    // GroundPlugin,
    BloomPlugin,
    // TemporalAAPlugin,
    // AnisotropyPlugin,
    GammaCorrectionPlugin,

    addBasePlugins,
    mobileAndTabletCheck

} from "webgi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = () => {
    useRef(null);
    const canvasRef = useRef(null);

    const setupViewer = useCallback(async() => {
        const viewer = new ViewerApp({
        canvas: canvasRef.current,
        })

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        const manager = await viewer.addPlugin(AssetManagerPlugin)


        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)
        await viewer.addPlugin(CanvasSnipperPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("scene-black.glb")
        viewer.getPlugin(TonemapPlugin).config.clipBackground = true

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        window.scrollTo(0, 0);

        let needsUpdated = true;

        viewer.addEventListener("preFrame", () => {

            if(needsUpdated){
                camera.positionTargetUpdated(true);
                needsUpdated = false;
            }

        });

    
    }, [])



    useEffect(() => {
        setupViewer()
    }, []);


    return(
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef}>

            </canvas>
        </div>
    )
}


export default WebgiViewer