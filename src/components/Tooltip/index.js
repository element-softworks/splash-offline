import React, { useEffect, useRef, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';

import styles from './styles.module.scss';

const Tooltip = ({ text, text2, children, placement = 'bottom' }) => {
	const [open, setOpen] = useState(false);

	return (
		<Manager>
			<Reference>
				{({ ref }) => (
					<div
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
						onTouchStart={() => setOpen(true)}
						onTouchEnd={() => setOpen(false)}
						ref={ref}
					>
						{children}
					</div>
				)}
			</Reference>
			<Popper placement={placement}>
				{({ ref, style, placement, arrowProps }) =>
					open ? (
						<div className={styles.tooltipWrapper}>
							<div
								className={`${styles.tooltip}`}
								ref={ref}
								style={style}
								data-placement={placement}
							>
								{text} {text2 && <div>{text2}</div>}
								<div ref={arrowProps.ref} style={arrowProps.style} />
							</div>
						</div>
					) : null
				}
			</Popper>
		</Manager>
	);
};

export default Tooltip;
