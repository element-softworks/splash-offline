import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { subcomponent } from '@helpers';
import Button from '@components/Button';

import styles from './styles.module.scss';

const Alert = ({ children, type, title, message, closable = false }) => {
    const [closed, setClosed] = useState(false);
    let alertType = null;
    let alertTypeClass = null;
    let alertIcon = null;

    switch (type) {
        case 'info': {
            alertType = 'info';
            alertTypeClass = styles.alertTypeInfo;
            alertIcon = <FontAwesomeIcon icon="info-circle" />;
            break;
        }
        case 'success': {
            alertType = 'success';
            alertTypeClass = styles.alertTypeSuccess;
            alertIcon = <FontAwesomeIcon icon="check-circle" />;
            break;
        }
        case 'warning': {
            alertType = 'warning';
            alertTypeClass = styles.alertTypeWarning;
            alertIcon = <FontAwesomeIcon icon="exclamation-triangle" />;
            break;
        }
        case 'error': {
            alertType = 'error';
            alertTypeClass = styles.alertTypeError;
            alertIcon = <FontAwesomeIcon icon="exclamation-circle" />;
            break;
        }
        case 'secondary': {
            alertType = 'secondary';
            alertTypeClass = styles.alertTypeSecondary;
            break;
        }
        default: {
            alertType = '';
            alertTypeClass = '';
        }
    }

    if (closed) {
        return null;
    }

    return (
        <div
            className={`${styles.alert} ${alertTypeClass} ${!title ? styles.alertHasNoTitle : ''}`}
        >
            {alertIcon}
            <div className={styles.alertContent}>
                {title && <h3>{title}</h3>}
                {message && <p>{message}</p>}
            </div>
            {subcomponent(children, Actions, true, { type: alertType })}
            {closable && (
                <span className={styles.alertClose} onClick={() => setClosed(true)}>
                    <FontAwesomeIcon icon="times" />
                </span>
            )}
        </div>
    );
};

const Actions = ({ right, type, children }) => (
    <div className={`${styles.alertActions} ${right ? styles.alertActionsRight : ''}`}>
        {subcomponent(children, Action, false, { type })}
    </div>
);
const Action = ({ children, type, className = '', ...props }) => {
    const { primary, secondary, warning, error, danger, success } = props;
    const hasDefinedType = primary || secondary || warning || error || danger || success;
    return (
        <div className={styles.alertActionsAction}>
            <Button
                small
                error={!hasDefinedType && type === 'error'}
                warning={!hasDefinedType && type === 'warning'}
                success={!hasDefinedType && type === 'success'}
                info={!hasDefinedType && type === 'info'}
                secondary={!hasDefinedType && type === 'secondary'}
                {...props}
                className={`${className}`}
            >
                {children}
            </Button>
        </div>
    );
};

Alert.Actions = Actions;
Alert.Actions.Action = Action;

Actions.displayName = 'Actions';
Action.displayName = 'Action';

export default Alert;
