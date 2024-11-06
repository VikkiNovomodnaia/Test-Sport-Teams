import classNames from 'classnames'
import React from 'react'
import cls from './notification.module.scss'

interface CustomNotificationProps{
    duration?: number;
    message: string;
    className?: string;
}
const CustomNotification: React.FC<CustomNotificationProps> = ({className, message, ...props}) => {
    return (
        <div 
            duration='3000'           
            className={classNames(cls.notification, className)}
            {...props}>

            <span>{message}</span>
        </div>
    );
};

export default CustomNotification;