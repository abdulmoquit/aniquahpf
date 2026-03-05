import { useEffect, useRef, memo } from 'react';

/**
 * Cute flower cursor that follows the mouse with smooth trailing.
 * Uses requestAnimationFrame for 60fps performance — no React re-renders.
 */
const FlowerCursor = memo(() => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });
    const trailPos = useRef({ x: 0, y: 0 });
    const rafId = useRef<number>(0);
    const visible = useRef(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            if (!visible.current && cursorRef.current && trailRef.current) {
                visible.current = true;
                cursorRef.current.style.opacity = '1';
                trailRef.current.style.opacity = '1';
            }
        };

        const onMouseLeave = () => {
            if (cursorRef.current && trailRef.current) {
                visible.current = false;
                cursorRef.current.style.opacity = '0';
                trailRef.current.style.opacity = '0';
            }
        };

        const animate = () => {
            // Smooth follow with lerp
            pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
            pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

            // Trail follows even slower
            trailPos.current.x += (mouse.current.x - trailPos.current.x) * 0.08;
            trailPos.current.y += (mouse.current.y - trailPos.current.y) * 0.08;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
            }
            if (trailRef.current) {
                trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        document.documentElement.addEventListener('mouseleave', onMouseLeave);
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.documentElement.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    // Flower SVG — a small, cute 5-petal daisy
    const flowerSVG = `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.85">
        <!-- Petals -->
        <ellipse cx="14" cy="6" rx="3.5" ry="5.5" fill="hsl(340, 60%, 75%)" transform="rotate(0, 14, 14)"/>
        <ellipse cx="14" cy="6" rx="3.5" ry="5.5" fill="hsl(350, 55%, 78%)" transform="rotate(72, 14, 14)"/>
        <ellipse cx="14" cy="6" rx="3.5" ry="5.5" fill="hsl(330, 50%, 80%)" transform="rotate(144, 14, 14)"/>
        <ellipse cx="14" cy="6" rx="3.5" ry="5.5" fill="hsl(345, 55%, 76%)" transform="rotate(216, 14, 14)"/>
        <ellipse cx="14" cy="6" rx="3.5" ry="5.5" fill="hsl(355, 50%, 80%)" transform="rotate(288, 14, 14)"/>
        <!-- Center -->
        <circle cx="14" cy="14" r="3.5" fill="hsl(45, 80%, 65%)"/>
        <circle cx="14" cy="14" r="2" fill="hsl(40, 75%, 55%)"/>
      </g>
    </svg>
  `;

    return (
        <>
            {/* Flower cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
                style={{
                    opacity: 0,
                    willChange: 'transform',
                    transition: 'opacity 0.3s ease',
                }}
                dangerouslySetInnerHTML={{ __html: flowerSVG }}
            />

            {/* Soft glow trail */}
            <div
                ref={trailRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block"
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, hsl(340 60% 75% / 0.12) 0%, transparent 70%)',
                    opacity: 0,
                    willChange: 'transform',
                    transition: 'opacity 0.4s ease',
                }}
            />
        </>
    );
});

FlowerCursor.displayName = 'FlowerCursor';

export default FlowerCursor;
