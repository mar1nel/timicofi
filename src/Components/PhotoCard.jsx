import React, {useState, useRef, useEffect} from 'react';
import './PhotoCard.scss';

const PhotoCard = ({src, alt, startX = 100, startY = 100}) => {
    const cardRef = useRef(null);
    const [position, setPosition] = useState({x: startX, y: startY});
    const [dragging, setDragging] = useState(false);
    const velocity = useRef({x: 0, y: 0});
    const lastPos = useRef({x: startX, y: startY});
    const pointerIdRef = useRef(null);
    const animFrame = useRef(null);

    useEffect(() => {
        return () => cancelAnimationFrame(animFrame.current);
    }, []);

    const onPointerDown = (e) => {
        cardRef.current.setPointerCapture(e.pointerId);
        pointerIdRef.current = e.pointerId;
        lastPos.current = {x: position.x, y: position.y};
        velocity.current = {x: 0, y: 0};
        setDragging(true);
    };

    const onPointerMove = (e) => {
        if (!dragging || e.pointerId !== pointerIdRef.current) return;
        const newX = e.clientX - cardRef.current.offsetWidth / 2;
        const newY = e.clientY - cardRef.current.offsetHeight / 2;
        velocity.current = {
            x: newX - lastPos.current.x,
            y: newY - lastPos.current.y,
        };
        lastPos.current = {x: newX, y: newY};
        setPosition({x: newX, y: newY});
    };

    const onPointerUp = (e) => {
        if (!dragging || e.pointerId !== pointerIdRef.current) return;
        setDragging(false);
        cardRef.current.releasePointerCapture(e.pointerId);
        animateInertia();
    };

    const animateInertia = () => {
        let {x, y} = position;
        let {x: vx, y: vy} = velocity.current;
        const friction = 0.9;

        const step = () => {
            vx *= friction;
            vy *= friction;
            x += vx;
            y += vy;
            setPosition({x, y});
            velocity.current = {x: vx, y: vy};
            if (Math.hypot(vx, vy) > 0.5) {
                animFrame.current = requestAnimationFrame(step);
            }
        };
        animFrame.current = requestAnimationFrame(step);
    };

    return (
        <div
            ref={cardRef}
            className={`photo-card${dragging ? ' is-dragging' : ''}`}
            style={{top: position.y, left: position.x}}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
        >
            <div className="photo-card__frame">
                <img src={src} alt={alt} className="photo-card__image"/>
            </div>
        </div>
    );
};

export default PhotoCard;