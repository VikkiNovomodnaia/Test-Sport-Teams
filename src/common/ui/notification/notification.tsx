import classNames from 'classnames'
import React from 'react'
import cls from './notification.module.scss'

interface CustomNotificationProps{
    message: string;
    className?: string;
}

const CustomNotification: React.FC<CustomNotificationProps> = ({className, message, ...props}) => {
    return (
        <div        
            className={classNames(cls.notification, className)}
            {...props}>

            <span>{message}</span>
        </div>
    );
};

export default CustomNotification;