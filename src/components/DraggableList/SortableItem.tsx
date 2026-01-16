import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import React from 'react';
import type {SortableItemProps} from './types';

function SortableItem({id, children, disabled = false}: SortableItemProps) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id, disabled});

    const style = {
        touchAction: 'none',
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attributes}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...(disabled ? {} : listeners)}
            // Override dnd-kit's tabIndex to prevent double focus (outer wrapper + inner MenuItem)
            tabIndex={-1}
        >
            {children}
        </div>
    );
}

export default SortableItem;


// import React from 'react';
// import {useSortable} from '@dnd-kit/sortable';
// import {CSS} from '@dnd-kit/utilities';
// import type {SortableItemProps} from './types';

// function SortableItem({id, children, disabled = false}: SortableItemProps) {
//     const {
//         attributes,
//         listeners,
//         setNodeRef,
//         transform,
//         transition,
//     } = useSortable({id, disabled});

//     const style: React.CSSProperties = {
//         touchAction: 'none',
//         transform: CSS.Transform.toString(transform),
//         transition,
//     };

//     return (
//         <div
//             ref={setNodeRef}
//             style={style}
//             // ✅ accessibility
//             role="listitem"
//             tabIndex={0}
//             aria-roledescription="draggable"
//             aria-label="Waypoint"
//             // ✅ TYPE FIX (THIS IS THE KEY)
//             {...(attributes as React.HTMLAttributes<HTMLDivElement>)}
//             {...(!disabled
//                 ? (listeners as React.HTMLAttributes<HTMLDivElement>)
//                 : {})}
//         >
//             {children}
//         </div>
//     );
// }

// export default SortableItem;







