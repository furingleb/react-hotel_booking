import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsLoadingStatus, loadBookingsList } from '../../../store/bookings';
import { getLikesLoadingStatus, loadLikesList } from '../../../store/likes';
import { getReviewsLoadingStatus, loadReviewsList } from '../../../store/reviews';
import { getRoomsLoadingStatus, loadRoomsList } from '../../../store/rooms';
import { getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from '../../../store/users';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const usersStatusLoading = useSelector(getUsersLoadingStatus());
  const roomsStatusLoading = useSelector(getRoomsLoadingStatus());
  const likesStatusLoading = useSelector(getLikesLoadingStatus());
  const reviewsStatusLoading = useSelector(getReviewsLoadingStatus());
  const bookingsStatusLoading = useSelector(getBookingsLoadingStatus());

  useEffect(() => {
    dispatch(loadUsersList());
    dispatch(loadRoomsList());
    dispatch(loadLikesList());
    dispatch(loadReviewsList());
    dispatch(loadBookingsList());
  }, [isLoggedIn]);

  if (!usersStatusLoading && !roomsStatusLoading && !reviewsStatusLoading && !bookingsStatusLoading) {
    return children;
  } else {
    return <></>;
  }
};

export default AppLoader;
