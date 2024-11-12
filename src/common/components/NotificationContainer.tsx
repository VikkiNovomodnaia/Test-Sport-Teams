import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideNotification } from '../../redux/slices/notificationSlice'
import { AppDispatch, RootState } from '../../redux/store'
import CustomNotification from '../ui/notification/notification'

export const NotificationContainer: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const {visible, message} = useSelector((state: RootState) => state.notification)

	useEffect( () => {
		if(visible) {
			const timer = setTimeout(()=>{
				dispatch(hideNotification());
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [visible, dispatch]);

	if (!visible || !message) return null;

  return <CustomNotification message={message} />;
}



