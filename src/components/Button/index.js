import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

import styles from './styles.module.scss';
import Tooltip from '@components/Tooltip';

const Button = ({
	className = '',
	primary = true,
	secondary = false,
	light = false,
	transparent = false,
	success = false,
	error = false,
	danger = false,
	warning = false,
	info = false,
	big = false,
	icon = null,
	iconBadge = false,
	iconBefore = false,
	children,
	link = null,
	onClick = null,
	float = false,
	small = false,
	inverse = false,
	disabled = false,
	loading = false,
	submitting = false,
	fullWidth = false,
	text = '',
	border = true,
	allowDisabledOnClick = false,
	tooltip = false,
	type = 'button',
}) => {
	const Wrapper = ({ children }) => {
		if (!tooltip) return children;
		return <Tooltip text={tooltip}>{children}</Tooltip>;
	};

	const primaryClass =
		primary && !secondary && !warning && !error && !danger && !disabled ? styles.buttonPrimary : '';
	const secondaryClass = secondary ? styles.buttonSecondary : '';
	const bigClass = big ? styles.buttonBig : '';
	const smallClass = small ? styles.buttonSmall : '';
	const inverseClass = inverse ? styles.buttonInverse : '';
	const floatClass = float ? styles.buttonFloat : '';
	const lightClass = light ? styles.buttonLight : '';
	const disabledClass = disabled ? styles.buttonDisabled : '';
	const submittingClass = loading || submitting ? styles.buttonSubmitting : '';
	const blockClass = fullWidth ? styles.buttonBlock : '';
	const transparentClass = transparent ? styles.buttonTransparent : '';
	const successClass = success ? styles.buttonSuccess : '';
	const errorClass = error || danger ? styles.buttonError : '';
	const infoClass = info ? styles.buttonInfo : '';
	const warningClass = warning ? styles.buttonWarning : '';
	const iconOnlyClass = icon && !text && !children ? styles.buttonIconOnly : '';
	const iconBadgeClass = iconBadge && icon && !text && !children ? styles.buttonIconBadge : '';
	const noBorderClass = !border ? styles.buttonNoBorder : '';
	const iconBeforeClass = iconBefore ? styles.buttonIconBefore : '';

	const buttonClasses = `${styles.button} ${iconBeforeClass} ${noBorderClass} ${warningClass} ${iconOnlyClass} ${iconBadgeClass} ${infoClass} ${successClass} ${errorClass} ${transparentClass} ${blockClass} ${submittingClass} ${disabledClass} ${className} ${primaryClass} ${secondaryClass} ${bigClass} ${smallClass} ${floatClass} ${inverseClass} ${lightClass}`;

	const handleClick = (e) => {
		e.stopPropagation();
		if (disabled) e.preventDefault();
		if ((allowDisabledOnClick || !disabled) && !submitting && !loading && onClick) onClick(e);
	};

	const submitIcon =
		submitting || loading ? (
			<div className={styles.buttonSubmittingIcon}>
				<FontAwesomeIcon icon={['fas', 'circle-notch']} spin />
			</div>
		) : null;

	icon = !submitting && !loading && icon ? <FontAwesomeIcon icon={icon} /> : null;

	const content = (
		<Fragment>
			{submitIcon || (
				<Fragment>
					{iconBefore && icon}
					{(text || children) && icon ? <span>{text || children}</span> : text || children}
					{!iconBefore && icon}
				</Fragment>
			)}
		</Fragment>
	);

	// If we need a button for reasons such as <form> submitting return a <button> element
	if (link === null) {
		return (
			<Wrapper>
				<button className={buttonClasses} type={type} onClick={handleClick}>
					{content}
				</button>
			</Wrapper>
		);
	}

	// if link is external, don't use internal Link component
	if (/^((http|https|tel|mailto):)/.test(link)) {
		return (
			<Wrapper>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className={buttonClasses}
					onClick={handleClick}
				>
					{content}
				</a>
			</Wrapper>
		);
	}

	// Otherwise we should return a <Link /> for accessibility reasons
	return (
		<Wrapper>
			<Link to={link} className={buttonClasses} onClick={handleClick}>
				{content}
			</Link>
		</Wrapper>
	);
};

export default Button;
