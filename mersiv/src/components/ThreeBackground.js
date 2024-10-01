import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeBackground() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        // Copy the content of your three-background.js file here,
        // but replace document.getElementById('three-background') with containerRef.current
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;

        const posArray = new Float32Array(particlesCount * 3);
        const velocityArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
            velocityArray[i] = (Math.random() - 0.5) * 0.01;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Create a circular texture for particles
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 64;
        canvas.width = size;
        canvas.height = size;
        const centerX = size / 2;
        const centerY = size / 2;
        const radius = size / 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#555555';
        ctx.fill();

        const particleTexture = new THREE.CanvasTexture(canvas);

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            map: particleTexture,
            transparent: true,
            opacity: 0.7,
            sizeAttenuation: true,
            depthWrite: false
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 5;

        // Create mouse object to store cursor position
        const mouse = new THREE.Vector2();

        // Animation
        function animate() {
            requestAnimationFrame(animate);

            const positions = particlesGeometry.attributes.position.array;

            for (let i = 0; i < positions.length; i += 3) {
                // Apply velocity
                positions[i] += velocityArray[i];
                positions[i + 1] += velocityArray[i + 1];
                positions[i + 2] += velocityArray[i + 2];

                // Boundary check and bounce
                for (let j = 0; j < 3; j++) {
                    if (Math.abs(positions[i + j]) > 5) {
                        velocityArray[i + j] *= -1;
                    }
                }

                // Mouse repulsion
                const dx = positions[i] - mouse.x * 10;
                const dy = positions[i + 1] + mouse.y * 10;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 2.5) {
                    const repelForce = (2 - dist) * 0.025;
                    positions[i] += dx * repelForce;
                    positions[i + 1] += dy * repelForce;
                }
            }

            particlesGeometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        }

        animate();

        // Resize handler
        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        // Mouse move event listener
        function onMouseMove(event) {
            // Convert mouse position to normalized device coordinates (-1 to +1)
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        // Touch move event listener for mobile devices
        function onTouchMove(event) {
            if (event.touches.length > 0) {
                // Convert touch position to normalized device coordinates (-1 to +1)
                mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
            }
        }

        // Add event listeners
        document.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('touchmove', onTouchMove, false);

        // Optional: Reset mouse position when cursor leaves the window
        function onMouseLeave() {
            mouse.x = 0;
            mouse.y = 0;
        }

        document.addEventListener('mouseleave', onMouseLeave, false);

        // Start the animation
        animate();

        // Don't forget to return a cleanup function
        return () => {
            // Remove the canvas element and dispose of Three.js objects
            if (container) {
                container.removeChild(renderer.domElement);
            }
            // Dispose of any Three.js objects if necessary
        };
    }, []);

    return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
}

export default ThreeBackground;