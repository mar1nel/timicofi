import React from 'react';
import {motion} from 'framer-motion';
import './PhotoCard.scss';

export default function PhotoCard({
                                      src,
                                      alt,
                                      caption = '',
                                      constraintsRef,
                                      initial = {x: 0, y: 0},
                                  }) {
    return (
        <motion.div
            className="photo-card"
            drag
            dragConstraints={constraintsRef}
            dragMomentum
            dragElastic={0.3}
            initial={false}
            animate={initial}
            whileDrag={{scale: 1.1}}
            whileHover={{scale: 1.05}}
            style={{position: 'absolute', top: 0, left: 0}}
        >
            <div className="photo-card__frame">
                <img src={src} alt={alt} className="photo-card__image"/>
                {caption && <div className="photo-card__caption">{caption}</div>}
            </div>
        </motion.div>
    );
}
